import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_size_s.css';

export interface IRadioboxSizeSProps {
    /**
     * Размер радио-бокса
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IRadioboxSizeSProps} props
 */
export const withSizeS = withBemMod<IRadioboxSizeSProps>(cnRadiobox(), { size: 's' });
