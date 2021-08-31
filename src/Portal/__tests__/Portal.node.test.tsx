/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Portal } from '../Portal';

describe('Portal (ssr)', () => {
    const ssr = createServerRender();

    test('should not render with visible', () => {
        const { html } = ssr(
            <Portal visible>
                <div data-testid="container" />
            </Portal>,
        );
        expect(html).toBe('');
    });

    test('should render with visible and inplace scope', () => {
        const { html } = ssr(
            <Portal visible scope="inplace">
                <div data-testid="container" />
            </Portal>,
        );
        expect(html).toBe('<div data-testid="container" data-reactroot=""></div>');
    });

    test('should not render with invisible and inplace scope', () => {
        const { html } = ssr(
            <Portal scope="inplace">
                <div data-testid="container" />
            </Portal>,
        );
        expect(html).toBe('');
    });
});
