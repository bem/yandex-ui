import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_theme_pseudo.css';

export interface ICheckboxThemePseudoProps {
    /**
     * Стилевое оформление переключателя
     */
    theme?: 'pseudo';
}

/**
 * Модификатор, отвечающий за стилевое оформление переключателя.
 * @param {ICheckboxThemePseudoProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemePseudo = withBemMod<ICheckboxThemePseudoProps>(cnCheckbox(), { theme: 'pseudo' });
