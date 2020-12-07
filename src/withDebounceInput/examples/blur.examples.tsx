import React, { useState } from 'react';

import { withDebounceInput } from '@yandex-lego/components/withDebounceInput';
import { Textinput } from '@yandex-lego/components/Textinput/Textinput.bundle/desktop';

const DebouncedInput = withDebounceInput(Textinput);

export const Blur = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={1000}
                view="default"
                size="m"
                forceNotifyOnBlur
            /><br /> <br />

            <b>Value:</b> {value}
        </>
    );
};
