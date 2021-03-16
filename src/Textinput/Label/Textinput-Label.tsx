import React, { FC, LabelHTMLAttributes } from 'react';
import { cnTextinput } from '../Textinput';

interface TextinputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    floated?: boolean;
}

export const Label: FC<TextinputLabelProps> = ({
    floated,
    className,
    ...props
}) => (
    <label
        className={cnTextinput('Label', {
            floated,
        }, [className])}
        {...props}
    />
);
