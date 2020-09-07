import './Text_typography_body-short-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyShortXLProps {
    /**
     * Типографика текста
     */
    typography?: 'body-short-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyShortXLProps} props
 */
export const withTypographyBodyShortXL = withBemMod<ITextTypographyBodyShortXLProps>(cnText(), { typography: 'body-short-xl' });
