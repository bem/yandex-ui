import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_clear.css';

export interface IButtonViewClearProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'clear';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewClearProps} props
 */
export const withViewClear = createClassNameModifier<IButtonViewClearProps>(cnButton(), { view: 'clear' });
