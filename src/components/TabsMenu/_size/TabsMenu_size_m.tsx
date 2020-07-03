import { withBemMod } from '@bem-react/core';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu_size_m.css';

export interface ITabsMenuSizeMProps {
    /**
     * Размер вкладок.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер вкладок.
 * @param {ITabsMenuSizeMProps} props
 */
export const withSizeM = withBemMod<ITabsMenuSizeMProps>(cnTabsMenu(), { size: 'm' });
