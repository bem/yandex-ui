import './Text_typography_body-long-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyBodyLongLProps {
    /**
     * Типографика текста
     */
    typography?: 'body-long-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyBodyLongLProps} props
 */
export const withTypographyBodyLongL = withBemMod<ITextTypographyBodyLongLProps>(cnText(), { typography: 'body-long-l' });
