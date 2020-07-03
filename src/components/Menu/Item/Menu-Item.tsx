import React, { FC, MouseEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';

import { cnMenu } from '../Menu';
import { IMenuRegistry } from '../Menu.registry';

export interface IMenuItemProps {
    checked?: boolean;
    disabled?: boolean;
    hovered?: boolean;
    type?: string;
    needIconGlyph?: boolean;
    innerRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const MenuItem: FC<IMenuItemProps> = ({
    checked,
    children,
    className,
    disabled,
    hovered,
    needIconGlyph,
    type,
    innerRef,
    ...props
}) => {
    const { Text, Icon } = useComponentRegistry<IMenuRegistry>(cnMenu());
    return (
        <div
            {...props}
            aria-selected={checked}
            aria-disabled={disabled}
            role={type}
            ref={innerRef}
            className={cnMenu(
                'Item',
                {
                    checked,
                    disabled,
                    hovered,
                    type,
                },
                [className],
            )}
        >
            {needIconGlyph && <Icon glyph="type-check" />}
            <Text>{children}</Text>
        </div>
    );
};
