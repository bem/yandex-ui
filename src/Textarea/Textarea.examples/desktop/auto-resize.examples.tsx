import React, { useState } from 'react';

import { TextareaWithAutoResize } from '@yandex-lego/components/Textarea/desktop/bundle';

export const AutoResize = () => {
    const [value, setValue] = useState('Continue typing text until it will fill entire textarea. ' +
        'Feel free to unleash your keyboard shortcuts Ninja skills like a: CMD+A, CMD+C, CMD+V. ' +
        'Continue typing more text like these here ');

    return (
        <>
            <TextareaWithAutoResize
                hasClear
                size="m"
                view="default"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)}
            />
        </>
    );
};
