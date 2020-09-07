import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_view_pseudo.css';

export interface IButtonViewPseudoProps {
    /**
     * Внешний вид кнопки
     */
    view?: 'pseudo';
}

/**
 * Модификатор, отвечающий за внешний вид кнопки.
 * @param {IButtonViewPseudoProps} props
 */
export const withViewPseudo = withBemMod<IButtonViewPseudoProps>(cnButton(), { view: 'pseudo' });
