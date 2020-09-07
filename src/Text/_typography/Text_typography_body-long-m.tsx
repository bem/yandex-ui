import './Text_typography_body-long-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyLongMProps {
    /**
     * Типографика текста
     */
    typography?: 'body-long-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyLongMProps} props
 */
export const withTypographyBodyLongM = withBemMod<ITextTypographyBodyLongMProps>(cnText(), { typography: 'body-long-m' });
