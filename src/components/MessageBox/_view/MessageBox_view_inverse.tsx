import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_view_inverse.css';

export type MessageBoxViewInverseProps = {
    view?: 'inverse';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxViewInverseProps} props
 */
export const withViewInverse = withBemMod<MessageBoxViewInverseProps>(cnMessageBox(), { view: 'inverse' });
