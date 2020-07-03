import React, { Ref, ChangeEventHandler, FC } from 'react';

import { cnRadiobox as cn } from '../Radiobox';
import './Radiobox-Control.css';

export type RadioboxControlProps = {
    checked?: boolean;
    controlRef?: Ref<HTMLInputElement>;
    disabled?: boolean;
    labelledBy?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    autoFocus?: boolean;
};

export const RadioboxControl: FC<RadioboxControlProps> = ({
    autoFocus,
    checked,
    controlRef,
    disabled,
    labelledBy,
    name,
    onChange,
    value,
}) => (
    <input
        aria-checked={checked}
        aria-labelledby={labelledBy}
        autoFocus={autoFocus}
        // Отключаем autoComplete, чтобы в FireFox
        // не сохранялось значение при перезагрузке страницы.
        autoComplete="off"
        checked={checked}
        className={cn('Control')}
        disabled={disabled}
        name={name}
        onChange={onChange}
        ref={controlRef}
        type="radio"
        value={value}
    />
);
