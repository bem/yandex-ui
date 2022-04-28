import { UserPicCamera } from '../../Camera/UserPic-Camera';
import { IUserPicRegistry as IUserPicRegistryCommon } from '../../UserPic.registry/interface';

export interface IUserPicRegistry extends IUserPicRegistryCommon {
    Camera: typeof UserPicCamera;
}
