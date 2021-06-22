import React, { useState } from 'react';
import { Menu, MixedItem } from '@yandex-lego/components/Menu/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const items: MixedItem[] = [
    { content: 'Black (ungrouped)', value: '0' },
    {
        title: 'Blueish',
        items: [
            { content: 'AliceBlue', value: '1' },
            { content: 'Aqua', value: '2' },
            { content: 'Aquamarine', value: '3' },
        ],
    },
    { content: 'Gray (ungrouped)', value: '4', disabled: true },
    {
        title: 'Whiteish',
        items: [
            { content: 'AntiqueWhite', value: '5' },
            { content: 'Azure', value: '6' },
            { content: 'Beige', value: '7' },
        ],
    },
    { content: 'White (ungrouped)', value: '8' },
];

export const DefaultHermioneCase = () => {
    const { size = 'm', view = 'default', theme, disabled, width } = useParams();
    const [value, setValue] = useState([]);

    return (
        <Menu
            width={width}
            data-testid="menu"
            disabled={disabled}
            view={view}
            theme={theme}
            size={size}
            items={items}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};
