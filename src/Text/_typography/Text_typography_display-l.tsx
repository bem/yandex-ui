import './Text_typography_display-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyDisplayLProps {
    /**
     * Типографика текста
     */
    typography?: 'display-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyDisplayLProps} props
 */
export const withTypographyDisplayL = withBemMod<ITextTypographyDisplayLProps>(cnText(), { typography: 'display-l' });
