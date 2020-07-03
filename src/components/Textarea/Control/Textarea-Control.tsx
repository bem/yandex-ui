import React, { Ref, FC, ChangeEventHandler } from 'react';

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
}

export const TextareaControl: FC<ITextareaControlProps> = ({
    className,
    cols,
    controlRef,
    rows,
    ...props
}) => (
    <textarea
        {...props}
        ref={controlRef}
        className={cnTextarea('Control', null, [className])}
        cols={cols}
        rows={rows}
    />
);
