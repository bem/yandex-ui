import { withBemMod } from '@bem-react/core';

import { cnTextarea } from '../Textarea';
import './Textarea_size_m.css';

export interface ITextareaSizeMProps {
    /**
     * Размер текстового поля.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер текстового поля.
 * @param {ITextareaSizeMProps} props
 */
export const withSizeM = withBemMod<ITextareaSizeMProps>(cnTextarea(), { size: 'm' });
