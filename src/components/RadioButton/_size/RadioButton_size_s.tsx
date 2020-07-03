import { withBemMod } from '@bem-react/core';

import { cnRadioButton } from '../RadioButton';
import './RadioButton_size_s.css';

export interface IRadioButtonSizeSProps {
    /**
     * Размер радиогруппы.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размеры радиогруппы.
 * @param {IRadioButtonSizeSProps} props
 */
export const withSizeS = withBemMod<IRadioButtonSizeSProps>(cnRadioButton(), { size: 's' });
