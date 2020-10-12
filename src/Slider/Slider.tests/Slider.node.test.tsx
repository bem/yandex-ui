/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Slider } from '../Slider';

describe('Slider (ssr)', () => {
    test('should render correctly', () => {
        const fn = () =>
            renderToString(<Slider filled showTicks showTickValues value={[0]} step={25} onInput={() => null} />);
        expect(fn).not.toThrowError();
    });
});
