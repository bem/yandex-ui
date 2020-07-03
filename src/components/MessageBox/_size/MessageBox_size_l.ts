import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_size_l.css';

export type MessageBoxSizeLProps = {
    /**
     * размер компонента
     */
    size?: 'l';
};

/**
 * Модификатор, отвечающий за размер компонента.
 * @param {MessageBoxSizeLProps} props
 */
export const withSizeL = withBemMod<MessageBoxSizeLProps>(cnMessageBox(), { size: 'l' });
