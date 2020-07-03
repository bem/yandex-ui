import { withBemMod } from '@bem-react/core';

import { cnAttach } from '../Attach.const';
import './Attach_size_m.css';

export interface IAttachSizeMProps {
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер кнопки выбора файла.
 * @param {IAttachSizeMProps} props
 */
export const withSizeM = withBemMod<IAttachSizeMProps>(cnAttach(), { size: 'm' });
