import { withBemMod } from '@bem-react/core';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu_view_default.css';

export interface ITabsMenuViewDefaultProps {
    /**
     * Стилевое оформление вкладок.
     */
    view?: 'default';
}

/**
 * * Модификатор, отвечающий за внешний вид вкладок.
 * @param {ITabsMenuViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ITabsMenuViewDefaultProps>(cnTabsMenu(), { view: 'default' });
