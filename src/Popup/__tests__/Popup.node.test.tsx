/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Popup as PopupDesktop } from '../desktop';
import { Popup as PopupTouchPad } from '../touch-phone';
import { Popup as PopupTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', PopupDesktop],
    ['touch-pad', PopupTouchPad],
    ['touch-phone', PopupTouchPhone],
] as const;

describe.each(platforms)('Popup@%s (ssr)', (_platform, Popup) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Popup hasTail className="mix">
                    content
                </Popup>,
            );
        }).not.toThrowError();
    });
});
