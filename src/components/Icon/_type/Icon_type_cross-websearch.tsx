import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_cross-websearch.css';

export interface IWithTypeCrossWebsearchProps {
    /**
     * Тип иконки
     */
    type?: 'cross-websearch';
}

/**
 * Модификатор, отвечающий за тип иконки.
 * @param {IIconTypeProps} props
 */
export const withTypeCrossWebsearch = withBemMod<IWithTypeCrossWebsearchProps>(cnIcon(), { type: 'cross-websearch' });
