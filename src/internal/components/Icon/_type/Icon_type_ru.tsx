import { withBemMod } from '@bem-react/core';

import { cnIcon } from '../../../../Icon/Icon';
import './Icon_type.css';

export interface IWithTypeArrowProps {
    type?: 'ru';
}

export const withTypeRu = withBemMod<IWithTypeArrowProps>(cnIcon(), { type: 'ru' });
