import React, { useState } from 'react';

import { withDebounceInput } from '@yandex-lego/components/withDebounceInput';
import { Textinput } from '@yandex-lego/components/Textinput/Textinput.bundle/desktop';

const DebouncedInput = withDebounceInput(Textinput);

export const MinLength = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            Минимальная длина 4 символа
            <DebouncedInput
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                debounceTimeout={1000}
                minLength={4}
                view="default"
                size="m"
            /> <br />

            <b>Value 1:</b> {value1} <br /> <br />

            Минимальная длина 8 символов
            <DebouncedInput
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                debounceTimeout={1000}
                minLength={8}
                view="default"
                size="m"
            /> <br />

            <b>Value 2:</b> {value2}
        </>
    );
};
