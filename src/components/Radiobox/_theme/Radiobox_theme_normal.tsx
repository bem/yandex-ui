import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_theme_normal.css';

export interface IRadioboxThemeNormalProps {
    /**
     * Стилевое оформление радио-бокса
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление радио-бокса.
 * @param {IRadioboxThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<IRadioboxThemeNormalProps>(cnRadiobox(), { theme: 'normal' });
