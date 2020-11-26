import React, { useState } from 'react';

import { RadioButton } from '@yandex-lego/components/RadioButton/RadioButton.bundle/desktop';

export const View = () => {
    const [value, setValue] = useState('a');

    const options = [
        { value: 'a', children: 'Option A' },
        { value: 'b', children: 'Option B' },
        { value: 'c', children: 'Option C' },
    ];

    return (
        <RadioButton
            size="m"
            view="default"
            value={value}
            options={options}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};
