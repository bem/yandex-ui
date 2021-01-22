/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Header } from '../Header';

describe('Header (ssr)', () => {
    test('should render correctly', () => {
        const fn = () =>
            renderToString(<Header />);
        expect(fn).not.toThrowError();
    });
});
