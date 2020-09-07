import './Text_typography_display-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyDisplayMProps {
    /**
     * Типографика текста
     */
    typography?: 'display-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyDisplayMProps} props
 */
export const withTypographyDisplayM = withBemMod<ITextTypographyDisplayMProps>(cnText(), { typography: 'display-m' });
