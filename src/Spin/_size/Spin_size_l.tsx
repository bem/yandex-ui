import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_size_l.css';

export interface ISpinSizeLProps {
    /**
     * Размер индикатора загрузки.
     */
    size?: 'l';
}

/**
 * Модификатор, отвечающий за размер индикатора загрузки.
 * @param {ISpinSizeLProps} props
 */
export const withSizeL = withBemMod<ISpinSizeLProps>(cnSpin(), { size: 'l' });
