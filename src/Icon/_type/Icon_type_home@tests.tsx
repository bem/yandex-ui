import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_home@tests.css';

export interface IWithTypeHomeProps {
    /**
     * Тип иконки
     */
    type?: 'home';
}

/**
 * Модификатор, отвечающий за тип иконки.
 */
export const withTypeHome = withBemMod<IWithTypeHomeProps>(cnIcon(), { type: 'home' });
