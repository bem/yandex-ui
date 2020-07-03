import './Text_typography_headline-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyHeadlineMProps {
    /**
     * Типографика текста
     */
    typography?: 'headline-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyHeadlineMProps} props
 */
export const withTypographyHeadlineM = withBemMod<ITextTypographyHeadlineMProps>(cnText(), { typography: 'headline-m' });
