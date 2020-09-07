import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../../../../Icon/Icon';
import './Icon_type.css';

export interface IWithTypeArrowProps {
    type?: 'kz';
}

export const withTypeKz = withBemMod<IWithTypeArrowProps>(cnIcon(), { type: 'kz' });
