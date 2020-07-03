import React from 'react';

import { RadioboxRadioProps as RadioboxRadioPropsCommon, RadioboxRadio as RadioboxRadioCommon } from './Radiobox-Radio';
import { cnRadiobox as cn } from '../Radiobox';
import { IWithControlProps, withControl } from '../../../hocs/withControl/withControl@desktop';

export * from './Radiobox-Radio';

type RadioboxRadioInternalProps = RadioboxRadioPropsCommon & IWithControlProps<HTMLLabelElement>;

export const RadioboxRadio = withControl<RadioboxRadioPropsCommon>(
    ({ className, hovered, ...props }: RadioboxRadioInternalProps) => (
        <RadioboxRadioCommon {...props} className={cn('Radio', { hovered }, [className])} />
    ),
);
