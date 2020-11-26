import React, { useState } from 'react';

import { RadioButton } from '@yandex-lego/components/RadioButton/RadioButton.bundle/desktop';

export const Size = () => {
    const [valueS, setValueS] = useState('a');
    const [valueM, setValueM] = useState('a');
    const [valueL, setValueL] = useState('a');

    const options = [
        { value: 'a', children: 'Option A' },
        { value: 'b', children: 'Option B' },
        { value: 'c', children: 'Option C' },
    ];

    return (
        <>
            <RadioButton
                size="s"
                view="default"
                value={valueS}
                options={options}
                onChange={(event) => setValueS(event.target.value)}
            />
            <br />
            <br />
            <RadioButton
                size="m"
                view="default"
                value={valueM}
                options={options}
                onChange={(event) => setValueM(event.target.value)}
            />
            <br />
            <br />
            <RadioButton
                size="l"
                view="default"
                value={valueL}
                options={options}
                onChange={(event) => setValueL(event.target.value)}
            />
        </>
    );
};
