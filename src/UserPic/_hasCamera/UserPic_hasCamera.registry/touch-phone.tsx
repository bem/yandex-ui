import { userPicRegistry } from '../../UserPic.registry/touch-phone';
import { UserPicCamera } from '../../Camera/UserPic-Camera@touch-phone';

userPicRegistry.set('Camera', UserPicCamera);

export { userPicRegistry };
