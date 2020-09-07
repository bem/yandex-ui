import React, { FC, LabelHTMLAttributes } from 'react';
import { cnTextinput } from '../Textinput';
import './Textinput-Label.css';

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
