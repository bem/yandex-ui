import './Text_typography_control-s.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlSProps {
    /**
     * Типографика текста
     */
    typography?: 'control-s';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlSProps} props
 */
export const withTypographyControlS = withBemMod<ITextTypographyControlSProps>(cnText(), { typography: 'control-s' });
