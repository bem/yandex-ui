import './Text_typography_overline-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyOverlineMProps {
    /**
     * Типографика текста
     */
    typography?: 'overline-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyOverlineMProps} props
 */
export const withTypographyOverlineM = withBemMod<ITextTypographyOverlineMProps>(cnText(), { typography: 'overline-m' });
