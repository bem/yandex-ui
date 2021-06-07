import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_default.css';

export interface IButtonViewDefaultProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewDefaultProps} props
 */
export const withViewDefault = createClassNameModifier<IButtonViewDefaultProps>(cnButton(), { view: 'default' });
