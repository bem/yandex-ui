/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Badge } from '../Badge';

describe('Badge (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Badge className="mix" content="1">
                    <div />
                </Badge>,
            );
        }).not.toThrowError();
    });
});
