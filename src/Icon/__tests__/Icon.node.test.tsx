/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Icon } from '../Icon';
import { withGlyphTypeArrow as withGlyph } from '../_glyph/Icon_glyph_type-arrow';

const IconGlyph = withGlyph(Icon);

describe('Icon (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<IconGlyph glyph="type-arrow" className="mix" />);
        }).not.toThrowError();
    });
});
