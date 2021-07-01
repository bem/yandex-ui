import './Text_typography_body-short-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyShortLProps {
    /**
     * Типографика текста
     */
    typography?: 'body-short-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyShortLProps} props
 */
export const withTypographyBodyShortL = withBemMod<ITextTypographyBodyShortLProps>(cnText(), { typography: 'body-short-l' });
