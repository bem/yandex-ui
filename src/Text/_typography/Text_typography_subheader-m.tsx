import './Text_typography_subheader-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographySubheaderMProps {
    /**
     * Типографика текста
     */
    typography?: 'subheader-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographySubheaderMProps} props
 */
export const withTypographySubheaderM = withBemMod<ITextTypographySubheaderMProps>(cnText(), { typography: 'subheader-m' });
