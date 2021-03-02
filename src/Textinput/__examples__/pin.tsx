import React from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

const styles = `
    .PinInput {
        margin-bottom: 8px;
        max-width: 320px;
        display: flex;
    }
`;

const pins = [
    'round-round',
    'round-clear',
    'clear-round',
    'round-brick',
    'brick-round',
    'brick-brick',
    'brick-clear',
    'clear-brick',
    'clear-clear',
] as const;

export const Pin = () => (
    <>
        <style>{styles}</style>
        {pins.map((pin) => (
            <Textinput size="m" view="default" className="PinInput" key={pin} pin={pin} value={pin} />
        ))}
    </>
);
