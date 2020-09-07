import { withBemMod } from '@bem-react/core';

import { cnAttach } from '../Attach.const';
import './Attach_size_s.css';

export interface IAttachSizeSProps {
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер кнопки выбора файла.
 * @param {IAttachSizeSProps} props
 */
export const withSizeS = withBemMod<IAttachSizeSProps>(cnAttach(), { size: 's' });
