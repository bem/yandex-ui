import React, { forwardRef, useState } from 'react';
import { MaybeDateValue } from 'web-platform-alpha';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

export const FormatOptions = () => {
    const [formatOptions, setFormatOptions] = useState<'date' | 'time' | 'datetime'>('date');
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-jny2a3">
                <Box formatOptions={formatOptions} setFormatOptions={setFormatOptions} />
                <DateTimeField
                    formatOptions={formats[formatOptions]}
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.value)}
                />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { formatOptions, setFormatOptions } = props;

    return (
        <div className="box-op1m3e" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={formatOptions}
                options={[
                    { value: 'date', children: 'Date' },
                    { value: 'time', children: 'Time' },
                    { value: 'datetime', children: 'DateTime' },
                ]}
                onChange={(event) => setFormatOptions(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .container-jny2a3 {
        text-align: center;
    }

    .box-op1m3e {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
};

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
};

const DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
    ...DATE_FORMAT,
    ...TIME_FORMAT,
};

const formats = {
    date: DATE_FORMAT,
    time: TIME_FORMAT,
    datetime: DATE_TIME_FORMAT,
};
