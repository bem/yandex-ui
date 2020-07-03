import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_size_m.css';

export interface ITextinputSizeMProps {
    /**
     * Размер текстового поля.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер текстового поля.
 * @param {ITextinputSizeMProps} props
 */
export const withSizeM = withBemMod<ITextinputSizeMProps>(cnTextinput(), { size: 'm' });
