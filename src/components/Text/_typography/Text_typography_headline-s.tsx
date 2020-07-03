import './Text_typography_headline-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyHeadlineSProps {
    /**
     * Типографика текста
     */
    typography?: 'headline-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyHeadlineSProps} props
 */
export const withTypographyHeadlineS = withBemMod<ITextTypographyHeadlineSProps>(cnText(), { typography: 'headline-s' });
