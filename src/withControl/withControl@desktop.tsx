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

        // TODO: https://st.yandex-team.ru/ISL-5863
        // eslint-disable-next-line camelcase
        UNSAFE_componentWillReceiveProps(nextProps: T) {
            this.setState({
                hovered: nextProps.disabled ? false : this.state.hovered || nextProps.hovered,
            });
        }

        render() {
            const { hovered } = this.state;
            const { disabled } = this.props;
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
