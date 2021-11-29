import React, { useState } from 'react';
import { DateRangeValue, DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const Size = () => {
    const [value, setValue] = useState<DateRangeValue>({
        start: new Date(2021, 10, 20),
        end: new Date(2021, 10, 24),
    });

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker size="s" value={value} onChange={(event) => setValue(event.value)} />
                <DateRangePicker size="m" value={value} onChange={(event) => setValue(event.value)} />
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

    .container-rc1jby .DatePicker {
        margin-right: 16px;
    }
`;
