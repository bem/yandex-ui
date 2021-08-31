/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { MessageBox as MessageBoxDesktop } from '../desktop/bundle';
import { MessageBox as MessageBoxTouchPad } from '../touch-pad/bundle';
import { MessageBox as MessageBoxTouchPhone } from '../touch-phone/bundle';

const platforms = [
    ['desktop', MessageBoxDesktop],
    ['touch-pad', MessageBoxTouchPad],
    ['touch-phone', MessageBoxTouchPhone],
] as const;

describe.each(platforms)('MessageBox@%s (ssr)', (_platform, MessageBox) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<MessageBox className="mix" />);
        }).not.toThrowError();
    });
});
