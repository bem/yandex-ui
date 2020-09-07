import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

import {
    IRadioButtonProps as IRadioButtonTouchPadProps,
    RadioButton as RadioButtonTouchPad,
} from '../RadioButton@touch-pad';
// _size
import { withSizeS } from '../_size/RadioButton_size_s';
import { withSizeM } from '../_size/RadioButton_size_m';
import { withSizeL } from '../_size/RadioButton_size_l';
// _view
import { withViewDefault } from '../_view/RadioButton_view_default';

export * from '../RadioButton@touch-pad';

export interface IRadioButtonProps extends IRadioButtonTouchPadProps {
    size?: 's' | 'm' | 'l';
    view?: 'default';
}

export const RadioButton = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(RadioButtonTouchPad) as FC<IRadioButtonProps>;
