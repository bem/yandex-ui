import React, { ComponentType, RefObject, PureComponent, createRef, Ref } from 'react';

import { isKeyCode, Keys } from '../lib/keyboard';
import { getDisplayName } from '../lib/getDisplayName';
import { mergeAllRefs } from '../lib/mergeRefs';
import { canUseDOM } from '../lib/canUseDOM';
import { Defaultize } from '../typings/utility-types';

let POINTER_DOWN = 'pointerdown';
let POINTER_UP = 'pointerup';

if (canUseDOM()) {
    if (!(window as any).PointerEvent) {
        POINTER_DOWN = 'mousedown';
        POINTER_UP = 'mouseup';
        if (!(window as any).MouseEvent) {
            POINTER_UP = 'click';
        }
    }
}

export interface IWrappedComponentProps {
    /**
     * Видимость компонента.
     */
    visible?: boolean;

    /**
     * Ссылка на DOM элемент, в рамках которого не нужно отслеживать клик.
     */
    targetRef?: Ref<HTMLElement>;
}

export interface IWithOutsideClickProps extends IWrappedComponentProps {
    /**
     * Обработчик вызывающийся после того, как произошло нажатие на escape.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;

    /**
     * Обработчик вызывающийся после того, как произошел клик вне компонента.
     */
    onOutsideClick?: (event: MouseEvent) => void;

    /**
     * Ссылки на DOM элементы, в рамках которых не нужно отслеживать клик.
     */
    ignoreRefs?: RefObject<HTMLElement>[];
}

const defaultProps = {
    ignoreRefs: [] as RefObject<HTMLElement>[],
};

type DefaultProps = keyof typeof defaultProps;
type WithOutsideClickProps = Defaultize<IWithOutsideClickProps, DefaultProps>;

export const withOutsideClick = <TProps extends IWrappedComponentProps>(WrappedComponent: ComponentType<TProps>) => {
    class WithOutsideClick extends PureComponent<TProps & WithOutsideClickProps> {
        static displayName = `withOutsideClick(${getDisplayName(WrappedComponent)})`;

        static defaultProps = defaultProps as TProps & WithOutsideClickProps;

        /**
         * Контейнер с ссылкой на DOM элемент оборачиваемого компонента.
         */
        readonly targetRef = createRef<HTMLElement>();

        private pointerDownEventSource: HTMLElement | null = null;

        componentDidMount() {
            if (this.props.visible) {
                this.subscribeToEvents();
            }
        }

        componentWillUnmount() {
            this.unsubscribeFromEvents();
        }

        componentDidUpdate(prevProps: IWithOutsideClickProps) {
            if (!prevProps.visible && this.props.visible) {
                this.subscribeToEvents();
            } else if (prevProps.visible && !this.props.visible) {
                this.unsubscribeFromEvents();
            }
        }

        render() {
            const { ignoreRefs, ...props } = this.props;

            return <WrappedComponent
                {...(props as TProps)}
                targetRef={mergeAllRefs(this.targetRef, this.props.targetRef)}
            />;
        }

        subscribeToEvents() {
            document.addEventListener(POINTER_DOWN, this.onPointerDown as EventListener);
            document.addEventListener(POINTER_UP, this.onPointerUp as EventListener);
            document.addEventListener('keydown', this.onKeyDown);
        }

        unsubscribeFromEvents() {
            document.removeEventListener(POINTER_DOWN, this.onPointerDown as EventListener);
            document.removeEventListener(POINTER_UP, this.onPointerUp as EventListener);
            document.removeEventListener('keydown', this.onKeyDown);
        }

        onPointerDown = (event: PointerEvent) => {
            this.pointerDownEventSource = event.target as HTMLElement;
        };

        onPointerUp = (event: PointerEvent) => {
            const ignoreElements = [...this.props.ignoreRefs, this.targetRef];
            if (
                this.props.onOutsideClick !== undefined &&
                ignoreElements.every((element: RefObject<HTMLElement>) => (
                    element.current !== null &&
                    !element.current.contains(this.pointerDownEventSource) && // mouseDown не в ignoreElements
                    !element.current.contains(event.target as HTMLElement)), // mouseUp не в ignoreElements
                )
            ) {
                this.props.onOutsideClick(event);
            }
            this.pointerDownEventSource = null;
        };

        onKeyDown = (event: KeyboardEvent) => {
            if (this.props.onEscapeKeyDown !== undefined && isKeyCode(event.keyCode, [Keys.ESC])) {
                this.props.onEscapeKeyDown(event);
            }
        };
    }

    return WithOutsideClick as ComponentType<TProps & IWithOutsideClickProps>;
};
