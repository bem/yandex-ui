import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_size_s.css';

export interface ITextinputSizeSProps {
    /**
     * Размер текстового поля.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер текстового поля.
 * @param {ITextinputSizeSProps} props
 */
export const withSizeS = withBemMod<ITextinputSizeSProps>(cnTextinput(), { size: 's' });
