import { withBemMod } from '@bem-react/core';

import { cnTooltip } from '../Tooltip';
import './Tooltip_size_l.css';

export type TooltipSizeLProps = {
    /**
     * Размер тултипа.
     */
    size?: 'l';
};

/**
 * Модификатор, отвечающий за размер тултипа.
 * @param {TooltipSizeLProps} props
 */
export const withSizeL = withBemMod<TooltipSizeLProps>(cnTooltip(), { size: 'l' });
