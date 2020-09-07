import React, {
    FocusEventHandler,
    MouseEventHandler,
    ComponentType,
    ComponentClass,
    MouseEvent,
    FocusEvent,
    PureComponent,
    Ref,
} from 'react';

import { getDisplayName } from '../lib/getDisplayName';

export interface IWithControlProps<T = Element> {
    disabled?: boolean;
    focused?: boolean;
    onBlur?: FocusEventHandler<T>;
    onFocus?: FocusEventHandler<T>;
    onMouseDown?: MouseEventHandler<T>;
    onMouseUp?: MouseEventHandler<T>;
    pressed?: boolean;
    /**
     * Ссылка на дом-ноду нативного контрола.
     */
    controlRef?: Ref<T>;
}

export interface IWithControlState {
    disabled?: boolean;
    focused?: boolean;
    pressed?: boolean;
}

export function withControl<T extends IWithControlProps>(WrappedComponent: ComponentType<T>): ComponentClass<T> {
    class WithControl extends PureComponent<T, IWithControlState> {
        static displayName = `WithControl(${getDisplayName(WrappedComponent)})`;

        readonly state = {
            focused: this.props.focused,
            pressed: this.props.pressed,
            disabled: this.props.disabled,
        };

        // TODO: https://st.yandex-team.ru/ISL-5863
        // eslint-disable-next-line camelcase
        UNSAFE_componentWillReceiveProps(nextProps: IWithControlProps) {
            if (this.props.disabled !== nextProps.disabled) {
                this.setState({ disabled: nextProps.disabled });
            }

            if (this.props.focused !== nextProps.focused) {
                this.setState({ focused: nextProps.focused });
            }

            if (this.props.pressed !== nextProps.pressed) {
                this.setState({ pressed: nextProps.pressed });
            }

            if (nextProps.disabled) {
                this.setState({ focused: false, pressed: false });
            }
        }

        render() {
            const { disabled, focused, pressed } = this.state;
            // Оборачиваемый компонент явно может не реализовывать интерфейс для передаваемых свойств,
            // но все компоненты обязаны поддержать передачу всех свойств на DOM узел, поэтому тут мы
            // приводим тип оборачиваемого компонента к нужному виду.
            const Component = (WrappedComponent as any) as ComponentType<T>;

            return (
                <Component
                    {...this.props}
                    focused={!disabled ? focused : undefined}
                    pressed={!disabled ? pressed : undefined}
                    onMouseDown={!disabled ? this.onMouseDown : undefined}
                    onMouseUp={!disabled ? this.onMouseUp : undefined}
                    onFocus={!disabled ? this.onFocus : undefined}
                    onBlur={!disabled ? this.onBlur : undefined}
                />
            );
        }

        protected onMouseDown = (event: MouseEvent) => {
            // по нажатию правой кнопки мыши
            // не нужно выставлять pressed
            if (event.nativeEvent.which === 3) {
                return;
            }

            this.setState({ pressed: true });
            this.docOnMouseDown();

            if (this.props.onMouseDown !== undefined) {
                this.props.onMouseDown(event);
            }
        };

        protected onMouseUp = (event: MouseEvent) => {
            this.setState({ pressed: false });

            if (this.props.onMouseUp !== undefined) {
                this.props.onMouseUp(event);
            }
        };

        protected docOnMouseDown = () => {
            // необходимо слушать mouseup вне блока, иначе
            // при отпущенной вовне кнопке мыши блок остается pressed
            document.addEventListener('mouseup', this.docOnMouseUp);
            // необходимо для button2_type_link
            document.addEventListener('dragend', this.docOnMouseUp);
        };

        protected docOnMouseUp = () => {
            this.setState({ pressed: false });
            document.removeEventListener('mouseup', this.docOnMouseUp);
            document.removeEventListener('dragend', this.docOnMouseUp);
        };

        protected onFocus = (event: FocusEvent) => {
            this.setState({ focused: true });

            if (this.props.onFocus !== undefined) {
                this.props.onFocus(event);
            }
        };

        protected onBlur = (event: FocusEvent) => {
            this.setState({ focused: false });

            if (this.props.onBlur !== undefined) {
                this.props.onBlur(event);
            }
        };
    }

    return WithControl;
}
