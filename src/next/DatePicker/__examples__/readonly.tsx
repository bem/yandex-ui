import React, { useState } from 'react';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';

export const Readonly = () => {
    const [value, setValue] = useState<MaybeDateValue>(new Date(2021, 10, 20));

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DatePicker readOnly value={value} onChange={(event) => setValue(event.value)} />
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
