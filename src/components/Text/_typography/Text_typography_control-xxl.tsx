import './Text_typography_control-xxl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlXXLProps {
    /**
     * Типографика текста
     */
    typography?: 'control-xxl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlXXLProps} props
 */
export const withTypographyControlXXL = withBemMod<ITextTypographyControlXXLProps>(cnText(), { typography: 'control-xxl' });
