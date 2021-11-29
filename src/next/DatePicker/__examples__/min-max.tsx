import React, { useState } from 'react';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';

export const MinMax = () => {
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DatePicker
                    value={value}
                    onChange={(event) => setValue(event.value)}
                    min={new Date(2021, 10, 20)}
                    max={new Date(2021, 11, 25)}
                />
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
