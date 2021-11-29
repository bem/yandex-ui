import React, { forwardRef, useState } from 'react';
import { MaybeDateValue, DateRangeValue } from 'web-platform-alpha';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { DateTimeField, DateTimeRangeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

export const Types = () => {
    const [type, setType] = useState<'single' | 'range'>('single');
    const Component = components[type];

    return (
        <>
            <style>{styles}</style>
            <div className="container-rej4js">
                <Box value={type} setValue={setType} />
                <Component />
            </div>
        </>
    );
};

const Single = () => {
    const [value, setValue] = useState<MaybeDateValue>(new Date(2021, 8, 3));

    return <DateTimeField view="default" size="m" value={value} onChange={(event) => setValue(event.value)} />;
};

const Range = () => {
    const [value, setValue] = useState<DateRangeValue>({
        start: new Date(2021, 8, 1),
        end: new Date(2021, 8, 20),
    });

    return <DateTimeRangeField view="default" size="m" value={value} onChange={(event) => setValue(event.value)} />;
};

const components = {
    single: Single,
    range: Range,
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { value, setValue } = props;

    return (
        <div className="box-dhj3y6" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={value}
                options={[
                    { value: 'single', children: 'Single' },
                    { value: 'range', children: 'Range' },
                ]}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .container-rej4js {
        text-align: center;
    }

    .box-dhj3y6 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
