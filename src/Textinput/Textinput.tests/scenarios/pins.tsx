import React from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

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

const styles = `
    .container {
        display: inline-flex;
        flex-direction: column;
        padding: 8px;
        width: 320px;
    }

    .container .Textinput + .Textinput {
        margin-top: 8px;
    }
`;

export const PinsHermioneCase = () => (
    <>
        <style>{styles}</style>
        <div className="container" data-testid="container">
            {pins.map((pin) => (
                <Textinput size="m" view="default" key={pin} pin={pin} value={pin} data-testid={pin} />
            ))}
        </div>
    </>
);
