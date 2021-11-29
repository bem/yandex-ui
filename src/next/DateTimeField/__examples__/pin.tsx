import React, { forwardRef, useState } from 'react';
import { MaybeDateValue } from 'web-platform-alpha';
import { Select } from '@yandex-lego/components/Select/desktop/bundle';
import { DateTimeField, DateTimeFieldProps } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

export const Pin = () => {
    const [pin, setPin] = useState<DateTimeFieldProps['pin']>('brick-brick');
    const [value, setValue] = useState<MaybeDateValue>();

    return (
        <>
            <style>{styles}</style>
            <div className="container-nqo42me">
                <Box pin={pin} setPin={setPin} />
                <DateTimeField
                    view="default"
                    size="m"
                    pin={pin}
                    value={value}
                    onChange={(event) => setValue(event.value)}
                />
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { pin, setPin } = props;

    return (
        <div className="box-vg4hjd" ref={ref}>
            <Select
                size="s"
                view="default"
                value={pin}
                style={{ width: 150 }}
                options={[
                    { value: 'brick-brick', content: 'brick-brick' },
                    { value: 'brick-clear', content: 'brick-clear' },
                    { value: 'brick-round', content: 'brick-round' },
                    { value: 'clear-brick', content: 'clear-brick' },
                    { value: 'clear-clear', content: 'clear-clear' },
                    { value: 'clear-round', content: 'clear-round' },
                    { value: 'round-brick', content: 'round-brick' },
                    { value: 'round-clear', content: 'round-clear' },
                ]}
                onChange={(event) => setPin(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .container-nqo42me {
        text-align: center;
    }

    .box-vg4hjd {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        padding: 24px;
    }
`;
