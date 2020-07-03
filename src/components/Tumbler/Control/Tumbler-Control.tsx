import React, { FC, RefObject, ChangeEventHandler } from 'react';

import { cnTumbler } from '../Tumbler';

type TumblerControlProps = {
    checked: boolean;
    id: string;
    innerRef?: RefObject<HTMLInputElement>;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TumblerControl: FC<TumblerControlProps> = ({ id, innerRef, checked, name, onChange }) => (
    <input
        id={id}
        hidden
        ref={innerRef}
        className={cnTumbler('Control')}
        name={name}
        checked={checked}
        value={String(checked)}
        type="checkbox"
        autoComplete="off"
        onChange={onChange}
    />
);
