import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_theme_normal.css';

export interface ITextinputThemeNormalProps {
    /**
     * Стилевое оформление текстового поля.
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление текстового поля.
 * @param {ITextinputThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<ITextinputThemeNormalProps>(cnTextinput(), { theme: 'normal' });
