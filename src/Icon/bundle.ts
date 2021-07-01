import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Icon as IconCommon } from './Icon';
// _glyph
import { withGlyphCaretsV } from './_glyph/Icon_glyph_carets-v';
import { withGlyphTypeArrow } from './_glyph/Icon_glyph_type-arrow';
import { withGlyphTypeCheck } from './_glyph/Icon_glyph_type-check';
import { withGlyphTypeClose } from './_glyph/Icon_glyph_type-close';
import { withGlyphTypeCross } from './_glyph/Icon_glyph_type-cross';
import { withGlyphTypeCrossWebsearch } from './_glyph/Icon_glyph_type-cross-websearch';
import { withGlyphTypeFilter } from './_glyph/Icon_glyph_type-filter';
import { withGlyphTypeIndeterminate } from './_glyph/Icon_glyph_type-indeterminate';
import { withGlyphTypeTick } from './_glyph/Icon_glyph_type-tick';
import { withGlyphXSign } from './_glyph/Icon_glyph_x-sign';
// _type
import { withTypeArrow } from './_type/Icon_type_arrow';
import { withTypeClose } from './_type/Icon_type_close';
import { withTypeCross } from './_type/Icon_type_cross';
import { withTypeCrossWebsearch } from './_type/Icon_type_cross-websearch';
import { withTypeFilter } from './_type/Icon_type_filter';

export * from './Icon';

export const Icon = compose(
    composeU(
        composeU(
            withGlyphCaretsV,
            withGlyphTypeArrow,
            withGlyphTypeCheck,
            withGlyphTypeClose,
            withGlyphTypeCross,
            withGlyphTypeCrossWebsearch,
            withGlyphTypeFilter,
        ),
        withGlyphTypeIndeterminate,
        withGlyphTypeTick,
        withGlyphXSign,
    ),
    composeU(withTypeArrow, withTypeClose, withTypeCross, withTypeCrossWebsearch, withTypeFilter),
)(IconCommon);

export type IIconProps = ExtractProps<typeof Icon>;
