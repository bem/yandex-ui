import React, { FC, Ref, ChangeEventHandler, KeyboardEventHandler } from 'react';

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

    /**
     * Целое число, определяющее должен ли переключатель участвовать
     * в последовательной навигации по всей странице с помощью клавиатуры
     */
    tabIndex?: number;

    /**
     * Устанавливает в компоненте обязательное состояние
     */
    required?: boolean;
}

export const CheckboxControl: FC<ICheckboxControlProps> = ({ controlRef, className, tabIndex, required, ...props }) => (
    <input
        {...props}
        tabIndex={tabIndex}
        required={required}
        // Отключаем autoComplete, чтобы в FireFox
        // не сохранялось значение при перезагрузке страницы.
        autoComplete="off"
        className={cnCheckbox('Control', null, [className])}
        ref={controlRef}
        type="checkbox"
    />
);
