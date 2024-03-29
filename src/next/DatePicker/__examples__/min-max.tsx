import React, { useState } from 'react';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';

export const MinMax = () => {
    const [value, setValue] = useState<MaybeDateValue>(new Date(2021, 9, 10));
    const [min, setMin] = useState<Date | null>(new Date(2021, 9, 5));
    const [max, setMax] = useState<Date | null>(new Date(2021, 11, 28));

    return (
        <>
            <style>{styles}</style>
            <div className="grid-wu9cx2ado">
                <Box min={min} max={max} setMin={setMin} setMax={setMax} />
                <DatePicker
                    view="default"
                    size="s"
                    min={min ?? undefined}
                    max={max ?? undefined}
                    value={value}
                    onChange={(event) => setValue(event.value)}
                />
            </div>
        </>
    );
};

const Box = (props: any) => {
    const { min, setMin, max, setMax } = props;

    return (
        <div className="box-mhwafoc2j">
            <div style={{ width: '180px' }}>
                <div style={{ marginBottom: 12 }}>
                    <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 8 }}>
                        Минимальное значение
                    </Text>

                    <DateTimeField view="default" size="s" value={min} onChange={(event) => setMin(event.value)} />
                </div>

                <div>
                    <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 8 }}>
                        Максимальное значение
                    </Text>

                    <DateTimeField view="default" size="s" value={max} onChange={(event) => setMax(event.value)} />
                </div>
            </div>
        </div>
    );
};

const styles = `
    .grid-wu9cx2ado {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    .box-mhwafoc2j {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
