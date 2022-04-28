import { withRegistry } from '@bem-react/di';

import { userPicRegistry } from './UserPic.registry/touch-phone';
import { UserPic as UserPicCommon } from './UserPic';

import './UserPic@touch-phone.css';

export * from './UserPic';
export const UserPic = withRegistry(userPicRegistry)(UserPicCommon);
