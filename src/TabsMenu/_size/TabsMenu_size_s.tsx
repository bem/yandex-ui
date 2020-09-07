import { withBemMod } from '@bem-react/core';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu_size_s.css';

export interface ITabsMenuSizeSProps {
    /**
     * Размер вкладок.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер вкладок.
 * @param {ITabsMenuSizeSProps} props
 */
export const withSizeS = withBemMod<ITabsMenuSizeSProps>(cnTabsMenu(), { size: 's' });
