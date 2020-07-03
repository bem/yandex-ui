import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_size_s.css';

export type MessageBoxSizeSProps = {
    /**
     * Размер компонента
     */
    size?: 's';
};

/**
 * Модификатор, отвечающий за размер компонента.
 * @param {MessageBoxSizeSProps} props
 */
export const withSizeS = withBemMod<MessageBoxSizeSProps>(cnMessageBox(), { size: 's' });
