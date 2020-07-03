import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../Icon';
import './Icon_type_play@tests.css';

export interface IWithTypePlayProps {
    /**
     * Тип иконки
     */
    type?: 'play';
}

/**
 * Модификатор, отвечающий за тип иконки.
 */
export const withTypePlay = withBemMod<IWithTypePlayProps>(cnIcon(), { type: 'play' });
