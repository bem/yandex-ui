import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_theme_normal.css';

export interface ICheckboxThemeNormalProps {
    /**
     * Стилевое оформление переключателя
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление переключателя.
 * @param {ICheckboxThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<ICheckboxThemeNormalProps>(cnCheckbox(), { theme: 'normal' });
