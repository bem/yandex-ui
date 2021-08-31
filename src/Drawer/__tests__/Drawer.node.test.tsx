/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Drawer } from '../touch-phone/bundle';

describe('Drawer (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Drawer>
                    <p>Phasellus sollicitudin in pellentesque cras sagittis platea mat</p>
                </Drawer>,
            );
        }).not.toThrowError();
    });
});
