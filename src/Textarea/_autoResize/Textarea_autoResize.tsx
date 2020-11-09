import React, { PureComponent, createRef, ComponentType, ComponentClass } from 'react';

import { mergeAllRefs } from '../../lib/mergeRefs';
import { throttle } from '../../lib/throttle';
import { getDisplayName } from '../../lib/getDisplayName';
import { ITextareaProps, cnTextarea } from '../Textarea';
import './Textarea_autoResize.css';

/**
 * Модификатор который увеличивает размер контрола при наборе текста.
 */
export function withAutoResize<T extends ITextareaProps>(WrappedComponent: ComponentType<T>): ComponentClass<T> {
    class WithAutoResize extends PureComponent<T> {
        static displayName = `withAutoResize(${getDisplayName(WrappedComponent)})`;
        private readonly wrapRef = createRef<HTMLSpanElement>();
        private readonly controlRef = createRef<HTMLTextAreaElement>();
        private initialHeight: number = 0;
        private newHeight: number = 0;

        private onResize = throttle(this.updateHeight).bind(this);

        componentDidMount() {
            this.saveInitialHeight();
            this.updateHeight();
            window.addEventListener('resize', this.onResize);
        }

        componentDidUpdate(prevProps: ITextareaProps): void {
            // Если компонент скрыт на момент componentDidMount, то минимальная высота будет вычислена неверно (= 0).
            // Используем активацию фокуса как признак того, что компонент был показан пользователю.
            if (this.props.focused && this.props.focused !== prevProps.focused) {
                this.recalcInitialHeight();
            }

            this.updateHeight();
        }

        componentWillUnmount(): void {
            window.removeEventListener('resize', this.onResize);
        }

        render() {
            const { className, controlRef = null, wrapRef = null } = this.props;
            return (
                <WrappedComponent
                    {...this.props}
                    className={cnTextarea({ autoResize: true }, [className])}
                    controlRef={mergeAllRefs(this.controlRef, controlRef)}
                    wrapRef={mergeAllRefs(this.wrapRef, wrapRef)}
                />
            );
        }

        /**
         * Сохраняем минимальную высоту которую нужно будет проставлять при удалении текста.
         */
        private saveInitialHeight() {
            if (this.wrapRef.current) {
                this.initialHeight = this.wrapRef.current.clientHeight;
            }
        }

        /**
         * Пересчет минимальной высоты которую нужно будет проставлять при удалении текста.
         */
        private recalcInitialHeight() {
            if (this.wrapRef.current) {
                this.wrapRef.current.style.height = 'auto';
                this.saveInitialHeight();
            }
        }

        /**
         * Обновление высоты корневому блоку компонента в зависимости от размера контрола.
         * Для уменьшении блока при удалении текста нужно вначале выставить его стиль высоты в initialHeight.
         * Иначе блок с удаленным текстом будет всегда оставаться с тем размером который ему выставили в стилях.
         * Получается, что scrollHeight вычисляется всегда относительно initialHeight размера контейнера.
         * Высота контейнера вычисляется относительно контрола учитывая его отступы.
         */
        private updateHeight() {
            if (this.wrapRef && this.wrapRef.current) {
                if (this.newHeight > this.initialHeight) {
                    this.wrapRef.current.style.height = `${this.initialHeight}px`;
                    this.newHeight = this.initialHeight;
                }
                if (this.controlRef && this.controlRef.current) {
                    // Цикл, чтобы перепроверить получившийся элемент, т.к. после его увеличения может появиться скролл
                    // который выдавит текст внутри него и тогда часть текста может быть не видна
                    let i = 2; // Подстраховка
                    while (this.controlRef.current.scrollHeight > this.controlRef.current.offsetHeight && i--) {
                        let padding = this.controlRef.current.offsetHeight - this.controlRef.current.clientHeight;
                        this.newHeight = this.controlRef.current.scrollHeight;
                        this.wrapRef.current.style.height = `${this.newHeight + padding}px`;
                    }
                }
            }
        }
    }

    return WithAutoResize;
}
