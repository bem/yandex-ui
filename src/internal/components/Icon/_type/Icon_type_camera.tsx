import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../../../../components/Icon/Icon';
import './Icon_type_camera.css';

export interface IWithTypeCameraProps {
    /** Тип иконки. */
    type?: 'camera';
}

export const withTypeCamera = withBemMod<IWithTypeCameraProps, IIconProps>(cnIcon(), { type: 'camera' });
