import React, { FC, Ref, ChangeEventHandler, KeyboardEventHandler, } from 'react';

import { cnCheckbox } from '../Checkbox';
import './Checkbox-Control.css';

export interface ICheckboxControlProps {
    /**
     * Ссылка на DOM элемент нативного инпута
     */
    controlRef?: Ref<HTMLInputElement>;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Имя компонента
     */
    name?: string;

    /**
     * HTML-атрибут `autoComplete`
     */
    autoComplete?: string;

    /**
     * HTML атрибут `disabled`
     */
    disabled?: boolean;

    /**
     * Чекбокс был выбран
     */
    checked?: boolean;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Обработчик события `onKeyUp`
     */
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;

    /**
     * Обработчик события `onKeyDown`
     */
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const CheckboxControl: FC<ICheckboxControlProps> = ({ controlRef, className, ...props }) => (
    <input
        {...props}
        // Отключаем autoComplete, чтобы в FireFox
        // не сохранялось значение при перезагрузке страницы.
        autoComplete="off"
        className={cnCheckbox('Control', null, [className])}
        ref={controlRef}
        type="checkbox"
    />
);
