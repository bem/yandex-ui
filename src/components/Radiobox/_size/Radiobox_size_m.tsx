import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_size_m.css';

export interface IRadioboxSizeMProps {
    /**
     * Размер радио-бокса
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IRadioboxSizeMProps} props
 */
export const withSizeM = withBemMod<IRadioboxSizeMProps>(cnRadiobox(), { size: 'm' });
