import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_arrow.css';

export interface IWithTypeArrowProps {
    /**
     * Тип иконки
     */
    type?: 'arrow';
}

/**
 * Модификатор, отвечающий за тип иконки.
 * @param {IIconTypeProps} props
 */
export const withTypeArrow = withBemMod<IWithTypeArrowProps>(cnIcon(), { type: 'arrow' });
