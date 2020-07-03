import React, { ComponentType, Ref, PureComponent, createRef } from 'react';

import { getDisplayName } from '../../lib/getDisplayName';
import { mergeAllRefs } from '../../lib/mergeRefs';

export interface IWithAutoFocusProps {
    /** Активное состояние. */
    focused?: boolean;
    /** Ссылка на нативный контрол. */
    controlRef?: Ref<HTMLElement>;
}

export const withAutoFocus = <TProps extends IWithAutoFocusProps>(WrappedComponent: ComponentType<TProps>) =>
    class WithAutoFocus extends PureComponent<TProps> {
        static displayName = `withAutoFocus(${getDisplayName(WrappedComponent)})`;

        readonly controlRef = createRef<HTMLElement>();

        componentDidUpdate(prevProps: TProps) {
            if (this.controlRef.current !== null && this.props.focused !== prevProps.focused) {
                if (this.props.focused) {
                    this.controlRef.current.focus();
                } else {
                    this.controlRef.current.blur();
                }
            }
        }

        render() {
            const { controlRef = null } = this.props;

            return (
                <WrappedComponent
                    {...this.props}
                    controlRef={mergeAllRefs(this.controlRef, controlRef)}
                />
            );
        }
    };
