import React from 'react';

import { Icon } from '../../Icon.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const directions = ['left', 'top', 'right', 'bottom'];
const types = ['arrow', 'close', 'cross', 'cross-websearch', 'filter'];
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

export const Type = () => (
    <table cellSpacing={5}>
        {types.map((type: any) => (
            <tr key={type}>
                <td>
                    <Icon type={type} style={{ width: 16, height: 16 }} />
                </td>
                <td>_type_{type}</td>
            </tr>
        ))}
    </table>
);

Type.story = {
    name: 'type',
};

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

Glyph.story = {
    name: 'glyph',
};

export const Direction = () => (
    <table cellSpacing={5} style={{ textAlign: 'center' }}>
        <tr>
            <td />
            <td>left</td>
            <td>top</td>
            <td>right</td>
            <td>bottom</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_type</td>
            {directions.map((direction: any) => (
                <td key={direction} style={{ width: 35 }}>
                    <Icon type="arrow" direction={direction} style={{ width: 16 }} />
                </td>
            ))}
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_glyph</td>
            {directions.map((direction: any) => (
                <td key={direction}>
                    <Icon glyph="type-arrow" direction={direction} />
                </td>
            ))}
        </tr>
    </table>
);

Direction.story = {
    name: 'direction',
};

export const Size = () => (
    <table cellSpacing={5} style={{ textAlign: 'center' }}>
        <tr>
            <td />
            <td>xs</td>
            <td>—</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_type_arrow</td>
            <td>
                <Icon type="arrow" size="xs" style={{ width: 16, height: 16 }} />
            </td>
            <td>
                <Icon type="arrow" style={{ width: 16, height: 16 }} />
            </td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_glyph_type-arrow</td>
            <td>
                <Icon glyph="type-arrow" size="xs" />
            </td>
            <td>
                <Icon glyph="type-arrow" />
            </td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_type_cross</td>
            <td>
                <Icon type="cross" size="xs" style={{ width: 16, height: 16 }} />
            </td>
            <td>
                <Icon type="cross" style={{ width: 16, height: 16 }} />
            </td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>_glyph_type-cross</td>
            <td>
                <Icon glyph="type-cross" size="xs" />
            </td>
            <td>
                <Icon glyph="type-cross" />
            </td>
        </tr>
    </table>
);

Size.story = {
    name: 'size',
};

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

Style.story = {
    name: 'style',
};
