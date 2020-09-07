import React, { useState } from 'react';

import { Tumbler } from '../../Tumbler.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Size = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="s"
                    view="default"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    view="default"
                    checked={checked2}
                    onChange={() => setChecked2(!checked2)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="l"
                    view="default"
                    checked={checked3}
                    onChange={() => setChecked3(!checked3)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
        </>
    );
};

Size.story = {
    name: 'size',
};
