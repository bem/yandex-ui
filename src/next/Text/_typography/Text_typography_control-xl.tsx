import './Text_typography_control-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlXLProps {
    /**
     * Типографика текста
     */
    typography?: 'control-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlXLProps} props
 */
export const withTypographyControlXL = withBemMod<ITextTypographyControlXLProps>(cnText(), { typography: 'control-xl' });
