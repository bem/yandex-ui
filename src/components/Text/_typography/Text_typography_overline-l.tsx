import './Text_typography_overline-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyOverlineLProps {
    /**
     * Типографика текста
     */
    typography?: 'overline-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyOverlineLProps} props
 */
export const withTypographyOverlineL = withBemMod<ITextTypographyOverlineLProps>(cnText(), { typography: 'overline-l' });
