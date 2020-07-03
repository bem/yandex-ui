import { withBemMod } from '@bem-react/core';

import { cnTumbler } from '../Tumbler';
import './Tumbler_size_l.css';

export type TumblerSizeLProps = {
    /**
     * Размер переключателя
     */
    size?: 'l';
};

/**
 * Модификатор, отвечающий за размер переключателя.
 *
 * @param {TumblerSizeLProps} props
 */
export const withSizeL = withBemMod<TumblerSizeLProps>(cnTumbler(), { size: 'l' });
