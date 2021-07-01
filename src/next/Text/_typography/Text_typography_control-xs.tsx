import './Text_typography_control-xs.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlXSProps {
    /**
     * Типографика текста
     */
    typography?: 'control-xs';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlXSProps} props
 */
export const withTypographyControlXS = withBemMod<ITextTypographyControlXSProps>(cnText(), { typography: 'control-xs' });
