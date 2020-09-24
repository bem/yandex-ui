import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { HookMapUnitCase, HookUnitCase, MultiProviderUnitCase, SingleProviderUnitCase } from './fixture';

describe('render-override', () => {
    describe('useRenderOverride', () => {
        test('should override render with new component', () => {
            const { rerender, getByTestId } = render(<HookUnitCase>original</HookUnitCase>);
            expect(getByTestId('original-1')).toBeInTheDocument();
            rerender(<HookUnitCase renderComponent={() => <div data-testid="override" />} />);
            expect(getByTestId('override')).toBeInTheDocument();
        });

        test('should override render with original component', () => {
            const { rerender, getByTestId, getByText } = render(<HookUnitCase>original</HookUnitCase>);
            expect(getByTestId('original-1')).toBeInTheDocument();
            rerender(
                <HookUnitCase
                    renderComponent={({ children }, Component) => <Component>{children} overridden</Component>}
                >
                    original
                </HookUnitCase>,
            );
            expect(getByTestId('original-1')).toBeInTheDocument();
            expect(getByText('original overridden')).toBeInTheDocument();
        });

        test('should keep mount overriden component after rerender', () => {
            const { rerender, getByTestId } = render(
                <HookMapUnitCase renderComponent={(props, Input) => <Input {...props} />} />,
            );
            getByTestId('original-input-1').focus();
            expect(getByTestId('original-input-1')).toHaveFocus();
            rerender(<HookMapUnitCase renderComponent={(props, Input) => <Input value="next" {...props} />} />);
            expect(getByTestId('original-input-1')).toHaveFocus();
        });

        test('should update all overriden components', () => {
            const { rerender, getByTestId } = render(
                <HookMapUnitCase renderComponent={(props, Input) => <Input {...props} />} />,
            );
            rerender(<HookMapUnitCase renderComponent={(props, Input) => <Input value="next" {...props} />} />);
            expect(getByTestId('original-input-1')).toHaveValue('next');
            expect(getByTestId('original-input-2')).toHaveValue('next');
        });
    });

    describe('RenderOverrideProvider', () => {
        test('should override render with new component', () => {
            const { rerender, getByTestId } = render(<SingleProviderUnitCase />);
            expect(getByTestId('original-1')).toBeInTheDocument();
            rerender(<SingleProviderUnitCase renderComponent={() => <div data-testid="override" />} />);
            expect(getByTestId('override')).toBeInTheDocument();
        });

        test('should override render with original component', () => {
            const { rerender, getByTestId, getByText } = render(
                <SingleProviderUnitCase>original</SingleProviderUnitCase>,
            );
            expect(getByTestId('original-1')).toBeInTheDocument();
            rerender(
                <SingleProviderUnitCase
                    renderComponent={({ children }, Component) => <Component>{children} overridden</Component>}
                >
                    original
                </SingleProviderUnitCase>,
            );
            expect(getByTestId('original-1')).toBeInTheDocument();
            expect(getByText('original overridden')).toBeInTheDocument();
        });
    });

    describe('MultiRenderOverrideProvider', () => {
        test('should override render with original component', () => {
            const { rerender, getByTestId, getByText } = render(
                <MultiProviderUnitCase>original</MultiProviderUnitCase>,
            );
            expect(getByTestId('original-1')).toBeInTheDocument();
            expect(getByTestId('original-2')).toBeInTheDocument();
            rerender(
                <MultiProviderUnitCase
                    renderComponent1={({ children }, Component) => <Component>{children} overridden 1</Component>}
                    renderComponent2={({ children }, Component) => <Component>{children} overridden 2</Component>}
                >
                    original
                </MultiProviderUnitCase>,
            );
            expect(getByTestId('original-1')).toBeInTheDocument();
            expect(getByTestId('original-2')).toBeInTheDocument();
            expect(getByText('original overridden 1')).toBeInTheDocument();
            expect(getByText('original overridden 2')).toBeInTheDocument();
        });
    });
});
