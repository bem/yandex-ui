import React, { useState } from 'react';
import { useDatePickerState, useDateFormatter } from 'web-platform-alpha';
import { MaybeDateValue, createDatePicker } from '@yandex-lego/components/next/DatePicker';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';
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
            const { value, addonAfter } = props;
            const dateFormatter = useDateFormatter({ day: 'numeric', month: 'long', year: 'numeric' });
            const formattedValue = isValidDate(value) ? dateFormatter.format(value) : undefined;

            return (
                <div style={{ display: 'flex', alignItems: 'center' }} tabIndex={0}>
                    <Text weight="medium" typography="body-long-m">
                        {formattedValue}
                    </Text>
                    &nbsp;
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
            <div className="container-fszf0fgy2">
                <DatePicker value={value} onChange={(event) => setValue(event.value)} />
            </div>
        </>
    );
};

const styles = `
    .container-fszf0fgy2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
