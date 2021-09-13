import { compose, composeU } from '@bem-react/core';

// base
import { Tooltip as TooltipTouchPad, TooltipStateful as TooltipStatefulTouchPad } from '../../Tooltip@touch-pad';

// _size
import { withSizeM } from '../../_size/Tooltip_size_m';
import { withSizeS } from '../../_size/Tooltip_size_s';
import { withSizeL } from '../../_size/Tooltip_size_l';
// _view
import { withViewDefault } from '../../_view/Tooltip_view_default';

export * from '../../Tooltip@touch-pad';

const enhance = compose(
    withViewDefault,
    composeU(withSizeM, withSizeS, withSizeL),
);

export const Tooltip = enhance(TooltipTouchPad);
export const TooltipStateful = enhance(TooltipStatefulTouchPad);
