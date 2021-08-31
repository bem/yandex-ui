/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Textarea as TextareaDesktop } from '../desktop';
import { Textarea as TextareaTouchPad } from '../touch-pad';
import { Textarea as TextareaTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TextareaDesktop],
    ['touch-pad', TextareaTouchPad],
    ['touch-phone', TextareaTouchPhone],
] as const;

describe.each(platforms)('Textarea@%s (ssr)', (_platform, Textarea) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Textarea className="mix" />);
        }).not.toThrowError();
    });
});
