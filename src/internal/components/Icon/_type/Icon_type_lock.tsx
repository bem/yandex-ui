import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../../../../components/Icon/Icon';
import './Icon_type_lock.css';

export interface IWithTypeLockProps {
    /** Тип иконки. */
    type?: 'lock';
}

export const withTypeLock = withBemMod<IWithTypeLockProps, IIconProps>(cnIcon(), { type: 'lock' });
