import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_view_outline.css';

export interface ICheckboxViewOutlineProps {
    /**
     * Внешний вид переключателя
     */
    view?: 'outline';
}

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 * @param {ICheckboxViewOutlineProps} props
 */
export const withViewOutline = withBemMod<ICheckboxViewOutlineProps>(cnCheckbox(), { view: 'outline' });
