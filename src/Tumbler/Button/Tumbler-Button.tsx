import React, { FC, MouseEventHandler, KeyboardEventHandler, RefObject, FocusEventHandler } from 'react';

import { cnTumbler } from '../Tumbler';
import './Tumbler-Button.css';

type TumblerButtonProps = {
    checked: boolean;
    innerRef: RefObject<HTMLButtonElement>;
    labelledBy?: string;
    onBlur?: FocusEventHandler<HTMLButtonElement>;
    onClick: MouseEventHandler<HTMLButtonElement>;
    onFocus?: FocusEventHandler<HTMLButtonElement>;
    onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    required?: boolean;
};

export const TumblerButton: FC<TumblerButtonProps> = ({
    checked,
    children,
    innerRef,
    labelledBy,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    tabIndex,
    required,
}) => (
    <button
        aria-required={required}
        aria-labelledby={labelledBy}
        aria-pressed={checked}
        className={cnTumbler('Button')}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        ref={innerRef}
        tabIndex={tabIndex}
        type="button"
    >
        {children}
    </button>
);
