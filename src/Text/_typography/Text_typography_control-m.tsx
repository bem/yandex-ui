import './Text_typography_control-m.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlMProps {
    /**
     * Типографика текста
     */
    typography?: 'control-m';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlMProps} props
 */
export const withTypographyControlM = withBemMod<ITextTypographyControlMProps>(cnText(), { typography: 'control-m' });
