import React, { createRef } from 'react';

import { createClientRender, screen, cleanup } from '../../internal/testing';
import { Header } from '../Header';

describe('Header', () => {
    const render = createClientRender();

    test('should render correctly', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });

    test('should return correct displayName', () => {
        expect(Header.displayName).toBe('Header');
    });

    test('should set innerRef', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Header innerRef={innerRef} />);
        expect(innerRef.current).not.toBe(null);
    });

    test('should set actions', () => {
        render(<Header />);
        const text = 'actions';
        try {
            screen.getByText(text);
        } catch (e) {
            expect(e.message).toContain(`Unable to find an element with the text: ${text}`);
        }
        cleanup();
        render(<Header actions={text} />);
        expect(screen.getByText(text)).not.toBe(null);
    });

    test('should set children', () => {
        const text = 'children';
        render(<Header>{text}</Header>);
        try {
            screen.getByText(text);
        } catch (e) {
            expect(e.message).toContain(`Unable to find an element with the text: ${text}`);
        }
        cleanup();
        render(<Header>{text}</Header>);
        expect(screen.getByText(text)).not.toBe(null);
    });

    test('should set logo', () => {
        const text = 'logo';
        render(<Header />);
        try {
            screen.getByText(text);
        } catch (e) {
            expect(e.message).toContain(`Unable to find an element with the text: ${text}`);
        }
        cleanup();
        render(<Header logo={text} />);
        expect(screen.getByText(text)).not.toBe(null);
    });
});
