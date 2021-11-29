import React, { useState } from 'react';
import { LocaleProvider } from 'web-platform-alpha';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';

export const Rtl = () => {
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <LocaleProvider locale="he">
                <div className="container-rc1jby" dir="rtl">
                    <DatePicker value={value} onChange={(event) => setValue(event.value)} />
                </div>
            </LocaleProvider>
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
