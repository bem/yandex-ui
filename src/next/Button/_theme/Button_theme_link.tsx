import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_link.css';

export interface IButtonThemeLinkProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'link';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeLinkProps} props
 *
 * @deprecated Рекомендуется использовать withViewLink
 */
export const withThemeLink = createClassNameModifier<IButtonThemeLinkProps>(cnButton(), { theme: 'link' });
