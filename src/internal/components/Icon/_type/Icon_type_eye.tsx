import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../../../../Icon/Icon';
import './Icon_type_eye.css';

export interface IWithTypeEyeProps {
    /** Тип иконки. */
    type?: 'eye';
}

export const withTypeEye = withBemMod<IWithTypeEyeProps, IIconProps>(cnIcon(), { type: 'eye' });
