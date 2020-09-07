import { withBemMod } from '@bem-react/core';

import { cnTextarea } from '../Textarea';
import './Textarea_theme_normal.css';

export interface ITextareaThemeNormalProps {
    /**
     * Стилевое оформление текстового поля.
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление текстового поля.
 * @param {ITextareaThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<ITextareaThemeNormalProps>(cnTextarea(), { theme: 'normal' });
