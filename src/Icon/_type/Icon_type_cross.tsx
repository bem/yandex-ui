import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_cross.css';

export interface IWithTypeCrossProps {
    /**
     * Тип иконки.
     */
    type?: 'cross';
}

/**
 * Модификатор, отвечающий за тип иконки.
 * @param {IIconTypeProps} props
 */
export const withTypeCross = withBemMod<IWithTypeCrossProps>(cnIcon(), { type: 'cross' });
