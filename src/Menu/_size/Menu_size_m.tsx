import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_size_m.css';

export interface IMenuSizeMProps {
    /**
     * Размер меню
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер меню.
 * @param {IMenuSizeMProps} props
 */
export const withSizeM = withBemMod<IMenuSizeMProps>(cnMenu(), { size: 'm' });
