/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Provider } from '../../Provider';
import { Textinput as TextinputDesktop, withHasClear as withHasClearDesktop } from '../desktop';
import { Textinput as TextinputTouchPad, withHasClear as withHasClearTouchPad } from '../touch-pad';
import { Textinput as TextinputTouchPhone, withHasClear as withHasClearTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextinputDesktop)],
    ['touch-pad', withHasClearTouchPad(TextinputTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextinputTouchPhone)],
] as const;

describe.each(platforms)('Textinput_hasClear@%s (ssr)', (_platform, Textinput) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Provider>
                    <Textinput hasClear />
                </Provider>,
            );
        }).not.toThrowError();
    });
});
