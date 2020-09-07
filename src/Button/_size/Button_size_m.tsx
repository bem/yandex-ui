import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_size_m.css';

export interface IButtonSizeMProps {
    /**
     * Размер кнопки
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер кнопки.
 * @param {IButtonSizeMProps} props
 */
export const withSizeM = withBemMod<IButtonSizeMProps>(cnButton(), { size: 'm' });
