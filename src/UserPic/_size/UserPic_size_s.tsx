import { withBemMod } from '@bem-react/core';

import { cnUserPic } from '../UserPic';
import './UserPic_size_s.css';

export interface IUserPicSizeSProps {
    /**
     * Размер аватарки
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер аватарки.
 * @param {IUserPicSizeLProps} props
 */
export const withSizeS = withBemMod<IUserPicSizeSProps>(cnUserPic(), { size: 's' });
