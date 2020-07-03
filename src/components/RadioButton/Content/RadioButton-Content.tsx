import React, { FC } from 'react';

import { cnRadioButton } from '../RadioButton';
import './RadioButton-Content.css';

export interface IRadioButtonContentProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const RadioButtonContent: FC<IRadioButtonContentProps> = ({
    className,
    children,
    ...props
}) => (
    <div
        {...props}
        className={cnRadioButton('Content', null, [className])}
    >
        {children}
    </div>
);
