import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_link.css';

export interface IButtonViewLinkProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'link';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewLinkProps} props
 */
export const withViewLink = createClassNameModifier<IButtonViewLinkProps>(cnButton(), { view: 'link' });
