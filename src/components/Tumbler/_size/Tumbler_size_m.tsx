import { withBemMod } from '@bem-react/core';

import { cnTumbler } from '../Tumbler';
import './Tumbler_size_m.css';

export type TumblerSizeMProps = {
    /**
     * Размер переключателя
     */
    size?: 'm';
};

/**
 * Модификатор, отвечающий за размер переключателя.
 *
 * @param {TumblerSizeMProps} props
 */
export const withSizeM = withBemMod<TumblerSizeMProps>(cnTumbler(), { size: 'm' });
