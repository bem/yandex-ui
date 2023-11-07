import React, {
    RefObject,
    MouseEventHandler,
    ChangeEventHandler,
    FC,
} from 'react';

import { cnRadioButton } from '../RadioButton';
import './RadioButton-Control.css';

export interface IRadioButtonControlProps {
    /**
     * HTML атрибут `value`, значение контрола.
     */
    value: string;

    /**
     * HTML атрибут `name`, имя компонента.
     */
    name?: string;

    /**
     * HTML атрибут `id`, уникальный id контрола.
     */
    id?: string;

    /**
     * HTML атрибут `checked`.
     */
    checked?: boolean;

    /**
     * HTML атрибут `disabled`.
     */
    disabled?: boolean;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Ссылка на DOM элемент контрола.
     */
    controlRef?: RefObject<HTMLInputElement>;

    /**
     * Обработчик клика.
     */
    onClick?: MouseEventHandler<HTMLInputElement>;

    /**
     * Обработчик изменения значения.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const RadioButtonControl: FC<IRadioButtonControlProps> = ({
    className,
    controlRef,
    value,
    name,
    id,
    checked,
    disabled,
    onClick,
    onChange,
}) => (
    <input
        name={name}
        id={id}
        checked={checked}
        disabled={disabled}
        value={value}
        onClick={onClick}
        onChange={onChange}
        type="radio"
        autoComplete="off"
        className={cnRadioButton('Control', null, [className])}
        ref={controlRef}
    />
);
