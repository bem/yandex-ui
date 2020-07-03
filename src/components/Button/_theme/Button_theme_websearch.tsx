import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_websearch.css';

export interface IButtonThemeWebSearchProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'websearch';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeWebSearchProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeWebSearch = withBemMod<IButtonThemeWebSearchProps>(cnButton(), { theme: 'websearch' });
