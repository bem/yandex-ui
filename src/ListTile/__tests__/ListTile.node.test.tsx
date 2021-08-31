/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { ListTile } from '../ListTile';

describe('ListTile (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<ListTile className="mix">Test</ListTile>);
        }).not.toThrowError();
    });
});
