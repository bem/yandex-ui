import React, { ReactNode, FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button-Text.css';

export interface IButtonTextProps extends IClassNameProps {
    children?: ReactNode;
}

export const ButtonText: FC<IButtonTextProps> = ({ children, className, ...props }) => (
    <span {...props} className={cnButton('Text', null, [className])}>
        {children}
    </span>
);
