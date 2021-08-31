/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { RadioButton as RadioButtonDesktop } from '../desktop';
import { RadioButton as RadioButtonTouchPad } from '../touch-pad';
import { RadioButton as RadioButtonTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', RadioButtonDesktop],
    ['touch-pad', RadioButtonTouchPad],
    ['touch-phone', RadioButtonTouchPhone],
] as const;

const options = [
    { value: 'a', children: 'Option A' },
    { value: 'b', children: <>Option B</> },
];

describe.each(platforms)('RadioButton@%s (ssr)', (_platform, RadioButton) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<RadioButton name="rb" value="b" options={options} className="mix" onChange={() => null} />);
        }).not.toThrowError();
    });
});
