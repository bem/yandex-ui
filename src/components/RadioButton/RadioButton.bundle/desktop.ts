import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

import {
    IRadioButtonProps as IRadioButtonDesktopProps,
    RadioButton as RadioButtonDesktop,
} from '../RadioButton@desktop';
// _size
import { withSizeS } from '../_size/RadioButton_size_s';
import { withSizeM } from '../_size/RadioButton_size_m';
import { withSizeL } from '../_size/RadioButton_size_l';
// _view
import { withViewDefault } from '../_view/RadioButton_view_default@desktop';

export * from '../RadioButton@desktop';

export interface IRadioButtonProps extends IRadioButtonDesktopProps {
    size?: 's' | 'm' | 'l';
    view?: 'default';
}

export const RadioButton = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(RadioButtonDesktop) as FC<IRadioButtonProps>;
