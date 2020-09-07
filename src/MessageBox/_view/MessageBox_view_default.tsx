import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_view_default.css';

export type MessageBoxViewDefaultProps = {
    view?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxViewDefaultProps} props
 */
export const withViewDefault = withBemMod<MessageBoxViewDefaultProps>(cnMessageBox(), { view: 'default' });
