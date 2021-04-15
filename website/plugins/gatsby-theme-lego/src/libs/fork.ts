import { ComponentType } from 'react';

export function fork<T>(component: ComponentType<T>, defaultProps: T): ComponentType {
    const forkedComponent = component.bind({});

    if (defaultProps) {
        forkedComponent.defaultProps = defaultProps;
    }

    return forkedComponent;
}
