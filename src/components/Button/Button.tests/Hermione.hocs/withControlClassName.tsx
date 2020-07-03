import React, { ComponentType } from 'react';
import { cnButton } from '../../Button';

export const witControlClassName = (WrappedComponent: ComponentType<any>) => ({
    pressed,
    hovered,
    focused,
    className,
    ...props
}: any) => <WrappedComponent {...props} className={cnButton({ pressed, hovered, focused }, [className])} />;
