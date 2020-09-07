import './Text_typography_overline-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyOverlineSProps {
    /**
     * Типографика текста
     */
    typography?: 'overline-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyOverlineSProps} props
 */
export const withTypographyOverlineS = withBemMod<ITextTypographyOverlineSProps>(cnText(), { typography: 'overline-s' });
