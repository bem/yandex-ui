import { withBemMod } from '@bem-react/core';

import { cnTextarea } from '../Textarea';
import './Textarea_size_s.css';

export interface ITextareaSizeSProps {
    /**
     * Размер текстового поля.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер текстового поля.
 * @param {ITextareaSizeSProps} props
 */
export const withSizeS = withBemMod<ITextareaSizeSProps>(cnTextarea(), { size: 's' });
