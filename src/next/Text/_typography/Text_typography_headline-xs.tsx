import './Text_typography_headline-xs.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyHeadlineXSProps {
    /**
     * Типографика текста
     */
    typography?: 'headline-xs';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyHeadlineXSProps} props
 */
export const withTypographyHeadlineXS = withBemMod<ITextTypographyHeadlineXSProps>(cnText(), { typography: 'headline-xs' });
