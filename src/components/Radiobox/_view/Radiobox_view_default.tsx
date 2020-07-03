import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_view_default.css';

export interface IRadioboxViewDefaultProps {
    /**
     * Внешний вид радио-бокса
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид радио-бокса.
 * @param {IRadioboxViewDefaultProps} props
 */
export const withViewDefault = withBemMod<IRadioboxViewDefaultProps>(cnRadiobox(), { view: 'default' });
