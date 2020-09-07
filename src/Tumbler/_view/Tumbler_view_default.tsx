import { withBemMod } from '@bem-react/core';

import { cnTumbler } from '../Tumbler';
import './Tumbler_view_default.css';

export type TumblerViewDefaultProps = {
    /**
     * Внешний вид переключателя
     */
    view?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 *
 * @param {TumblerViewDefaultProps} props
 */
export const withViewDefault = withBemMod<TumblerViewDefaultProps>(cnTumbler(), { view: 'default' });
