import { compose, composeU } from '@bem-react/core';

import { Tumbler as TumblerDesktop } from '../../Tumbler@desktop';
import { withSizeS } from '../../_size/Tumbler_size_s';
import { withSizeM } from '../../_size/Tumbler_size_m';
import { withSizeL } from '../../_size/Tumbler_size_l';
import { withViewDefault } from '../../_view/Tumbler_view_default@desktop';

export * from '../../Tumbler@desktop';

export const Tumbler = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(TumblerDesktop);
