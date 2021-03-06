import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_raised.css';

export interface IButtonViewRaisedProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'raised';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewRaisedProps} props
 */
export const withViewRaised = createClassNameModifier<IButtonViewRaisedProps>(cnButton(), { view: 'raised' });
