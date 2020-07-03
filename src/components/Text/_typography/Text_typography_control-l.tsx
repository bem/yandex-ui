import './Text_typography_control-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyControlLProps {
    /**
     * Типографика текста
     */
    typography?: 'control-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyControlLProps} props
 */
export const withTypographyControlL = withBemMod<ITextTypographyControlLProps>(cnText(), { typography: 'control-l' });
