import React, { useState } from 'react';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Size = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <>
            <Checkbox
                label="Label"
                size="m"
                view="default"
                onChange={() => setChecked1(!checked1)}
                checked={checked1}
            />
            <Checkbox
                label="Label"
                size="s"
                view="default"
                onChange={() => setChecked2(!checked2)}
                checked={checked2}
            />
        </>
    );
};
