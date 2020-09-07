import { withBemMod } from '@bem-react/core';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu_theme_normal.css';

export interface ITabsMenuThemeNormalProps {
    /**
     * Стилевое оформление вкладок.
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление вкладок.
 * @param {ITabsMenuThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<ITabsMenuThemeNormalProps>(cnTabsMenu(), { theme: 'normal' });
