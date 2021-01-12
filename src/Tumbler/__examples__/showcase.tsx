import React, { useState } from 'react';
import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';

export const Showcase = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);
    const [checked5, setChecked5] = useState(true);
    const [checked6, setChecked6] = useState(true);

    return (
        <div style={{ backgroundColor: 'var(--color-bg-default)' }}>
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

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="s"
                    view="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="m"
                    view="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="l"
                    view="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="s"
                    view="default"
                    checked={checked4}
                    onChange={() => setChecked4(!checked4)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    view="default"
                    checked={checked5}
                    onChange={() => setChecked5(!checked5)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="l"
                    view="default"
                    checked={checked6}
                    onChange={() => setChecked6(!checked6)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="s"
                    view="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="m"
                    view="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="l"
                    view="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
        </div>
    );
};
