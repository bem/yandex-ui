import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_pseudo.css';

export interface IButtonThemePseudoProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'pseudo';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemePseudoProps} props
 *
 * @deprecated Рекомендуется использовать withViewPseudo
 */
export const withThemePseudo = createClassNameModifier<IButtonThemePseudoProps>(cnButton(), { theme: 'pseudo' });
