import { ComponentType } from 'react';

export function fork<T>(component: ComponentType<T>, defaultProps: Partial<T>): ComponentType<T> {
    const forkedComponent = component.bind({});

    if (defaultProps) {
        forkedComponent.defaultProps = defaultProps;
    }

    return forkedComponent;
}
