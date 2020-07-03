import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_load@tests.css';

export interface IWithTypeLoadProps {
    /**
     * Тип иконки
     */
    type?: 'load';
}

/**
 * Модификатор, отвечающий за тип иконки.
 */
export const withTypeLoad = withBemMod<IWithTypeLoadProps>(cnIcon(), { type: 'load' });
