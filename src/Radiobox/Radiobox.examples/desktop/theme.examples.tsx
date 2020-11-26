import React, { useState } from 'react';

import { Radiobox, RadioOptionProps } from '@yandex-lego/components/Radiobox/Radiobox.bundle/desktop';

export const Theme = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_theme_normal: '}
            <Radiobox
                size="m"
                theme="normal"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <br />
            {'_theme_pseudo: '}
            <Radiobox
                size="m"
                theme="pseudo"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </>
    );
};
