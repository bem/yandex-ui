/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Spin } from '../Spin';

describe('Spin (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Spin className="mix" />);
        }).not.toThrowError();
    });
});
