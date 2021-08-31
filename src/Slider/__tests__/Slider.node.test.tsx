/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Slider } from '../Slider';

describe('Slider (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        const fn = () => render(<Slider filled showTicks showTickValues value={[0]} step={25} onInput={() => null} />);

        expect(fn).not.toThrowError();
    });
});
