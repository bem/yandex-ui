import React, { useState } from 'react';
import { DateRangeValue, DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const Readonly = () => {
    const [value, setValue] = useState<DateRangeValue>({
        start: new Date(2021, 10, 20),
        end: new Date(2021, 10, 24),
    });

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker readOnly value={value} onChange={(event) => setValue(event.value)} />
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
