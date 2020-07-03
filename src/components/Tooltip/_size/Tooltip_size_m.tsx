import { withBemMod } from '@bem-react/core';

import { cnTooltip } from '../Tooltip';
import './Tooltip_size_m.css';

export type TooltipSizeMProps = {
    /**
     * Размер тултипа.
     */
    size?: 'm';
};

/**
 * Модификатор, отвечающий за размер тултипа.
 * @param {TooltipSizeMProps} props
 */
export const withSizeM = withBemMod<TooltipSizeMProps>(cnTooltip(), { size: 'm' });
