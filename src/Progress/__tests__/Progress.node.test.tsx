/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Progress } from '../Progress';

describe('Progress (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Progress className="mix" />);
        }).not.toThrowError();
    });
});
