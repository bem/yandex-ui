/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Modal as ModalDesktop } from '../desktop';
import { Modal as ModalTouchPad } from '../touch-phone';
import { Modal as ModalTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', ModalDesktop],
    ['touch-pad', ModalTouchPad],
    ['touch-phone', ModalTouchPhone],
] as const;

describe.each(platforms)('Modal@%s (ssr)', (_platform, Modal) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Modal className="mix">content</Modal>);
        }).not.toThrowError();
    });
});
