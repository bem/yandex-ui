import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_width_auto.css';

export interface IMenuWidthAutoProps {
    /**
     * Ширина меню
     */
    width?: 'auto';
}

/**
 * Модификатор, отвечающий за максимальную ширину меню.
 * @param {IMenuWidthAutoProps} props
 */
export const withWidthAuto = withBemMod<IMenuWidthAutoProps>(cnMenu(), { width: 'auto' });
