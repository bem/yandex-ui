import React, { useState } from 'react';
import { DateRangeValue, DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const Placeholder = () => {
    const [value, setValue] = useState<DateRangeValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker
                    value={value}
                    onChange={(event) => setValue(event.value)}
                    placeholder={new Date(2021, 10, 20)}
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
