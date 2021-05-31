import React from 'react';
import { Icon } from '@yandex-lego/components/Icon/bundle';

const types = ['arrow', 'close', 'cross', 'cross-websearch', 'filter'];

export const Type = () => (
    <table cellSpacing={5}>
        <tbody>
            {types.map((type: any) => (
                <tr key={type}>
                    <td>
                        <Icon type={type} style={{ width: 16, height: 16 }} />
                    </td>
                    <td>_type_{type}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
