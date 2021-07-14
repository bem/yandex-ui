/**
 * @jest-environment node
 */

import React from 'react';

import { createServerRender } from '../../../internal/testing';
import { Text } from '../desktop/bundle';

describe('Text@next (ssr) ', () => {
    const ssr = createServerRender();

    test('should render correctly', () => {
        const { html } = ssr(<Text className="mix">text</Text>);

        expect(html).toBe('<span class="Text Text_weight_regular Text_color_primary mix">text</span>');
    });
});
