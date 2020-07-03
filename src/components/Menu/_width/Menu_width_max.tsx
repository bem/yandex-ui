import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_width_max.css';

export interface IMenuWidthMaxProps {
    /**
     * Ширина меню
     */
    width?: 'max';
}

/**
 * Модификатор, отвечающий за максимальную ширину меню.
 * @param {IMenuWidthMaxProps} props
 */
export const withWidthMax = withBemMod<IMenuWidthMaxProps>(cnMenu(), { width: 'max' });
