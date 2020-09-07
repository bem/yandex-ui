import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_view_default.css';

export interface ISpinViewDefaultProps {
    /**
     * Внешний вид индикатора загрузки.
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид индикатора загрузки.
 * @param {ISpinViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ISpinViewDefaultProps>(cnSpin(), { view: 'default' });
