import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_size_s.css';

export interface ICheckboxSizeSProps {
    /**
     * Размер переключателя
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер переключателя.
 * @param {ICheckboxSizeSProps} props
 */
export const withSizeS = withBemMod<ICheckboxSizeSProps>(cnCheckbox(), { size: 's' });
