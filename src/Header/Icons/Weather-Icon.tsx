import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IconProps, BaseIcon } from './Header-Icons';

import './Weather-Icon.css';

const cnWeatherIcon = cn('WeatherIcon');
/**
 * Иконка сервиса «Погода»
 * @param {IconProps} props
 *
 */
export const WeatherIcon: FC<IconProps> = ({ className }) => (<BaseIcon className={className} cn={cnWeatherIcon} />);
