import './Text_typography_subheader-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographySubheaderLProps {
    /**
     * Типографика текста
     */
    typography?: 'subheader-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographySubheaderLProps} props
 */
export const withTypographySubheaderL = withBemMod<ITextTypographySubheaderLProps>(cnText(), { typography: 'subheader-l' });
