import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../../../../Icon/Icon';
import './Icon_type.css';

export interface IWithTypeArrowProps {
    type?: 'by';
}

export const withTypeBy = withBemMod<IWithTypeArrowProps>(cnIcon(), { type: 'by' });
