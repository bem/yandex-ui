import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Spin as SpinCommon } from './Spin';
// _position
import { withPositionCenter } from './_position/Spin_position_center';
//  _size
import { withSizeL } from './_size/Spin_size_l';
import { withSizeM } from './_size/Spin_size_m';
import { withSizeS } from './_size/Spin_size_s';
import { withSizeXS } from './_size/Spin_size_xs';
import { withSizeXXS } from './_size/Spin_size_xxs';
// _view
import { withViewDefault } from './_view/Spin_view_default';

export * from './Spin';

export const Spin = compose(
    composeU(withSizeL, withSizeM, withSizeS, withSizeXS, withSizeXXS),
    withPositionCenter,
    withViewDefault,
)(SpinCommon);

export type ISpinProps = ExtractProps<typeof Spin>;
