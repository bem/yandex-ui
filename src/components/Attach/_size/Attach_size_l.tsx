import { withBemMod } from '@bem-react/core';

import { cnAttach } from '../Attach.const';
import './Attach_size_l.css';

export interface IAttachSizeLProps {
    size?: 'l';
}

/**
 * Модификатор, отвечающий за размер кнопки выбора файла.
 * @param {IAttachSizeLProps} props
 */
export const withSizeL = withBemMod<IAttachSizeLProps>(cnAttach(), { size: 'l' });
