import React, { forwardRef, useState } from 'react';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import {
    Calendar,
    MultipleCalendar,
    RangeCalendar,
    CalendarBaseProps,
    RangeValue,
} from '@yandex-lego/components/next/Calendar/desktop/bundle';

export const Types = () => {
    const [type, setType] = useState<'single' | 'multiple' | 'range'>('single');
    const Component = components[type];

    return (
        <>
            <style>{styles}</style>
            <div>
                <Box value={type} setValue={setType} />
                <Component />
            </div>
        </>
    );
};

const Single = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<Date>(new Date(2021, 8, 3));

    return <Calendar view="default" size="s" value={value} onChange={(event) => setValue(event.value)} {...props} />;
};

const Multiple = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<Date[]>([new Date(2021, 8, 3), new Date(2021, 8, 4)]);

    return (
        <MultipleCalendar
            view="default"
            size="s"
            value={value}
            onChange={(event) => setValue(event.value)}
            {...props}
        />
    );
};

const Range = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<RangeValue<Date>>({
        start: new Date(2021, 8, 1),
        end: new Date(2021, 8, 20),
    });

    return (
        <RangeCalendar view="default" size="s" value={value} onChange={(event) => setValue(event.value)} {...props} />
    );
};

const components = {
    single: Single,
    multiple: Multiple,
    range: Range,
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { value, setValue } = props;

    return (
        <div className="box-def326" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={value}
                options={[
                    { value: 'single', children: 'Single' },
                    { value: 'multiple', children: 'Multiple' },
                    { value: 'range', children: 'Range' },
                ]}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .box-def326 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
