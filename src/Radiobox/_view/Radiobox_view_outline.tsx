import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_view_outline.css';

export interface IRadioboxViewOutlineProps {
    /**
     * Внешний вид радио-бокса
     */
    view?: 'outline';
}

/**
 * Модификатор, отвечающий за внешний вид радио-бокса.
 * @param {IRadioboxViewOutlineProps} props
 */
export const withViewOutline = withBemMod<IRadioboxViewOutlineProps>(cnRadiobox(), { view: 'outline' });
