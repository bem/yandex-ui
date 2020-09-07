import './Text_typography_body-short-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyShortMProps {
    /**
     * Типографика текста
     */
    typography?: 'body-short-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyShortMProps} props
 */
export const withTypographyBodyShortM = withBemMod<ITextTypographyBodyShortMProps>(cnText(), { typography: 'body-short-m' });
