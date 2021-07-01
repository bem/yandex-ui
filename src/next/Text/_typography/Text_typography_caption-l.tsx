import './Text_typography_caption-l.css';
import { withBemMod } from '@bem-react/core';

import { cnText } from '../Text';

export interface ITextTypographyCaptionLProps {
    /**
     * Типографика текста
     */
    typography?: 'caption-l';
}

/**
 * Модификатор, отвечающий за типографику текста.
 * @param {ITextTypographyCaptionLProps} props
 */
export const withTypographyCaptionL = withBemMod<ITextTypographyCaptionLProps>(cnText(), { typography: 'caption-l' });
