import { userPicRegistry } from '../../UserPic.registry/desktop';
import { UserPicCamera } from '../../Camera/UserPic-Camera@desktop';

userPicRegistry.set('Camera', UserPicCamera);

export { userPicRegistry };
