/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Dropdown as DropdownDesktop } from '../desktop';
import { Dropdown as DropdownTouchPhone } from '../touch-phone';
import { Dropdown as DropdownTouchPad } from '../touch-pad';

const platforms = [
    ['desktop', DropdownDesktop],
    ['touch-phone', DropdownTouchPhone],
    ['touch-pad', DropdownTouchPad],
] as const;

describe.each(platforms)('Dropdown@%s (ssr)', (_platform, Dropdown) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Dropdown content={<div>Test</div>}>
                    <button />
                </Dropdown>,
            );
        }).not.toThrowError();
    });
});
