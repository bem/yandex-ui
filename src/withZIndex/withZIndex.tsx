import React, { ComponentType, PureComponent, createRef, Ref } from 'react';

import { Defaultize } from '../typings/utility-types';
import { getDisplayName } from '../lib/getDisplayName';
import { mergeAllRefs } from '../lib/mergeRefs';

type ZIndexesStack = {
    [key: string]: number[] | undefined;
};

const ZINDEX_FACTOR = 1000;
const ZINDEXES_STACK: ZIndexesStack = {};

export interface IWrappedComponentProps {
    /**
     * Видимость компонента.
     */
    visible?: boolean;

    /**
     * Ссылка на DOM элемент компонента.
     */
    innerRef?: Ref<HTMLElement>;
}

export interface IWithZIndexProps extends IWrappedComponentProps {
    /**
     * Уровень слоев `z-index` для компонент.
     *
     * @defaultvalue `0`
     */
    zIndexGroupLevel?: number;
}

const defaultProps = {
    zIndexGroupLevel: 0,
};

type DefaultProps = keyof typeof defaultProps;
type WithZIndexProps = Defaultize<IWithZIndexProps, DefaultProps>;

export const withZIndex = <TProps extends IWrappedComponentProps>(WrappedComponent: ComponentType<TProps>) =>
    class WithZIndex extends PureComponent<TProps & WithZIndexProps> {
        static displayName = `withZIndex(${getDisplayName(WrappedComponent)})`;

        static defaultProps = defaultProps as TProps & WithZIndexProps;

        /**
         * Текущий `z-index` компонента
         */
        currentZIndex = 0;

        /**
         * Контейнер с ссылкой на DOM элемент компонента.
         */
        readonly innerRef = createRef<HTMLElement>();

        componentDidMount() {
            if (this.props.visible) {
                this.updateZIndexPosition();
            }
        }

        componentDidUpdate(prevProps: WithZIndexProps) {
            if (prevProps.visible !== this.props.visible) {
                this.updateZIndexPosition();
            }
        }

        componentWillUnmount() {
            if (this.currentZIndex !== 0) {
                this.releaseZIndex(this.props.zIndexGroupLevel, this.currentZIndex);
            }
        }

        render() {
            const { zIndexGroupLevel, ...props } = this.props;

            return (
                <WrappedComponent {...(props as TProps)} innerRef={mergeAllRefs(this.innerRef, this.props.innerRef)} />
            );
        }

        /**
         * Обновлять стили, отвечающие за позиционирование у DOM элемента компонента.
         */
        updateZIndexPosition() {
            requestAnimationFrame(() => {
                const { visible, zIndexGroupLevel } = this.props;

                if (visible && this.currentZIndex === 0) {
                    this.currentZIndex = this.captureZIndex(zIndexGroupLevel);
                } else if (!visible) {
                    this.currentZIndex = this.releaseZIndex(zIndexGroupLevel, this.currentZIndex);
                }
                // имеет смысл обновлять zIndex только у видимого элемента
                if (visible) {
                    // Обновляем стили сразу у DOM узла, а не через setState,
                    // т.к. это не вызывает лишний раз re-render и повышает производительность.
                    if (this.innerRef.current !== null) {
                        this.innerRef.current.style.zIndex = String(this.currentZIndex);
                    } else {
                        // пробуем проставить zIndex в следующем кадре, если в текущем ref еще не существует
                        this.updateZIndexPosition();
                    }
                }
            });
        }

        /**
         * Занимает наименьший свободный z-index в стеке для своего уровня и возвращает его.
         *
         * @param zIndexGroupLevel Уровень в стеке для которого необходимо занять `z-index`
         */
        captureZIndex(zIndexGroupLevel: number) {
            let zIndexes = ZINDEXES_STACK[zIndexGroupLevel];

            if (zIndexes === undefined) {
                zIndexes = [(zIndexGroupLevel + 1) * ZINDEX_FACTOR];
                ZINDEXES_STACK[zIndexGroupLevel] = zIndexes;
            }

            const nextZIndex = zIndexes[zIndexes.length - 1] + 1;

            zIndexes.push(nextZIndex);

            return nextZIndex;
        }

        /**
         * Освобождает `z-index` в стеке и возвращает нулевую позицию.
         *
         * @param zIndexGroupLevel Уровень в стеке для которого необходимо освободить `z-index`
         * @param currentZIndex Текущий `z-index` компонента
         */
        releaseZIndex(zIndexGroupLevel: number, currentZIndex: number) {
            const zIndexes = ZINDEXES_STACK[zIndexGroupLevel];

            if (zIndexes !== undefined && zIndexes.length > 1) {
                zIndexes.splice(zIndexes.indexOf(currentZIndex), 1);
            }

            return 0;
        }
    } as ComponentType<TProps & IWithZIndexProps>;
