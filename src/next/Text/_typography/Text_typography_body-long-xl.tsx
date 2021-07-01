import './Text_typography_body-long-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyLongXLProps {
    /**
     * Типографика текста
     */
    typography?: 'body-long-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyLongXLProps} props
 */
export const withTypographyBodyLongXL = withBemMod<ITextTypographyBodyLongXLProps>(cnText(), { typography: 'body-long-xl' });
