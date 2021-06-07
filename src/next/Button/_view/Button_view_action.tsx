import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_action.css';

export interface IButtonViewActionProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'action';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewActionProps} props
 */
export const withViewAction = createClassNameModifier<IButtonViewActionProps>(cnButton(), { view: 'action' });
