import { withRegistry } from '@bem-react/di';

import { userPicRegistry } from './UserPic.registry/desktop';
import { UserPic as UserPicCommon } from './UserPic';

export * from './UserPic';
export const UserPic = withRegistry(userPicRegistry)(UserPicCommon);
