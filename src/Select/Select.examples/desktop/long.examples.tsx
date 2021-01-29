import React, { useState } from 'react';
import { Select } from '@yandex-lego/components/Select/desktop/bundle';

const options = [...new Array(40)].map((_, idx) => ({ value: idx, content: idx }));

export const Long = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <Select
                view="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
            <Select
                view="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
                maxHeight={200}
            />
        </>
    );
};
