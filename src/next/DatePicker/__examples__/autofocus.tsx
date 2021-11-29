import React, { useState } from 'react';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';

export const Autofocus = () => {
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DatePicker autoFocus value={value} onChange={(event) => setValue(event.value)} />
            </div>
        </>
    );
};

const styles = `
    .container-rc1jby {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
`;
