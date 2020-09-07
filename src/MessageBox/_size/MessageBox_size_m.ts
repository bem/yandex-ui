import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_size_m.css';

export type MessageBoxSizeMProps = {
    /**
     * размер компонента
     */
    size?: 'm';
};

/**
 * Модификатор, отвечающий за размер компонента.
 * @param {MessageBoxSizeMProps} props
 */
export const withSizeM = withBemMod<MessageBoxSizeMProps>(cnMessageBox(), { size: 'm' });
