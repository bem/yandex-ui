import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Pin = () => {
    const rPins = ['round-round', 'round-clear', 'clear-round', 'round-brick', 'brick-round'];
    const cPins = ['circle-circle', 'circle-clear', 'clear-circle', 'circle-brick', 'brick-circle'];
    const qPins = ['brick-brick', 'brick-clear', 'clear-brick'];

    return (
        <>
            <p>Кнопки со скругленными уголками</p>
            {rPins.map((pin: any) => (
                <Button key={pin} pin={pin} view="default" size="m">
                    Button
                </Button>
            ))}
            <p>Кнопки с круглыми границами</p>
            {cPins.map((pin: any) => (
                <Button key={pin} pin={pin} view="default" size="m">
                    Button
                </Button>
            ))}
            <p>Кнопки с прямоугольными уголками</p>
            {qPins.map((pin: any) => (
                <Button key={pin} pin={pin} view="default" size="m">
                    Button
                </Button>
            ))}
            <p>Кнопка без боковых границ</p>
            <Button pin="clear-clear" view="default" size="m">
                Button
            </Button>
        </>
    );
};

Pin.story = {
    name: 'pin',
};
