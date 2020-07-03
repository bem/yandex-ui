import React, { ComponentType, useState, useCallback, ChangeEventHandler } from 'react';

export type WithCheckedStateProps = {
    onChange?: ChangeEventHandler<HTMLElement>;
    checked?: boolean;
};

export const withCheckedState = <TProps extends WithCheckedStateProps>(WrappedComponent: ComponentType<TProps>) => (
    props: TProps,
) => {
    const [checked, setChecked] = useState(false);
    const onChange = useCallback(() => setChecked(!checked), [checked]);
    return <WrappedComponent onChange={onChange} checked={checked} {...props} />;
};
