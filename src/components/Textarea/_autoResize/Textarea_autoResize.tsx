import React, { PureComponent, createRef, ComponentType, ComponentClass } from 'react';

import { mergeAllRefs } from '../../../lib/mergeRefs';
import { ITextareaProps, cnTextarea } from '../Textarea';
import { throttle } from '../../../lib/throttle';
import { getDisplayName } from '../../../lib/getDisplayName';

import './Textarea_autoResize.css';

/**
 * Модификатор который увеличивает размер контрола при наборе текста.
 */
export function withAutoResize<T extends ITextareaProps>(WrappedComponent: ComponentType<T>): ComponentClass<T> {
    class WithAutoResize extends PureComponent<T> {
        static displayName = `withAutoResize(${getDisplayName(WrappedComponent)})`;
        private readonly innerRef = createRef<HTMLSpanElement>();
        private readonly controlRef = createRef<HTMLTextAreaElement>();
        private initialHeight: number = 0;
        private newHeight: number = 0;

        private onResize = throttle(this.updateHeight).bind(this);

        componentDidMount() {
            this.saveInitialHeight();
            this.updateHeight();
            window.addEventListener('resize', this.onResize);
        }

        componentDidUpdate(): void {
            this.updateHeight();
        }

        componentWillUnmount(): void {
            window.removeEventListener('resize', this.onResize);
        }

        render() {
            const { className, controlRef = null, innerRef = null } = this.props;
            return (
                <WrappedComponent
                    {...this.props}
                    className={cnTextarea({ autoResize: true }, [className])}
                    controlRef={mergeAllRefs(this.controlRef, controlRef)}
                    innerRef={mergeAllRefs(this.innerRef, innerRef)}
                />
            );
        }

        /**
         * Сохраняем минимальную высоту которую нужно будет проставлять при удалении текста.
         */
        private saveInitialHeight() {
            if (this.innerRef.current) {
                this.initialHeight = this.innerRef.current.clientHeight;
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
            if (this.innerRef && this.innerRef.current) {
                if (this.newHeight > this.initialHeight) {
                    this.innerRef.current.style.height = `${this.initialHeight}px`;
                    this.newHeight = this.initialHeight;
                }
                if (this.controlRef && this.controlRef.current) {
                    // Цикл, чтобы перепроверить получившийся элемент, т.к. после его увеличения может появиться скролл
                    // который выдавит текст внутри него и тогда часть текста может быть не видна
                    let i = 2; // Подстраховочка
                    while (this.controlRef.current.scrollHeight > this.controlRef.current.offsetHeight && i--) {
                        let padding = this.controlRef.current.offsetHeight - this.controlRef.current.clientHeight;
                        this.newHeight = this.controlRef.current.scrollHeight;
                        this.innerRef.current.style.height = `${this.newHeight + padding}px`;
                    }
                }
            }
        }
    }

    return WithAutoResize;
}
