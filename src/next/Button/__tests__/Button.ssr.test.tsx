/**
 * @jest-environment node
 */

import React from 'react';

import { Button } from '../Button';
import { createServerRender } from '../../../internal/testing';

describe('Button (ssr)', () => {
    const ssr = createServerRender();

    test('should render without errors', () => {
        const { html } = ssr(<Button>Button</Button>);
        expect(html).toBe(
            '<button type="button" class="Button2" data-reactroot=""><span class="Button2-Text">Button</span></button>',
        );
    });
});
