import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { userPicRegistry } from './UserPic_hasCamera.registry/desktop';
import { withCamera as withCameraBase } from './UserPic_hasCamera';

export const withCamera = compose(
    withRegistry(userPicRegistry),
    withCameraBase,
);
