import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_view_default.css';

export interface ILinkViewDefaultProps {
    /**
     * Внешний вид ссылки
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид ссылки.
 * @param {ILinkViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ILinkViewDefaultProps>(cnLink(), { view: 'default' });
