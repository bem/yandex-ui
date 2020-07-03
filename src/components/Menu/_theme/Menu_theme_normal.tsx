import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_theme_normal.css';

export interface IMenuThemeNormalProps {
    /**
     * Стилевое оформление меню
     */
    theme?: 'normal';
}

/**
 * Модификатор отвечающий за стилевое оформление меню.
 * @param {IMenuThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<IMenuThemeNormalProps>(cnMenu(), { theme: 'normal' });
