import React from 'react';
import { DateRangePicker } from '@yandex-lego/components/next/DatePicker';

export const Disabled = () => {
    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DateRangePicker disabled />
                <DateRangePicker value={{ start: new Date(2021, 10, 20), end: new Date(2021, 10, 24) }} disabled />
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
