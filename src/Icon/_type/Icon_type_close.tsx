import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_close.css';

export interface IWithTypeCloseProps {
    /**
     * Тип иконки
     */
    type?: 'close';
}

/**
 * Модификатор, отвечающий за тип иконки.
 * @param {IIconTypeProps} props
 */
export const withTypeClose = withBemMod<IWithTypeCloseProps>(cnIcon(), { type: 'close' });
