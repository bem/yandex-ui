import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_size_m.css';

export interface ICheckboxSizeMProps {
    /**
     * Размер переключателя
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер переключателя.
 * @param {ICheckboxSizeMProps} props
 */
export const withSizeM = withBemMod<ICheckboxSizeMProps>(cnCheckbox(), { size: 'm' });
