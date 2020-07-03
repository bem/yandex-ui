import React, { FC, Ref, ChangeEventHandler, MouseEventHandler } from 'react';

import { cnTextinput } from '../Textinput';
import './Textinput-Control.css';

export interface ITextinputControlProps {
    /**
     * HTML-атрибут `inputmode`
     */
    inputMode?: 'decimal' | 'numeric' | 'text' | 'url' | 'email' | 'search' | 'tel';

    /**
     * Ссылка на DOM элемент нативного инпута
     */
    controlRef?: Ref<HTMLInputElement>;

    /**
     * HTML-атрибут `autofocus`
     */
    autoFocus?: boolean;

    /**
     * HTML-атрибут `autocomplete`
     */
    autoComplete?: string;

    /**
     * Имя компонента
     */
    name?: string;

    /**
     * Плейсхолдер
     */
    placeholder?: string;

    /**
     * Значение контрола
     */
    value?: string;

    /**
     * Значение по умолчанию контрола
     */
    defaultValue?: string;

    /**
     * HTML-атрибут `type`
     */
    type?: string;

    /**
     * HTML-атрибут `disabled`
     */
    disabled?: boolean;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLInputElement>;

    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter?: MouseEventHandler<HTMLInputElement>;
}

export const TextinputControl: FC<ITextinputControlProps> = ({ autoComplete = 'off', className, controlRef, ...props }) => (
    <input
        {...props}
        ref={controlRef}
        className={cnTextinput('Control', null, [className])}
        autoComplete={autoComplete}
    />
);
