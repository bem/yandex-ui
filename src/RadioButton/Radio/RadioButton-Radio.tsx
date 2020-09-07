import React, { Ref, FC } from 'react';

import { cnRadioButton } from '../RadioButton';
import './RadioButton-Radio.css';

export interface IRadioButtonRadioProps {
    /**
     * HTML атрибут `for`.
     */
    htmlFor?: string;

    /**
     * Выбранное состояние.
     */
    checked?: boolean;

    /**
     * Состояние доступности компонента.
     */
    disabled?: boolean;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Колбэк-реф.
     */
    innerRef?: Ref<HTMLLabelElement>;
}

export const RadioButtonRadio: FC<IRadioButtonRadioProps> = ({
    checked,
    disabled,
    className,
    innerRef,
    children,
    ...props
}) => (
    <label
        {...props}
        className={cnRadioButton('Radio', { checked, disabled }, [className])}
        ref={innerRef}
    >
        {children}
    </label>
);
