import './Text_typography_headline-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyHeadlineLProps {
    /**
     * Типографика текста
     */
    typography?: 'headline-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyHeadlineLProps} props
 */
export const withTypographyHeadlineL = withBemMod<ITextTypographyHeadlineLProps>(cnText(), { typography: 'headline-l' });
