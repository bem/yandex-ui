import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { useComponentRegistry } from '@bem-react/di';

import { cnMenu } from '../Menu';
import { IMenuRegistry } from '../Menu.registry';
import { useMenuItem } from '../Menu.hooks/useMenuItem';

export interface IMenuItemProps {
    children?: ReactNode;
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
    id: string;
    value: any;
}

export const MenuItem: FC<IMenuItemProps> = ({ needIconGlyph, children, innerRef, value, ...props }) => {
    const { Text, Icon } = useComponentRegistry<IMenuRegistry>(cnMenu());
    const itemProps = useMenuItem(props);

    return (
        <div ref={innerRef} {...itemProps}>
            {needIconGlyph && <Icon glyph="type-check" />}
            <Text>{children}</Text>
        </div>
    );
};
