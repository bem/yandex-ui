import React, { FC, useState } from 'react';

import {
    RenderOverride,
    useRenderOverride,
    RenderOverrideProvider,
    MultiRenderOverrideProvider,
} from '../render-override';

const OriginalComponent1: FC = ({ children }) => {
    const [id] = useState('1');
    return (
        <div id={id} data-testid="original-1">
            {children}
        </div>
    );
};
const OriginalComponent2: FC = ({ children }) => {
    const [id] = useState('2');
    return (
        <div id={id} data-testid="original-2">
            {children}
        </div>
    );
};

const InputComponent: FC<{ value?: string; idx: number }> = ({ value, idx }) => {
    const [id] = useState('1');
    return <input value={value || id} onChange={() => null} data-testid={`original-input-${idx}`} />;
};

export const HookMapUnitCase: FC<{ renderComponent?: RenderOverride }> = ({ renderComponent }) => {
    const Component = useRenderOverride(InputComponent, renderComponent);
    return (
        <>
            {[1, 2].map((index) => (
                <Component idx={index} key={index} />
            ))}
        </>
    );
};

export const HookUnitCase: FC<{ renderComponent?: RenderOverride }> = ({ renderComponent, children }) => {
    const Component = useRenderOverride(OriginalComponent1, renderComponent);
    return <Component>{children}</Component>;
};

export const SingleProviderUnitCase: FC<{ renderComponent?: RenderOverride }> = ({ renderComponent, children }) => (
    <RenderOverrideProvider component={OriginalComponent1} render={renderComponent}>
        {(Component) => <Component>{children}</Component>}
    </RenderOverrideProvider>
);

export const MultiProviderUnitCase: FC<{
    renderComponent1?: RenderOverride;
    renderComponent2?: RenderOverride;
}> = ({ renderComponent1, renderComponent2, children }) => (
    <MultiRenderOverrideProvider
        components={[[OriginalComponent1, renderComponent1], [OriginalComponent2, renderComponent2]]}
    >
        {(Component1: any, Component2: any) => (
            <>
                <Component1>{children}</Component1>
                <Component2>{children}</Component2>
            </>
        )}
    </MultiRenderOverrideProvider>
);
