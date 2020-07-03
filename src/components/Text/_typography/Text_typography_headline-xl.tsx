import './Text_typography_headline-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyHeadlineXLProps {
    /**
     * Типографика текста
     */
    typography?: 'headline-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyHeadlineXLProps} props
 */
export const withTypographyHeadlineXL = withBemMod<ITextTypographyHeadlineXLProps>(cnText(), { typography: 'headline-xl' });
