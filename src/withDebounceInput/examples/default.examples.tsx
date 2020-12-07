import React, { useState } from 'react';

import { withDebounceInput } from '@yandex-lego/components/withDebounceInput';
import { Textinput } from '@yandex-lego/components/Textinput/Textinput.bundle/desktop';

const DebouncedInput = withDebounceInput(Textinput);

export const Default = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={100}
                view="default"
                size="m"
            /> <br /> <br />

            <b>Value:</b> {value}
        </>
    );
};
