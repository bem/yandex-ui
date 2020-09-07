import React, { FC } from 'react';

import { cnCheckbox } from '../Checkbox';
import './Checkbox-Label.css';

export interface CheckboxLabelProps {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * HTML-атрибут `for`
     */
    htmlFor?: string;
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({ children, className, ...props }) => (
    <label aria-hidden="true" {...props} className={cnCheckbox('Label', null, [className])}>
        {children}
    </label>
);
