/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Provider } from '../../Provider';
import { Textinput as TextinputDesktop } from '../desktop';
import { Textinput as TextinputTouchPad } from '../touch-pad';
import { Textinput as TextinputTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TextinputDesktop],
    ['touch-pad', TextinputTouchPad],
    ['touch-phone', TextinputTouchPhone],
] as const;

describe.each(platforms)('Textinput@%s (ssr)', (_platform, Textinput) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Provider>
                    <Textinput className="mix" />
                </Provider>,
            );
        }).not.toThrowError();
    });
});
