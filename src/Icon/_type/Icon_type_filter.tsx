import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_filter.css';

export interface IWithTypeFilterProps {
    /**
     * Тип иконки.
     */
    type?: 'filter';
}

/**
 * Модификатор, отвечающий за тип иконки.
 * @param {IIconTypeProps} props
 */
export const withTypeFilter = withBemMod<IWithTypeFilterProps>(cnIcon(), { type: 'filter' });
