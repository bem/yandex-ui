import React, { useState } from 'react';
import { Calendar } from '@yandex-lego/components/next/Calendar/desktop/bundle';

const styles = `
    .CustomDate {
        display: flex;
        width: 48px;
        height: 48px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .CustomDate-Price {
        font-size: 9px;
        line-height: 16px;
    }

    .CustomDate-Day {
        font-size: 13px;
        line-height: 16px;
    }

    .CustomDate-Dots {
        display: flex;
        margin: 4px 0;
    }

    .CustomDate-Dot {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .CustomDate-Dot + .CustomDate-Dot {
        margin-left: 1px;
    }
`;

export const Overriden = () => {
    const [value, setValue] = useState<Date>();

    return (
        <>
            <style>{styles}</style>
            <Calendar
                value={value}
                onChange={(event) => setValue(event.value)}
                size="l"
                view="default"
                renderCell={(props, Cell) => (
                    <Cell {...props}>
                        <div className="CustomDate">
                            <span className="CustomDate-Day">{props.children}</span>
                            {props.state.activeView === 'day' && (
                                <span className="CustomDate-Price">{getRandomPrice(props.value)}</span>
                            )}
                            {props.state.activeView !== 'day' && (
                                <span className="CustomDate-Dots">
                                    <span className="CustomDate-Dot" style={{ backgroundColor: '#FFCC00' }} />
                                    <span className="CustomDate-Dot" style={{ backgroundColor: '#FF0000' }} />
                                    <span className="CustomDate-Dot" style={{ backgroundColor: '#0077FF' }} />
                                </span>
                            )}
                        </div>
                    </Cell>
                )}
            />
        </>
    );
};

const cache: Record<number, string> = {};

function numberFormat(value: number) {
    const pieces = value.toFixed(0).split('');

    let i = pieces.length;
    while ((i -= 3) > 0) {
        pieces.splice(i, 0, ' ');
    }

    return pieces.join('');
}

function getRandomPrice(value: Date) {
    const time = value.getTime();

    if (!cache[time]) {
        const min = 30;
        const max = 200;

        const rand = Math.floor(Math.random() * (max - min)) + min;
        cache[time] = `~${numberFormat(rand * 100)} ₽`;
    }

    return cache[time];
}
