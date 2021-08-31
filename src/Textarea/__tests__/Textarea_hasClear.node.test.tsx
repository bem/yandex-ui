/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Textarea as TextareaDesktop, withHasClear as withHasClearDesktop } from '../desktop';
import { Textarea as TextareaTouchPad, withHasClear as withHasClearTouchPad } from '../touch-pad';
import { Textarea as TextareaTouchPhone, withHasClear as withHasClearTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextareaDesktop)],
    ['touch-pad', withHasClearTouchPad(TextareaTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextareaTouchPhone)],
] as const;

describe.each(platforms)('Textarea_hasClear@%s', (_platform, Textarea) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Textarea hasClear />);
        }).not.toThrowError();
    });
});
