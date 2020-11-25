import React from 'react';

import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

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
