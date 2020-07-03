import './Text_typography_body-long-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyLongSProps {
    /**
     * Типографика текста
     */
    typography?: 'body-long-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyLongSProps} props
 */
export const withTypographyBodyLongS = withBemMod<ITextTypographyBodyLongSProps>(cnText(), { typography: 'body-long-s' });
