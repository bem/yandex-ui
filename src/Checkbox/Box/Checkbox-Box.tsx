import React, { FC } from 'react';

import { cnCheckbox } from '../Checkbox';
import './Checkbox-Box.css';

export interface CheckboxBoxProps {
    /**
     * Дополнительный класс
     */
    className?: string;
}

export const CheckboxBox: FC<CheckboxBoxProps> = ({ className, children, ...props }) => (
    <span {...props} className={cnCheckbox('Box', null, [className])}>
        {children}
    </span>
);
