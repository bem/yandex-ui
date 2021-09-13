import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

import {
    IRadioButtonProps as IRadioButtonTouchPhoneProps,
    RadioButton as RadioButtonTouchPhone,
} from '../../RadioButton@touch-phone';
// _size
import { withSizeS } from '../../_size/RadioButton_size_s';
import { withSizeM } from '../../_size/RadioButton_size_m';
import { withSizeL } from '../../_size/RadioButton_size_l';
// _view
import { withViewDefault } from '../../_view/RadioButton_view_default';

export * from '../../RadioButton@touch-phone';

export interface IRadioButtonProps extends IRadioButtonTouchPhoneProps {
    size?: 's' | 'm' | 'l';
    view?: 'default';
}

export const RadioButton = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(RadioButtonTouchPhone) as FC<IRadioButtonProps>;
