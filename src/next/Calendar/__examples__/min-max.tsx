import React, { useState } from 'react';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Calendar } from '@yandex-lego/components/next/Calendar/desktop/bundle';

export const MinMax = () => {
    const [value, setValue] = useState<Date | undefined>(new Date(2021, 9, 10));
    const [min, setMin] = useState<string>('2021-10-05');
    const [max, setMax] = useState<string>('2021-12-28');

    const minDate = min ? new Date(Date.parse(min)) : undefined;
    const maxDate = max ? new Date(Date.parse(max)) : undefined;

    return (
        <>
            <style>{styles}</style>
            <div className="grid-a1g3dg">
                <Box min={min} max={max} setMin={setMin} setMax={setMax} />
                <Calendar view="default" size="s" min={minDate} max={maxDate} value={value} onChange={setValue} />
            </div>
        </>
    );
};

const Box = (props: any) => {
    const { min, setMin, max, setMax } = props;

    return (
        <div className="box-dk23xd">
            <div style={{ width: '180px' }}>
                <div style={{ marginBottom: 12 }}>
                    <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 8 }}>
                        Минимальное значение
                    </Text>

                    <Textinput
                        value={min}
                        onChange={(event) => setMin(event.target.value)}
                        size="s"
                        view="default"
                        type="date"
                    />
                </div>

                <div>
                    <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 8 }}>
                        Максимальное значение
                    </Text>

                    <Textinput
                        value={max}
                        onChange={(event) => setMax(event.target.value)}
                        size="s"
                        view="default"
                        type="date"
                    />
                </div>
            </div>
        </div>
    );
};

const styles = `
    .grid-a1g3dg {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    .box-dk23xd {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
