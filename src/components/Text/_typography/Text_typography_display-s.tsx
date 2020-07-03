import './Text_typography_display-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyDisplaySProps {
    /**
     * Типографика текста
     */
    typography?: 'display-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyDisplaySProps} props
 */
export const withTypographyDisplayS = withBemMod<ITextTypographyDisplaySProps>(cnText(), { typography: 'display-s' });
