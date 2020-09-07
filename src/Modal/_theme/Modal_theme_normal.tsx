import { withBemMod } from '@bem-react/core';

import { cnModal } from '../Modal';
import './Modal_theme_normal.css';

export interface IModalThemeNormalProps {
    /**
     * Стилевое оформление модала
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление модала.
 * @param {IModalThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<IModalThemeNormalProps>(cnModal(), { theme: 'normal' });
