import React, { useLayoutEffect, useRef } from 'react';

import { screen, queryByTestId, createClientRender, createServerRender, createContainer } from '../../internal/testing';
import { Portal } from '../Portal';

describe('Portal', () => {
    const render = createClientRender();

    test('should be lazy and not render at mount', () => {
        const Fixture = (props: any) => (
            <Portal {...props}>
                <div data-testid="container" />
            </Portal>
        );
        const { setProps } = render(<Fixture />);
        expect(screen.queryByTestId('container')).not.toBeInTheDocument();
        setProps({ visible: true });
        expect(screen.queryByTestId('container')).toBeInTheDocument();
    });

    test('should render in document with initial visible', () => {
        const Fixture = () => (
            <Portal visible>
                <div data-testid="container" />
            </Portal>
        );
        render(<Fixture />);
        expect(screen.getByTestId('container')).toBeInTheDocument();
    });

    test('should keep in document after invisible', () => {
        const Fixture = (props: any) => (
            <Portal {...props}>
                <div data-testid="container" />
            </Portal>
        );
        const { setProps } = render(<Fixture />);
        setProps({ visible: true });
        expect(screen.queryByTestId('container')).toBeInTheDocument();
        setProps({ visible: false });
        expect(screen.queryByTestId('container')).toBeInTheDocument();
    });

    test('should not keep in document after invisible', () => {
        const Fixture = (props: any) => (
            <Portal keepMounted={false} visible {...props}>
                <div data-testid="container" />
            </Portal>
        );
        const { setProps } = render(<Fixture />);
        expect(screen.queryByTestId('container')).toBeInTheDocument();
        setProps({ visible: false });
        expect(screen.queryByTestId('container')).not.toBeInTheDocument();
    });

    test('should render without portal', () => {
        const Fixture = (props: any) => (
            <div data-testid="host">
                <Portal scope="inplace" {...props}>
                    <div data-testid="container" />
                </Portal>
            </div>
        );
        const { setProps } = render(<Fixture />);
        const host = screen.getByTestId('host');
        expect(queryByTestId(host, 'container')).not.toBeInTheDocument();
        setProps({ visible: true });
        expect(queryByTestId(host, 'container')).toBeInTheDocument();
    });

    test('should render in scope', () => {
        const Fixture = (props: any) => {
            const ref = useRef(null);
            return (
                <>
                    <div ref={ref} data-testid="scope" />
                    <Portal visible scope={ref} {...props}>
                        <div data-testid="container" />
                    </Portal>
                </>
            );
        };
        render(<Fixture />);
        const scope = screen.getByTestId('scope');
        expect(queryByTestId(scope, 'container')).toBeInTheDocument();
    });

    test('should set refs at first render with initial visible', () => {
        let container = null;
        const Fixture = () => {
            const ref = useRef(null);
            useLayoutEffect(() => {
                container = ref.current;
            }, []);
            return (
                <Portal visible>
                    <div ref={ref} data-testid="container" />
                </Portal>
            );
        };
        render(<Fixture />);
        expect(container).toEqual(screen.getByTestId('container'));
    });

    test('should hydrate without warnings', () => {
        const ssr = createServerRender();

        const Fixture = () => (
            <Portal visible scope="inplace">
                <div data-testid="container" />
            </Portal>
        );

        const { html } = ssr(<Fixture />);
        const container = createContainer(html);

        const originalError = console.error;
        const onError = jest.fn();
        console.error = onError;

        render(<Fixture />, { container, hydrate: true });

        expect(onError).not.toHaveBeenCalled();
        console.error = originalError;
    });
});
