import React, { useState } from 'react';
import { useDatePickerState, useDateFormatter } from 'web-platform-alpha';
import { MaybeDateValue, createDatePicker } from '@yandex-lego/components/next/DatePicker';
import { Calendar } from '@yandex-lego/components/next/Calendar/desktop/bundle';

function isValidDate(date: unknown): date is Date {
    return date instanceof Date;
}

const DatePicker = createDatePicker({
    hooks: {
        useDatePickerState: useDatePickerState,
    },
    slots: {
        Calendar: (props) => {
            return <Calendar {...props} size="s" view="brand" />;
        },
        DateField: (props) => {
            const { value, onChange, addonAfter } = props;
            const dateFormatter = useDateFormatter({});
            const formattedValue = isValidDate(value) ? dateFormatter.format(value) : undefined;

            return (
                <div style={{ display: 'flex' }}>
                    <input
                        value={formattedValue}
                        onChange={(event) => onChange?.({ value: new Date(event.target.value) })}
                    />
                    {addonAfter}
                </div>
            );
        },
    },
});

export const CustomComponents = () => {
    const [value, setValue] = useState<MaybeDateValue>(new Date(2021, 10, 20));

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <DatePicker value={value} onChange={(event) => setValue(event.value)} />
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
