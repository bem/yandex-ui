import React, { forwardRef, useState } from 'react';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { Calendar, CalendarProps } from '@yandex-lego/components/next/Calendar/desktop/bundle';

export const View = () => {
    const [view, setView] = useState<CalendarProps['view']>('default');
    const [value, setValue] = useState<Date | undefined>();

    return (
        <>
            <style>{styles}</style>
            <div>
                <Box value={view} setValue={setView} />
                <Calendar view={view} size="s" value={value} onChange={setValue} />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { value, setValue } = props;

    return (
        <div className="box-aef327" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={value}
                options={[
                    { value: 'default', children: 'Default' },
                    { value: 'brand', children: 'Brand' },
                ]}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .box-aef327 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
