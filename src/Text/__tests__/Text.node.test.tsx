/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Text } from '../Text';

describe('Text (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Text className="mix" />);
        }).not.toThrowError();
    });
});
