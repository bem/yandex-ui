import React, { FC, MouseEventHandler } from 'react';

import { cnTumbler } from '../Tumbler';
import './Tumbler-Label.css';

type TumblerLabelProps = {
    disabled?: boolean;
    htmlFor: string;
    id: string;
    onClick: MouseEventHandler<HTMLSpanElement>;
};

export const TumblerLabel: FC<TumblerLabelProps> = ({ disabled, htmlFor, id, onClick, children }) => (
    <label
        aria-hidden="true"
        htmlFor={disabled ? undefined : htmlFor}
        id={id}
        onClick={onClick}
        className={cnTumbler('Label')}
    >
        {children}
    </label>
);
