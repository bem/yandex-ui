import { compose, composeU } from '@bem-react/core';

// base
import { Tooltip as TooltipDesktop, TooltipStateful as TooltipStatefulDesktop } from '../Tooltip@desktop';

// _size
import { withSizeM } from '../_size/Tooltip_size_m';
import { withSizeS } from '../_size/Tooltip_size_s';
import { withSizeL } from '../_size/Tooltip_size_l';
// _view
import { withViewDefault } from '../_view/Tooltip_view_default';

export * from '../Tooltip@desktop';

const enhance = compose(
    withViewDefault,
    composeU(withSizeM, withSizeS, withSizeL),
);

export const Tooltip = enhance(TooltipDesktop);
export const TooltipStateful = enhance(TooltipStatefulDesktop);
