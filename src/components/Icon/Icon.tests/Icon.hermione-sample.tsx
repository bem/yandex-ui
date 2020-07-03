import React from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage';
import '../../../internal/components/BPage/BPage@desktop.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { Icon as IconBase } from '../Icon';
import { withTypeCross } from '../_type/Icon_type_cross';
import { withTypeCrossWebsearch } from '../_type/Icon_type_cross-websearch';
import { withTypeClose } from '../_type/Icon_type_close';
import { withTypeArrow } from '../_type/Icon_type_arrow';
import { withGlyphTypeCross } from '../_glyph/Icon_glyph_type-cross';
import { withGlyphTypeCrossWebsearch } from '../_glyph/Icon_glyph_type-cross-websearch';
import { withGlyphTypeClose } from '../_glyph/Icon_glyph_type-close';
import { withGlyphTypeFilter } from '../_glyph/Icon_glyph_type-filter';
import { withGlyphXSign } from '../_glyph/Icon_glyph_x-sign';
import { withGlyphTypeArrow } from '../_glyph/Icon_glyph_type-arrow';

import './Hermione.components/Icon/Icon.css';

const Icon = compose(
    composeU(withTypeCross, withTypeCrossWebsearch, withTypeClose, withTypeArrow),
    composeU(
        withGlyphTypeCross,
        withGlyphTypeCrossWebsearch,
        withGlyphTypeClose,
        withGlyphTypeFilter,
        withGlyphXSign,
        withGlyphTypeArrow,
    ),
)(IconBase);

render(
    <BPage>
        <Hermione className="Static" style={{ margin: 16 }}>
            <Icon type="cross" />
            <Icon type="cross" size="xs" />
            <Icon type="cross-websearch" />
            <Icon type="close" />
            <Icon type="arrow" />
            <Icon type="arrow" direction="left" />
            <Icon type="arrow" direction="top" />
            <Icon type="arrow" direction="right" />
            <Icon type="arrow" direction="bottom" />
            <Icon type="arrow" size="xs" />
            <Icon type="arrow" direction="left" size="xs" />
            <Icon type="arrow" direction="top" size="xs" />
            <Icon type="arrow" direction="right" size="xs" />
            <Icon type="arrow" direction="bottom" size="xs" />
        </Hermione>
        <Hermione className="Baseline" style={{ margin: 16 }}>
            {'Крестик: '}
            <Icon type="close" />
            {'; Стрелка: '}
            <Icon type="arrow" />
            {'; Влево: '}
            <Icon type="arrow" direction="left" />
            {'; Вверх: '}
            <Icon type="arrow" direction="top" />
            {'; Вправо: '}
            <Icon type="arrow" direction="right" />
            {'; Вниз: '}
            <Icon type="arrow" direction="bottom" />
        </Hermione>
        <Hermione className="Glyphs" style={{ margin: 16 }}>
            <Icon glyph="type-cross" />
            <Icon glyph="type-cross" size="xs" />
            <Icon glyph="type-cross-websearch" />
            <Icon glyph="type-close" />
            <Icon glyph="type-arrow" />
            <Icon glyph="type-arrow" direction="left" />
            <Icon glyph="type-arrow" direction="top" />
            <Icon glyph="type-arrow" direction="right" />
            <Icon glyph="type-arrow" direction="bottom" />
            <Icon glyph="type-arrow" size="xs" />
            <Icon glyph="type-arrow" direction="left" size="xs" />
            <Icon glyph="type-arrow" direction="top" size="xs" />
            <Icon glyph="type-arrow" direction="right" size="xs" />
            <Icon glyph="type-arrow" direction="bottom" size="xs" />
        </Hermione>
        <Hermione className="GlyphsBaseline" style={{ margin: 16 }}>
            {'Крестик: '}
            <Icon glyph="type-close" />
            {'; Стрелка: '}
            <Icon glyph="type-arrow" />
            {'; Влево: '}
            <Icon glyph="type-arrow" direction="left" />
            {'; Вверх: '}
            <Icon glyph="type-arrow" direction="top" />
            {'; Вправо: '}
            <Icon glyph="type-arrow" direction="right" />
            {'; Вниз: '}
            <Icon glyph="type-arrow" direction="bottom" />
        </Hermione>
        <Hermione className="GlyphsOther" style={{ margin: 16 }}>
            {'filter: '}
            <Icon glyph="type-filter" />
            {'; xsign:xs: '}
            <Icon glyph="x-sign" size="xs" />
            {'; s: '}
            <Icon glyph="x-sign" size="s" />
            {'; m: '}
            <Icon glyph="x-sign" size="m" />
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
