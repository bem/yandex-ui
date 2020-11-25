import React from 'react';

import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

const glyphs = [
    'carets-v',
    'type-arrow',
    'type-check',
    'type-close',
    'type-cross',
    'type-cross-websearch',
    'type-filter',
    'type-indeterminate',
    'type-tick',
    'x-sign',
];

export const Glyph = () => (
    <table cellSpacing={5}>
        {glyphs.map((glyph: any) => (
            <tr key={glyph}>
                <td>
                    <Icon glyph={glyph} style={{ width: 16, height: 16 }} />
                </td>
                <td>_glyph_{glyph}</td>
            </tr>
        ))}
    </table>
);
