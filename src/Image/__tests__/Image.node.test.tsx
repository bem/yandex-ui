/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Image } from '../Image';

describe('Image (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Image src="url" className="mix" />);
        }).not.toThrowError();
    });
});
