import { withBemMod } from '@bem-react/core';

import { cnRadioButton } from '../RadioButton';
import './RadioButton_size_l.css';

export interface IRadioButtonSizeLProps {
    /**
     * Размер радиогруппы.
     */
    size?: 'l';
}

/**
 * Модификатор, отвечающий за размеры радиогруппы.
 * @param {IRadioButtonSizeLProps} props
 */
export const withSizeL = withBemMod<IRadioButtonSizeLProps>(cnRadioButton(), { size: 'l' });
