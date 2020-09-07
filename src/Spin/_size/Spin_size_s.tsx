import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_size_s.css';

export interface ISpinSizeSProps {
    /**
     * Размер индикатора загрузки.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер индикатора загрузки.
 * @param {ISpinSizeSProps} props
 */
export const withSizeS = withBemMod<ISpinSizeSProps>(cnSpin(), { size: 's' });
