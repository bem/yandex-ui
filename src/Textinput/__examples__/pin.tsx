import React from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const Pin = () => {
    const rPins = ['round-round', 'round-clear', 'clear-round', 'round-brick', 'brick-round'];
    const qPins = ['brick-brick', 'brick-clear', 'clear-brick'];
    return (
        <>
            <p>Поля со скругленными уголками</p>
            {rPins.map((pin: any) => (
                <Textinput key={pin} size="m" view="default" pin={pin} value={`pin=${pin}`} />
            ))}
            <p>Поля с прямоугольными уголками</p>
            {qPins.map((pin: any) => (
                <Textinput key={pin} size="m" view="default" pin={pin} value={`pin=${pin}`} />
            ))}
            <p>Поле без боковых границ</p>
            <Textinput size="m" view="default" pin="clear-clear" value="pin=clear-clear" />
        </>
    );
};
