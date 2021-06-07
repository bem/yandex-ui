import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';

export interface IButtonTypeSubmitProps {
    /**
     * Тип кнопки
     */
    type?: 'submit';
}

/**
 * @param {IButtonTypeSubmitProps} props
 */
export const withTypeSubmit = withBemMod<IButtonTypeSubmitProps>(cnButton(), { type: 'submit' });
