import React, { useState } from 'react';
import { DateRangeValue, DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const Autofocus = () => {
    const [value, setValue] = useState<DateRangeValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker autoFocus value={value} onChange={(event) => setValue(event.value)} />
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
