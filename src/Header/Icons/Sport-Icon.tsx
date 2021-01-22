import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IconProps, BaseIcon } from './Header-Icons';

import './Sport-Icon.css';

/**
 * Иконка сервиса «Спорт»
 * @param {IconProps} props
 *
 */
const cnSportIcon = cn('SportIcon');
export const SportIcon: FC<IconProps> = ({ className }) => (<BaseIcon className={className} cn={cnSportIcon} />);
