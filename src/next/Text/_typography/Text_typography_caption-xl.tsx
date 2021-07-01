import './Text_typography_caption-xl.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyCaptionXLProps {
    /**
     * Типографика текста
     */
    typography?: 'caption-xl';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyCaptionXLProps} props
 */
export const withTypographyCaptionXL = withBemMod<ITextTypographyCaptionXLProps>(cnText(), { typography: 'caption-xl' });
