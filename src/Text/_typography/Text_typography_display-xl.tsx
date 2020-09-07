import './Text_typography_display-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyDisplayXLProps {
    /**
     * Типографика текста
     */
    typography?: 'display-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyDisplayXLProps} props
 */
export const withTypographyDisplayXL = withBemMod<ITextTypographyDisplayXLProps>(cnText(), { typography: 'display-xl' });
