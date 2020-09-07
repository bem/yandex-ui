import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_location@tests.css';

export interface IWithTypeLocationProps {
    /**
     * Тип иконки
     */
    type?: 'location';
}

/**
 * Модификатор, отвечающий за тип иконки.
 */
export const withTypeLocation = withBemMod<IWithTypeLocationProps>(cnIcon(), { type: 'location' });
