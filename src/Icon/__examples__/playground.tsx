import React from 'react';
import { select, text, object } from '@storybook/addon-knobs';
import { Icon } from '@yandex-lego/components/Icon/bundle';

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

export const Playground = () => {
    const type = select('type', types, 'arrow') as any;
    const glyph = select('glyph', glyphs, 'type-arrow') as any;
    const url = text('url', 'https://yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png');
    const style = object('style', { width: 16, hight: 16 });

    return (
        <table cellSpacing={5} style={{ textAlign: 'center' }}>
            <tr>
                <td>_type</td>
                <td>_glyph</td>
                <td>url</td>
            </tr>
            <tr>
                <td>
                    <Icon type={type} style={style} />
                </td>
                <td>
                    <Icon glyph={glyph} style={style} />
                </td>
                <td>
                    <Icon url={url} style={{ width: 16 }} />
                </td>
            </tr>
        </table>
    );
};
