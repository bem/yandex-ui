/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Checkbox as CheckboxDesktop } from '../desktop';
import { Checkbox as CheckboxTouchPad } from '../touch-pad';
import { Checkbox as CheckboxTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', CheckboxDesktop],
    ['touch-pad', CheckboxTouchPad],
    ['touch-phone', CheckboxTouchPhone],
] as const;

describe.each(platforms)('Checkbox@%s (ssr)', (_platform, Checkbox) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Checkbox id="serverTemplateId" className="mix" view="default" />);
        }).not.toThrowError();
    });
});
