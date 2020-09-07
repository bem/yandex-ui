import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_view_default.css';

export interface ICheckboxViewDefaultProps {
    /**
     * Внешний вид переключателя
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 * @param {ICheckboxViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ICheckboxViewDefaultProps>(cnCheckbox(), { view: 'default' });
