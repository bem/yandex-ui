import React, { useState } from 'react';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Lines = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ fontFamily: 'var(--control-font-family)' }}>
            {'one:'}
            {['s', 'm'].map((size: any) => (
                <div key={size} style={{ padding: 4 }}>
                    <Checkbox
                        label="Однострочный checkbox с длинной подписью"
                        view="default"
                        size={size}
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                        lines="one"
                    />
                </div>
            ))}
            <br />
            {'multi:'}
            <div style={{ padding: 4 }}>
                {'Чекбоксы\u00a0\u00a0'}
                <Checkbox
                    label="выравниваются"
                    view="default"
                    size="s"
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    lines="multi"
                />
                {'\u00a0по базовой\u00a0\u00a0'}
                <Checkbox
                    label="линии"
                    view="default"
                    size="m"
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    lines="multi"
                />
                {'.'}
            </div>
        </div>
    );
};
