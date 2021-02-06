import { HTMLAttributes, MouseEventHandler } from 'react';

import { cnMenu } from '../Menu';

export interface UseMenuItemProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    hovered?: boolean;
    type?: string;
    id: string;
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    onClick?: MouseEventHandler<HTMLElement>;
}

export function useMenuItem(props: UseMenuItemProps): HTMLAttributes<HTMLElement> {
    const { checked, className, disabled, hovered, type = 'menuitem', id, ...otherProps } = props;

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
    };
}
