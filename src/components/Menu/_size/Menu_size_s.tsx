import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_size_s.css';

export interface IMenuSizeSProps {
    /**
     * Размер меню
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер меню.
 * @param {IMenuSizeSProps} props
 */
export const withSizeS = withBemMod<IMenuSizeSProps>(cnMenu(), { size: 's' });
