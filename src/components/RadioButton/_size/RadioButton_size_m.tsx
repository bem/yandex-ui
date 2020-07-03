import { withBemMod } from '@bem-react/core';

import { cnRadioButton } from '../RadioButton';
import './RadioButton_size_m.css';

export interface IRadioButtonSizeMProps {
    /**
     * Размер радиогруппы.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размеры радиогруппы.
 * @param {IRadioButtonSizeMProps} props
 */
export const withSizeM = withBemMod<IRadioButtonSizeMProps>(cnRadioButton(), { size: 'm' });
