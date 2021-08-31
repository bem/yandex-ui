/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Select as SelectDesktop } from '../desktop/bundle';
import { Select as SelectTouchPad } from '../touch-pad/bundle';
import { Select as SelectTouchPhone } from '../touch-phone/bundle';

const platforms = [
    ['desktop', SelectDesktop],
    ['touch-pad', SelectTouchPad],
    ['touch-phone', SelectTouchPhone],
] as const;

describe.each(platforms)('Select@%s (ssr)', (_platform, Select) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Select options={[{ value: '1', content: 'Тест' }]} id="serverTemplateId" className="mix" />);
        }).not.toThrowError();
    });
});
