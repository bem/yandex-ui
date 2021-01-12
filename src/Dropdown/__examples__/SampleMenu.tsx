import React from 'react';

import { ItemSimple, Menu } from '@yandex-lego/components/Menu/desktop/bundle';

export const SampleMenu = () => (
    <Menu
        size="m"
        items={[0, 1, 2, 3].map<ItemSimple>((_, index) => ({
            value: index,
            content: `Label ${index}`,
        }))}
    />
);
