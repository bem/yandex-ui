import { compose, composeU } from '@bem-react/core';

import { Tumbler as TumblerTouchPad } from '../../Tumbler@touch-pad';
import { withSizeS } from '../../_size/Tumbler_size_s';
import { withSizeM } from '../../_size/Tumbler_size_m';
import { withSizeL } from '../../_size/Tumbler_size_l';
import { withViewDefault } from '../../_view/Tumbler_view_default';

export * from '../../Tumbler@touch-pad';

export const Tumbler = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(TumblerTouchPad);
