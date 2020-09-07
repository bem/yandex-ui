import React, { Ref, FC, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from 'react';

import { cnTextarea } from '../Textarea';
import './Textarea-Control.css';

export interface ITextareaControlProps {
    /**
     * Ссылка на DOM элемент нативного инпута
     */
    controlRef?: Ref<HTMLTextAreaElement>;

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;

    /**
     * Обработчик изменения значения
     */
    onInput?: ChangeEventHandler<HTMLTextAreaElement>;

    /**
     * HTML-атрибут `autofocus`
     */
    autoFocus?: boolean;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * HTML-атрибут `name`
     */
    name?: string;

    /**
     * Плейсхолдер
     */
    placeholder?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * HTML-атрибут `cols`
     */
    cols?: number;

     /**
     * HTML-атрибут `rows`
     */
    rows?: number;

    /**
     * HTML-атрибут `disabled`
     */
    disabled?: boolean;

    /**
     * Значение контрола
     */
    value?: string;

    /**
     * Значение по умолчанию контрола
     */
    defaultValue?: string;

    /**
     * Обработчик, вызываемый при срабатывании события blur
     */
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;

    /**
     * Обработчик, вызываемый при срабатывании события focus
     */
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;

    /**
     * Устанавливает в компоненте обязательное состояние
     */
    required?: boolean;

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
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;

    /**
     * Обработчик, вызываемый при срабатывании события keypress
     */
    onKeyPress?: KeyboardEventHandler<HTMLTextAreaElement>;

    /**
     * Обработчик, вызываемый при срабатывании события keydown
     */
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
}

export const TextareaControl: FC<ITextareaControlProps> = ({
    autoFocus,
    className,
    cols,
    controlRef,
    defaultValue,
    disabled,
    id,
    maxLength,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    readOnly,
    required,
    rows,
    tabIndex,
    value,
    ...props
}) => (
    <textarea
        {...props}
        autoFocus={autoFocus}
        className={cnTextarea('Control', null, [className])}
        cols={cols}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={controlRef}
        required={required}
        rows={rows}
        tabIndex={tabIndex}
        value={value}
    />
);
