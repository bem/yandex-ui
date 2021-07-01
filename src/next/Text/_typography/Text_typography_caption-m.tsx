import './Text_typography_caption-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyCaptionMProps {
    /**
     * Типографика текста
     */
    typography?: 'caption-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyCaptionMProps} props
 */
export const withTypographyCaptionM = withBemMod<ITextTypographyCaptionMProps>(cnText(), { typography: 'caption-m' });
