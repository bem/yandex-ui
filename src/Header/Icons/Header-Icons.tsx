import React, { FC } from 'react';
import { ClassNameFormatter } from '@bem-react/classname';

import { cnHeaderIcon } from '../Header.const';
import './Header-Icons.css';

export type IconProps = {
    className?: string;
};

export type BaseIconProps = IconProps & {
    cn: ClassNameFormatter;
};

/**
 * Компонент-хелпер для сборки иконок для шапки через background-image.
 * @param {BaseIconProps} props
 *
 */
export const BaseIcon: FC<BaseIconProps> = ({ className, cn }) => (
    <span className={cn(null, [cnHeaderIcon, className])} />
);
