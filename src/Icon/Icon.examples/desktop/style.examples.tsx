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

export const Style = () => (
    <table cellSpacing={8}>
        <tr>
            <td>—</td>
            {glyphs.map((glyph: any) => (
                <td key={glyph}>
                    <Icon glyph={glyph} style={{ width: 16, height: 16 }} />
                </td>
            ))}
        </tr>
        <tr>
            <td>color: 'gray'</td>
            {glyphs.map((glyph: any) => (
                <td key={glyph}>
                    <Icon glyph={glyph} style={{ width: 16, height: 16, color: 'gray' }} />
                </td>
            ))}
        </tr>
        <tr>
            <td>color: '#ffb833'</td>
            {glyphs.map((glyph: any) => (
                <td key={glyph}>
                    <Icon glyph={glyph} style={{ width: 16, height: 16, color: '#ffb833' }} />
                </td>
            ))}
        </tr>
        <tr>
            <td>color: 'rgb(255,77,0)'</td>
            {glyphs.map((glyph: any) => (
                <td key={glyph}>
                    <Icon glyph={glyph} style={{ width: 16, height: 16, color: 'rgb(255,77,0)' }} />
                </td>
            ))}
        </tr>
    </table>
);
