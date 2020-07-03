import { withBemMod } from '@bem-react/core';

import { cnTooltip } from '../Tooltip';
import './Tooltip_view_default.css';

export type TooltipViewDefaultProps = {
    /**
     * Стилевое оформление тултипа.
     */
    view?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид тултипа.
 * @param {TooltipViewDefaultProps} props
 */
export const withViewDefault = withBemMod<TooltipViewDefaultProps>(cnTooltip(), { view: 'default' });
