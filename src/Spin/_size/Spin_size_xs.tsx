import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_size_xs.css';

export interface ISpinSizeXSProps {
    /**
     * Размер индикатора загрузки.
     */
    size?: 'xs';
}

/**
 * Модификатор, отвечающий за размер индикатора загрузки.
 * @param {ISpinSizeXSProps} props
 */
export const withSizeXS = withBemMod<ISpinSizeXSProps>(cnSpin(), { size: 'xs' });
