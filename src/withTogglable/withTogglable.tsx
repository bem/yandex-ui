import React, { ComponentClass, ComponentType, PureComponent } from 'react';

export interface IWithTogglableProps {
    /**
     * Состояние открытия.
     */
    opened?: boolean;

    /**
     * Обработчик устанавливающий состояние открытия.
     */
    setOpened?: (nextOpened: boolean) => void;
}

/**
 * ХОК позволяющий управлять состоянием открытия и закрытия.
 */
export const withTogglable = <T extends IWithTogglableProps>(
    WrappedComponent: ComponentType<T>,
): ComponentClass<T & IWithTogglableProps> => {
    return class WithTogglable extends PureComponent<T & IWithTogglableProps> {
        state = {
            opened: false,
        };

        render() {
            return <WrappedComponent {...this.props} opened={this.state.opened} setOpened={this.setOpened} />;
        }

        setOpened = (opened: boolean) => {
            this.setState({ opened });
        };
    };
};
