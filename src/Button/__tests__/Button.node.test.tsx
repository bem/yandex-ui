/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Button as ButtonDesktop } from '../desktop';
import { Button as ButtonTouchPad } from '../touch-pad';
import { Button as ButtonTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', ButtonDesktop],
    ['touch-pad', ButtonTouchPad],
    ['touch-phone', ButtonTouchPhone],
] as const;

describe.each(platforms)('Button@%s (ssr)', (_platform, Button) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Button />);
        }).not.toThrowError();
    });
});
