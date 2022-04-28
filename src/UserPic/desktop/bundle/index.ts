import { compose, composeU } from '@bem-react/core';

import { UserPic as UserPicDesktop } from '../../UserPic@desktop';
import { withCamera } from '../../_hasCamera/UserPic_hasCamera@desktop';
import { withSizeM } from '../../_size/UserPic_size_m';
import { withSizeS } from '../../_size/UserPic_size_s';

export * from '../../UserPic';

export const UserPic = compose(
    composeU(withSizeM, withSizeS),
    withCamera,
)(UserPicDesktop);
