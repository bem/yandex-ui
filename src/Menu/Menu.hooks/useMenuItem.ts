import { HTMLAttributes, MouseEvent, useCallback } from 'react';

import { cnMenu } from '../Menu';

export interface UseMenuItemProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    hovered?: boolean;
    type?: string;
    id: string;
    index: number;
    onMouseEnter?: (event: MouseEvent<HTMLElement>, index: number) => void;
    onMouseLeave?: (event: MouseEvent<HTMLElement>, index: number) => void;
    onClick?: (event: MouseEvent<HTMLElement>, index: number) => void;
}

export function useMenuItem(props: UseMenuItemProps): HTMLAttributes<HTMLElement> {
    const {
        checked,
        className,
        disabled,
        hovered,
        type = 'menuitem',
        id,
        index,
        onClick,
        onMouseEnter,
        onMouseLeave,
        ...otherProps
    } = props;

    const handleClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            if (onClick) {
                onClick(event, index);
            }
        },
        [index, onClick],
    );

    const handleMouseEnter = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            if (onMouseEnter) {
                onMouseEnter(event, index);
            }
        },
        [index, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            if (onMouseLeave) {
                onMouseLeave(event, index);
            }
        },
        [index, onMouseLeave],
    );

    return {
        ...otherProps,
        'aria-selected': checked,
        'aria-disabled': disabled,
        // uniq id for a11y
        id,
        role: type,
        className: cnMenu(
            'Item',
            {
                checked,
                disabled,
                hovered,
                type,
            },
            [className],
        ),
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };
}
