import React, { FC } from 'react';

import { cnMenu } from '../Menu';

export interface MenuTextProps {
    className?: string;
}

export const MenuText: FC<MenuTextProps> = ({ children, className, ...props }) => (
    <span {...props} className={cnMenu('Text', null, [className])}>
        {children}
    </span>
);
