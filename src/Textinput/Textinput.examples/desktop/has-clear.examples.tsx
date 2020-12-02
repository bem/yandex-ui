import React, { useState } from 'react';

import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const HasClear = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    view="default"
                    value={value1}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue1(event.target.value)}
                    onClearClick={() => setValue1('')}
                />
            </div>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    theme="normal"
                    value={value2}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue2(event.target.value)}
                    onClearClick={() => setValue2('')}
                />
            </div>
        </>
    );
};
