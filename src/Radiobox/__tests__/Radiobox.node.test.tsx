/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Radiobox as RadioboxDesktop } from '../desktop';
import { Radiobox as RadioboxTouchPad } from '../touch-pad';
import { Radiobox as RadioboxTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', RadioboxDesktop],
    ['touch-pad', RadioboxTouchPad],
    ['touch-phone', RadioboxTouchPhone],
] as const;

const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
];

describe.each(platforms)('Radiobox@%s (ssr)', (_platform, Radiobox) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Radiobox onChange={() => null} value="a" options={options} className="mix" name="radio" />);
        }).not.toThrowError();
    });
});
