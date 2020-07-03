import React, { ComponentType, PureComponent } from 'react';

export const withCheckedState = (WrappedComponent: ComponentType<any>) =>
    class WithCheckedState extends PureComponent<any, any> {
        state = {
            checked: false,
        };

        onclick = () => {
            this.setState({ checked: true });
        };

        render() {
            const { checkable, ...props } = this.props;
            if (checkable) {
                return <WrappedComponent {...props} checked={this.state.checked} onClick={this.onclick} />;
            }

            return <WrappedComponent {...props} />;
        }
    };
