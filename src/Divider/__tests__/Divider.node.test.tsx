/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Divider } from '..';

describe('Divider (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Divider className="mix" />);
        }).not.toThrowError();
    });
});
