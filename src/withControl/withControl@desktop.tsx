import React, { MouseEventHandler, ComponentType, ComponentClass, MouseEvent, PureComponent } from 'react';

import { getDisplayName } from '../lib/getDisplayName';

export interface IWithControlProps<T = Element> {
    disabled?: boolean;
    hovered?: boolean;
    onMouseEnter?: MouseEventHandler<T>;
    onMouseLeave?: MouseEventHandler<T>;
}

export interface IWithControlState {
    hovered?: boolean;
}

export function withControl<T extends IWithControlProps>(WrappedComponent: ComponentType<T>): ComponentClass<T> {
    class WithControl extends PureComponent<T, IWithControlState> {
        static displayName = `WithControl@desktop(${getDisplayName(WrappedComponent)})`;

        readonly state = {
            hovered: this.props.hovered,
        };

        render() {
            const { disabled } = this.props;
            const hovered = disabled ? false : Boolean(this.state.hovered || this.props.hovered);
            // Оборачиваемый компонент явно может не реализовывать интерфейс для передаваемых свойств,
            // но все компоненты обязаны поддержать передачу всех свойств на DOM узел, поэтому тут мы
            // приводим тип оборачиваемого компонента к нужному виду.
            const Component = (WrappedComponent as any) as ComponentType<T>;

            return (
                <Component
                    {...this.props}
                    hovered={!disabled ? hovered : undefined}
                    onMouseEnter={!disabled ? this.onMouseEnter : undefined}
                    onMouseLeave={!disabled ? this.onMouseLeave : undefined}
                />
            );
        }
        protected onMouseEnter = (event: MouseEvent) => {
            this.setState({ hovered: true });

            if (this.props.onMouseEnter !== undefined) {
                this.props.onMouseEnter(event);
            }
        };

        protected onMouseLeave = (event: MouseEvent) => {
            this.setState({ hovered: false });

            if (this.props.onMouseLeave !== undefined) {
                this.props.onMouseLeave(event);
            }
        };
    }

    return WithControl;
}
