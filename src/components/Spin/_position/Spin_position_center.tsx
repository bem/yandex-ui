import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_position_center.css';

export interface ISpinPositionCenterProps {
    /**
     * Позиция индикатора загрузки.
     */
    position?: 'center';
}

/**
 * Модификатор, отвечающий за позицию индикатора загрузки.
 * @param {ISpinPositionCenterProps} props
 */
export const withPositionCenter = withBemMod<ISpinPositionCenterProps>(cnSpin(), { position: 'center' });
