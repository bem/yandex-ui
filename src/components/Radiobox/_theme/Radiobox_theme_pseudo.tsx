import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_theme_pseudo.css';

export interface IRadioboxThemePseudoProps {
    /**
     * Стилевое оформление радио-бокса
     */
    theme?: 'pseudo';
}

/**
 * Модификатор, отвечающий за стилевое оформление радио-бокса.
 * @param {IRadioboxThemePseudoProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemePseudo = withBemMod<IRadioboxThemePseudoProps>(cnRadiobox(), { theme: 'pseudo' });
