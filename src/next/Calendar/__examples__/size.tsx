import React, { forwardRef, useState } from 'react';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { Calendar, CalendarProps } from '@yandex-lego/components/next/Calendar/desktop/bundle';

export const Size = () => {
    const [size, setSize] = useState<CalendarProps['size']>('m');
    const [value, setValue] = useState<Date | undefined>();

    return (
        <>
            <style>{styles}</style>
            <div>
                <Box size={size} setSize={setSize} />
                <Calendar view="default" size={size} value={value} onChange={(event) => setValue(event.value)} />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { size, setSize } = props;

    return (
        <div className="box-ref326" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={size}
                options={[
                    { value: 's', children: 'S' },
                    { value: 'm', children: 'M' },
                    { value: 'l', children: 'L' },
                ]}
                onChange={(event) => setSize(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .box-ref326 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
