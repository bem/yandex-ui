import { withBemMod } from '@bem-react/core';

import { cnUserPic } from '../UserPic';
import './UserPic_size_m.css';

export interface IUserPicSizeMProps {
    /**
     * Размер аватарки
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер аватарки.
 * @param {IUserPicSizeLProps} props
 */
export const withSizeM = withBemMod<IUserPicSizeMProps>(cnUserPic(), { size: 'm' });
