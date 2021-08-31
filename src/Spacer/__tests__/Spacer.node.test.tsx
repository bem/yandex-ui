/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Spacer } from '../Spacer';

describe('Spacer (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Spacer className="mix" />);
        }).not.toThrowError();
    });
});
