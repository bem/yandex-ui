import { compose, composeU } from '@bem-react/core';

import { MessageBox as MessageBoxCommon, MessageBoxPopup as MessageBoxPopupCommon } from '../MessageBox@desktop';
import { withViewDefault } from '../_view/MessageBox_view_default';
import { withViewPromo } from '../_view/MessageBox_view_promo';
import { withViewInverse } from '../_view/MessageBox_view_inverse';
import { withSizeL } from '../_size/MessageBox_size_l';
import { withSizeM } from '../_size/MessageBox_size_m';
import { withSizeS } from '../_size/MessageBox_size_s';

export * from '../MessageBox@desktop';

const enhance = compose(
    composeU(withViewDefault, withViewPromo, withViewInverse),
    composeU(withSizeL, withSizeM, withSizeS),
);

export const MessageBox = enhance(MessageBoxCommon);
export const MessageBoxPopup = enhance(MessageBoxPopupCommon);
