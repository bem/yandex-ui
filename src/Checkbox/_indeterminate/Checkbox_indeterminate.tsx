import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_indeterminate.css';

export interface ICheckboxIndeterminateProps {
    /**
     * Промежуточное состояние переключателя
     */
    indeterminate?: boolean;
}

/**
 * Модификатор, отвечающий за промежуточное состояние переключателя. Используется в дереве переключателей.
 * @param {ICheckboxIndeterminateProps} props
 */
export const withIndeterminate = withBemMod<ICheckboxIndeterminateProps>(cnCheckbox(), { indeterminate: true });
