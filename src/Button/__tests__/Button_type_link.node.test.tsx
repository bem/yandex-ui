/**
 * @jest-environment node
 */
import React from 'react';
import { compose } from '@bem-react/core';

import { createServerRender } from '../../internal/testing';
import { Button as ButtonDesktop } from '../desktop';
import { Button as ButtonTouchPad } from '../touch-pad';
import { Button as ButtonTouchPhone } from '../touch-phone';
import { withTypeLink } from '../_type/Button_type_link';

const platforms = [
    ['desktop', compose(withTypeLink)(ButtonDesktop)],
    ['touch-pad', compose(withTypeLink)(ButtonTouchPad)],
    ['touch-phone', compose(withTypeLink)(ButtonTouchPhone)],
] as const;

describe.each(platforms)('Button_type_link@%s (ssr)', (_platform, Button) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Button type="link" />);
        }).not.toThrowError();
    });
});
