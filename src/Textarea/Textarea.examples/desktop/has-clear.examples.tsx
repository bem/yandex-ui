import React, { useState } from 'react';

import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const HasClear = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <Textarea
                hasClear
                size="m"
                view="default"
                value={value1}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValue1(event.target.value)}
                onClearClick={() => setValue1('')}
            />
            <Textarea
                hasClear
                size="m"
                theme="normal"
                value={value2}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValue2(event.target.value)}
                onClearClick={() => setValue2('')}
            />
        </>
    );
};
