import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_view_default.css';

export interface IMenuViewDefaultProps {
    /**
     * Внешний вид меню
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид меню.
 * @param {IMenuViewDefaultProps} props
 */
export const withViewDefault = withBemMod<IMenuViewDefaultProps>(cnMenu(), { view: 'default' });
