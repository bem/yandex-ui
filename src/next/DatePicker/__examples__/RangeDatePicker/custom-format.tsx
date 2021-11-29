import React, { useState } from 'react';
import { DateRangeValue, DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const CustomFormat = () => {
    const [value, setValue] = useState<DateRangeValue>({ start: new Date(2021, 10, 20, 10, 45), end: null });

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker
                    value={value}
                    onChange={(event) => setValue(event.value)}
                    formatOptions={{
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }}
                />
                <DateRangePicker
                    value={value}
                    onChange={(event) => setValue(event.value)}
                    formatOptions={{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }}
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

    .container-rc1jby .DatePicker {
        margin-right: 16px;
    }
`;
