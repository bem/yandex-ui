/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Header } from '../Header';

describe('Header (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        const fn = () => render(<Header />);

        expect(fn).not.toThrowError();
    });
});
