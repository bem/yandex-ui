import { withBemMod } from '@bem-react/core';

import { cnTooltip } from '../Tooltip';
import './Tooltip_size_s.css';

export type TooltipSizeSProps = {
    /**
     * Размер тултипа.
     */
    size?: 's';
};

/**
 * Модификатор, отвечающий за размер тултипа.
 * @param {TooltipSizeSProps} props
 */
export const withSizeS = withBemMod<TooltipSizeSProps>(cnTooltip(), { size: 's' });
