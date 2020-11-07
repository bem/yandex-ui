import React, { FC, Ref, ChangeEventHandler, MouseEventHandler, KeyboardEventHandler, FocusEventHandler } from 'react';

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
    value?: string | number;

    /**
     * Значение по умолчанию контрола
     */
    defaultValue?: string | number;

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
     * Обработчик изменения значения
     */
    onInput?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLInputElement>;

    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter?: MouseEventHandler<HTMLInputElement>;

    /**
     * Обработчик, вызываемый при срабатывании события blur
     */
    onBlur?: FocusEventHandler<HTMLInputElement>;

    /**
     * Обработчик, вызываемый при срабатывании события focus
     */
    onFocus?: FocusEventHandler<HTMLInputElement>;

    /**
     * Устанавливает в компоненте обязательное состояние
     */
    required?: boolean;

    /**
     * Минимальное значение при использовании `type=number` или `type=datetime-local`
     */
    min?: number | string;

    /**
     * Максимальное значение при использовании `type=number` или `type=datetime-local`
     */
    max?: number | string;

    /**
     * Шаблон, используемый для проверки значения при отправке формы
     */
    pattern?: string;

    /**
     * Целое число, определяющее должен ли переключатель участвовать
     * в последовательной навигации по всей странице с помощью клавиатуры
     */
    tabIndex?: number;

    /**
     * Максимальное количество символов которое можно ввести в текстовое поле
     */
    maxLength?: number;

    /**
     * Запрещает изменять значение в текстовом поле
     */
    readOnly?: boolean;

    /**
     * Обработчик, вызываемый при срабатывании события keyup
     */
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;

    /**
     * Обработчик, вызываемый при срабатывании события keypress
     */
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>;

    /**
     * Обработчик, вызываемый при срабатывании события keydown
     */
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const TextinputControl: FC<ITextinputControlProps> = ({
    autoComplete = 'off',
    autoFocus,
    className,
    controlRef,
    defaultValue,
    disabled,
    id,
    inputMode,
    max,
    maxLength,
    min,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    pattern,
    placeholder,
    readOnly,
    required,
    tabIndex,
    type,
    value,
    ...props
}) => (
    <input
        {...props}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={cnTextinput('Control', null, [className])}
        // @ts-ignore
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        inputMode={inputMode}
        max={max}
        maxLength={maxLength}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={controlRef}
        required={required}
        tabIndex={tabIndex}
        type={type}
        value={value}
    />
);
