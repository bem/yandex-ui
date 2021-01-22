import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IconProps, BaseIcon } from './Header-Icons';

import './Mirror-Icon.css';

const cnMirrorIcon = cn('MirrorIcon');

/**
 * Иконка сервиса «Зеркало»
 * @param {IconProps} props
 *
 */
export const MirrorIcon: FC<IconProps> = ({ className }) => (<BaseIcon className={className} cn={cnMirrorIcon} />);
