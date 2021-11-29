import React, { forwardRef, useState } from 'react';
import { MaybeDateValue } from 'web-platform-alpha';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { DateTimeField, DateTimeRangeFieldProps } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

export const Size = () => {
    const [size, setSize] = useState<DateTimeRangeFieldProps['size']>('m');
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-ngh5s9">
                <Box size={size} setSize={setSize} />
                <DateTimeField view="default" size={size} value={value} onChange={(event) => setValue(event.value)} />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { size, setSize } = props;

    return (
        <div className="box-jh4t75" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={size}
                options={[
                    { value: 's', children: 'S' },
                    { value: 'm', children: 'M' },
                ]}
                onChange={(event) => setSize(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .container-ngh5s9 {
        text-align: center;
    }

    .box-jh4t75 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
