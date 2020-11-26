import React, { useState } from 'react';

import { Radiobox, RadioOptionProps } from '@yandex-lego/components/Radiobox/Radiobox.bundle/desktop';

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_size_m: '}
            <Radiobox
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <br />
            {'_size_s: '}
            <Radiobox
                size="s"
                view="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </>
    );
};
