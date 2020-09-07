import React, { FC, Ref, ReactNode, useState, useCallback, useRef, MouseEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { useUpdateEffect } from '../useUpdateEffect';
import { IWithControlProps, withControl } from '../withControl/withControl';
import { IWithControlProps as IWithControlPropsDesktop } from '../withControl/withControl@desktop';
import { ITextareaControlProps } from './Control/Textarea-Control';
import { ITextareaRegistry } from './Textarea.registry';
import './Textarea.css';

export interface ITextareaProps
    extends IWithControlProps<HTMLTextAreaElement>,
        // https://st.yandex-team.ru/ISL-6012
        IWithControlPropsDesktop<HTMLTextAreaElement>,
        ITextareaControlProps {
    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия на кнопку мыши.
     * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;

    /**
     * Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши.
     * Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;

    /**
     * Состояние фокуса на компоненте
     */
    focused?: boolean;

    /**
     * Состояние нажатия на компоненте
     */
    pressed?: boolean;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Состояние, которое возникает при наведении на компонент курсором
     */
    hovered?: boolean;

    /**
     * Дополнительный контент после контрола.
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед контролом.
     */
    addonBefore?: ReactNode;

    /**
     * Ссылка на корневой DOM элемент компонента.
     */
    innerRef?: Ref<HTMLSpanElement>;

    /**
     * Ссылка на враппер DOM-элемента нативного инпута.
     */
    wrapRef?: Ref<HTMLSpanElement>;

    /**
     * Текст-подсказка, появляющаяся после компонента.
     * Может иметь различное визуальное оформление в зависимости от свойства `state`.
     */
    hint?: string;

    /**
     * Визуальное состояние компонента.
     * Может использоваться при проверке формы на корректность.
     */
    state?: 'error';

    /**
     * Всплывающая подсказка
     */
    title?: string;
}

export const cnTextarea = cn('Textarea');

/**
 * Многострочное текстовое поле.
 * @param {ITextareaProps} props
 */
const TextareaBase: FC<ITextareaProps> = ({
    addonAfter,
    addonBefore,
    disabled,
    focused,
    hovered,
    onMouseEnter,
    onMouseLeave,
    innerRef,
    wrapRef,
    className: textareaClassName,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    pressed: _pressed,
    // @ts-ignore
    view: _view,
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    hint: htmlHint,
    state,
    title,
    ...props
}) => {
    const className = cnTextarea(
        {
            hovered,
            focused,
            disabled,
            state,
        },
        [textareaClassName],
    );

    const { Wrap, Control, Box, Hint } = useComponentRegistry<ITextareaRegistry>(cnTextarea());
    const [hint, setHint] = useState(htmlHint);
    const [hintLeave, setHintLeave] = useState(false);
    const prevHint = useRef(htmlHint);

    useUpdateEffect(() => {
        if (htmlHint) {
            setHint(htmlHint);
        } else if (prevHint.current) {
            setHintLeave(true);
        }
        prevHint.current = htmlHint;
    }, [htmlHint]);

    const onAnimationEnd = useCallback(() => {
        if (!htmlHint) {
            setHint('');
            setHintLeave(false);
        }
    }, [htmlHint]);

    return (
        <span
            ref={innerRef}
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            title={title}
        >
            {addonBefore}
            <Wrap innerRef={wrapRef}>
                <Control {...props} aria-invalid={state === 'error'} disabled={disabled} />
                <Box />
            </Wrap>
            {addonAfter}
            {hint && (
                <Hint leave={hintLeave} onAnimationEnd={onAnimationEnd}>
                    {hint}
                </Hint>
            )}
        </span>
    );
};

TextareaBase.displayName = cnTextarea();

export const Textarea = withControl(TextareaBase);
