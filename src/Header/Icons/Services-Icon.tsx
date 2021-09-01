import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { cnHeaderIcon } from '../Header.const';
import { IconProps } from './Header-Icons';

import './Services-Icon.css';

/**
 * Иконка «Сервисы»
 * @param {IconProps} props
 *
 */
const cnServicesIcon = cn('ServicesIcon');

export const ServicesIcon: FC<IconProps> = ({ className }) => (
    <span className={cnServicesIcon(null, [cnHeaderIcon, className])}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <rect width="4.21" height="4.21" x="5.89" rx="1.42" />
            <rect width="4.21" height="4.21" rx="1.42" />
            <rect width="4.21" height="4.21" x="11.79" rx="1.42" />
            <rect width="4.21" height="4.21" x="5.89" y="5.89" rx="1.42" />
            <rect width="4.21" height="4.21" y="5.89" rx="1.42" />
            <rect width="4.21" height="4.21" x="11.79" y="5.89" rx="1.42" />
            <rect width="4.21" height="4.21" x="5.89" y="11.79" rx="1.42" />
            <rect width="4.21" height="4.21" y="11.79" rx="1.42" />
            <rect width="4.21" height="4.21" x="11.79" y="11.79" rx="1.42" />
        </svg>
    </span>
);
