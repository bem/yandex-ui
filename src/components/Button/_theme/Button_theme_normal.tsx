import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_normal.css';

export interface IButtonThemeNormalProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<IButtonThemeNormalProps>(cnButton(), { theme: 'normal' });
