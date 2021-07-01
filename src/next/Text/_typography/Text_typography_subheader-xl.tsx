import './Text_typography_subheader-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographySubheaderXLProps {
    /**
     * Типографика текста
     */
    typography?: 'subheader-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographySubheaderXLProps} props
 */
export const withTypographySubheaderXL = withBemMod<ITextTypographySubheaderXLProps>(cnText(), { typography: 'subheader-xl' });
