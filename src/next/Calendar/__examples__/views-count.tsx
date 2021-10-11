import React, { forwardRef, useState } from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';
import { RangeCalendar, RangeValue } from '@yandex-lego/components/next/Calendar/desktop/bundle';

export const ViewsCount = () => {
    const [viewsCount, setViewsCount] = useState<number>(2);
    const [value, setValue] = useState<RangeValue<Date>>();

    return (
        <>
            <style>{styles}</style>
            <div>
                <Box value={viewsCount} setValue={setViewsCount} />
                <div className="scrollable-dk23xd">
                    <div>
                        <RangeCalendar
                            view="default"
                            size="s"
                            viewsCount={viewsCount}
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { value, setValue } = props;

    return (
        <div className="box-acf323" ref={ref}>
            <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 16 }}>
                Количество календарей
            </Text>
            <Textinput
                value={value}
                onChange={(event) => setValue(Math.min(Math.max(Number(event.target.value), 1), 12))}
                size="s"
                view="default"
                type="number"
                min={1}
                max={12}
                style={{ width: 70 }}
            />
        </div>
    );
});

const styles = `
    .scrollable-dk23xd {
        overflow-y: auto;
        max-width: 620px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .box-acf323 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
