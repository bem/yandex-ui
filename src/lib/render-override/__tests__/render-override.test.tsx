import React from 'react';

import { createClientRender, screen } from '../../../internal/testing';
import { HookMapUnitCase, HookUnitCase, MultiProviderUnitCase, SingleProviderUnitCase } from './fixture';

describe('render-override', () => {
    const render = createClientRender();

    describe('useRenderOverride', () => {
        test('should override render with new component', () => {
            const { rerender } = render(<HookUnitCase>original</HookUnitCase>);

            expect(screen.getByTestId('original-1')).toBeInTheDocument();

            rerender(<HookUnitCase renderComponent={() => <div data-testid="override" />} />);

            expect(screen.getByTestId('override')).toBeInTheDocument();
        });

        test('should override render with original component', () => {
            const { rerender } = render(<HookUnitCase>original</HookUnitCase>);

            expect(screen.getByTestId('original-1')).toBeInTheDocument();

            rerender(
                <HookUnitCase
                    renderComponent={({ children }, Component) => <Component>{children} overridden</Component>}
                >
                    original
                </HookUnitCase>,
            );

            expect(screen.getByTestId('original-1')).toBeInTheDocument();
            expect(screen.getByText('original overridden')).toBeInTheDocument();
        });

        test('should keep mount overriden component after rerender', () => {
            const { rerender } = render(<HookMapUnitCase renderComponent={(props, Input) => <Input {...props} />} />);
            screen.getByTestId('original-input-1').focus();

            expect(screen.getByTestId('original-input-1')).toHaveFocus();

            rerender(<HookMapUnitCase renderComponent={(props, Input) => <Input value="next" {...props} />} />);

            expect(screen.getByTestId('original-input-1')).toHaveFocus();
        });

        test('should update all overriden components', () => {
            const { rerender } = render(<HookMapUnitCase renderComponent={(props, Input) => <Input {...props} />} />);
            rerender(<HookMapUnitCase renderComponent={(props, Input) => <Input value="next" {...props} />} />);

            expect(screen.getByTestId('original-input-1')).toHaveValue('next');
            expect(screen.getByTestId('original-input-2')).toHaveValue('next');
        });
    });

    describe('RenderOverrideProvider', () => {
        test('should override render with new component', () => {
            const { rerender } = render(<SingleProviderUnitCase />);

            expect(screen.getByTestId('original-1')).toBeInTheDocument();

            rerender(<SingleProviderUnitCase renderComponent={() => <div data-testid="override" />} />);

            expect(screen.getByTestId('override')).toBeInTheDocument();
        });

        test('should override render with original component', () => {
            const { rerender } = render(<SingleProviderUnitCase>original</SingleProviderUnitCase>);

            expect(screen.getByTestId('original-1')).toBeInTheDocument();

            rerender(
                <SingleProviderUnitCase
                    renderComponent={({ children }, Component) => <Component>{children} overridden</Component>}
                >
                    original
                </SingleProviderUnitCase>,
            );

            expect(screen.getByTestId('original-1')).toBeInTheDocument();
            expect(screen.getByText('original overridden')).toBeInTheDocument();
        });
    });

    describe('MultiRenderOverrideProvider', () => {
        test('should override render with original component', () => {
            const { rerender } = render(<MultiProviderUnitCase>original</MultiProviderUnitCase>);

            expect(screen.getByTestId('original-1')).toBeInTheDocument();
            expect(screen.getByTestId('original-2')).toBeInTheDocument();

            rerender(
                <MultiProviderUnitCase
                    renderComponent1={({ children }, Component) => <Component>{children} overridden 1</Component>}
                    renderComponent2={({ children }, Component) => <Component>{children} overridden 2</Component>}
                >
                    original
                </MultiProviderUnitCase>,
            );

            expect(screen.getByTestId('original-1')).toBeInTheDocument();
            expect(screen.getByTestId('original-2')).toBeInTheDocument();
            expect(screen.getByText('original overridden 1')).toBeInTheDocument();
            expect(screen.getByText('original overridden 2')).toBeInTheDocument();
        });
    });
});
