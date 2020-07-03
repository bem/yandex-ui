import { FC } from 'react';

import { CheckboxBoxProps } from '../Box/Checkbox-Box';
import { ICheckboxControlProps } from '../Control/Checkbox-Control';
import { CheckboxLabelProps } from '../Label/Checkbox-Label';
import { ICheckboxTickProps } from '../Tick/Checkbox-Tick';
import { IconProps } from './desktop';

export interface ICheckboxRegistry {
    Box: FC<CheckboxBoxProps>;
    Control: FC<ICheckboxControlProps>;
    Label: FC<CheckboxLabelProps>;
    Tick: FC<ICheckboxTickProps>;
    Icon: FC<IconProps>;
}
