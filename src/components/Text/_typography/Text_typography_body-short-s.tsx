import './Text_typography_body-short-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyShortSProps {
    /**
     * Типографика текста
     */
    typography?: 'body-short-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyShortSProps} props
 */
export const withTypographyBodyShortS = withBemMod<ITextTypographyBodyShortSProps>(cnText(), { typography: 'body-short-s' });
