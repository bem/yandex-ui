import React, { forwardRef, useRef } from 'react';
import { SharedButtonProps, DOMProps, useButton, useForkRef, useHover, mergeProps } from 'web-platform-alpha';

import { cnTextField } from '../constants';
import './TextField-Button.css';

export type TextFieldButtonProps = SharedButtonProps & DOMProps;

export const TextFieldButton = forwardRef<HTMLButtonElement, TextFieldButtonProps>((props, innerRef) => {
    const { children, className, ...otherProps } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const ref = useForkRef(buttonRef, innerRef);
    const { buttonProps, isPressed } = useButton(otherProps, buttonRef);
    const { hoverProps, isHovered } = useHover(otherProps);

    return (
        <button
            {...mergeProps(buttonProps, hoverProps)}
            ref={ref}
            className={cnTextField('Button', null, [className])}
            data-disabled={otherProps.disabled || undefined}
            data-hovered={isHovered || undefined}
            data-pressed={isPressed || undefined}
        >
            {children}
        </button>
    );
});
