import './Text_typography_control-xxs.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlXXSProps {
    /**
     * Типографика текста
     */
    typography?: 'control-xxs';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlXXSProps} props
 */
export const withTypographyControlXXS = withBemMod<ITextTypographyControlXXSProps>(cnText(), { typography: 'control-xxs' });
