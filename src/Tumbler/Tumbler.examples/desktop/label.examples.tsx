import React, { useState } from 'react';

import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';

export const Label = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    view="default"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                    labelBefore="labelBefore"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    view="default"
                    checked={checked2}
                    onChange={() => setChecked2(!checked2)}
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    view="default"
                    checked={checked3}
                    onChange={() => setChecked3(!checked3)}
                    labelBefore={
                        <svg aria-label="labelBefore" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.5 7.003a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H12v-2a4 4 0 0 0-8 0v2h-.5zm2.5-2a2 2 0 1 1 4 0V7H6V5.003z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                    labelAfter={
                        <svg aria-label="labelAfter" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 5.003a1 1 0 0 0 1-1 4 4 0 0 0-8 0v3h-.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H6v-3a2 2 0 1 1 4 0 1 1 0 0 0 1 1z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                />
            </div>
        </>
    );
};
