import React, { useState } from 'react';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Theme = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            {['normal', 'pseudo'].map((theme: any) => (
                <div
                    key={theme}
                    style={{
                        padding: 4,
                        border: 'dashed #b0b0af 1px',
                        background: 'grey',
                    }}
                >
                    <Checkbox
                        label="checkbox"
                        theme={theme}
                        size="m"
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                    />
                </div>
            ))}
        </>
    );
};
