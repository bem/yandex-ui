import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_view_promo.css';

export type MessageBoxViewPromoProps = {
    view?: 'promo';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxViewPromoProps} props
 */
export const withViewPromo = withBemMod<MessageBoxViewPromoProps>(cnMessageBox(), { view: 'promo' });
