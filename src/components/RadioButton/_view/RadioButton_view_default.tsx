import { withBemMod } from '@bem-react/core';

import { cnRadioButton } from '../RadioButton';
import './RadioButton_view_default.css';

export interface IRadioButtonViewDefaultProps {
    /**
     * Внешний вид радиогруппы.
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид радиогруппы.
 * @param {IRadioButtonViewDefaultProps} props
 */
export const withViewDefault = withBemMod<IRadioButtonViewDefaultProps>(cnRadioButton(), { view: 'default' });
