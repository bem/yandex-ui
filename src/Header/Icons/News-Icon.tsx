import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IconProps, BaseIcon } from './Header-Icons';

import './News-Icon.css';

const cnNewsIcon = cn('NewsIcon');
/**
 * Иконка сервиса «Новости»
 * @param {IconProps} props
 *
 */
export const NewsIcon: FC<IconProps> = ({ className }) => (<BaseIcon className={className} cn={cnNewsIcon} />);
