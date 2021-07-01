import './Text_typography_subheader-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographySubheaderSProps {
    /**
     * Типографика текста
     */
    typography?: 'subheader-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographySubheaderSProps} props
 */
export const withTypographySubheaderS = withBemMod<ITextTypographySubheaderSProps>(cnText(), { typography: 'subheader-s' });
