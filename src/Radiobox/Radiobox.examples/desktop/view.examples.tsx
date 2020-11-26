import React, { useState } from 'react';

import { Radiobox, RadioOptionProps } from '@yandex-lego/components/Radiobox/Radiobox.bundle/desktop';

export const View = () => {
    const [value, setValue] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_view_default: '}
            <Radiobox
                size="m"
                view="default"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
            <br />
            {'_view_outline: '}
            <Radiobox
                size="m"
                view="outline"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </>
    );
};
