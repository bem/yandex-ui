import React from 'react';

import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

const directions = ['left', 'top', 'right', 'bottom'];

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
