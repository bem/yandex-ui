import React, { useState } from 'react';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Indeterminate = () => {
    const [indeterminate1, setIndeterminate1] = useState(false);
    const [indeterminate2, setIndeterminate2] = useState(false);

    return (
        <>
            <div style={{ padding: 4 }}>
                <Checkbox
                    label="Label"
                    theme="normal"
                    size="m"
                    onChange={() => setIndeterminate1(!indeterminate1)}
                    indeterminate={indeterminate1}
                />
            </div>
            <div style={{ padding: 4 }}>
                <Checkbox
                    label="Label"
                    size="m"
                    view="default"
                    onChange={() => setIndeterminate2(!indeterminate2)}
                    indeterminate={indeterminate2}
                />
            </div>
        </>
    );
};
