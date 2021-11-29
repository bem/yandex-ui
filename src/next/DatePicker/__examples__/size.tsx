import React, { forwardRef, useState } from 'react';
import { MaybeDateValue, DatePicker, DatePickerProps } from '@yandex-lego/components/next/DatePicker';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';

export const Size = () => {
    const [size, setSize] = useState<DatePickerProps['size']>('m');
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-rc1jby">
                <Box size={size} setSize={setSize} />
                <DatePicker view="default" size={size} value={value} onChange={(event) => setValue(event.value)} />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { size, setSize } = props;

    return (
        <div className="box-rc1jby" ref={ref}>
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
    .container-rc1jby {
        text-align: center;
    }

    .box-rc1jby {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
