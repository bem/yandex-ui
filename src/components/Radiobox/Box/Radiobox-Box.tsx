import React, { FC } from 'react';

import { cnRadiobox as cn } from '../Radiobox';
import './Radiobox-Box.css';

export type RadioboxBoxProps = {
    className?: string;
};

export const RadioboxBox: FC<RadioboxBoxProps> = ({ children, className, ...props }) => (
    <span {...props} className={cn('Box', null, [className])}>
        {children}
    </span>
);
