import React, { FC } from 'react';

import { cnMenu } from '../Menu';

export interface MenuTitleProps {
    className?: string;
}

export const MenuTitle: FC<MenuTitleProps> = ({ children, className, ...props }) => (
    <div {...props} aria-hidden className={cnMenu('Title', null, [className])}>
        {children}
    </div>
);
