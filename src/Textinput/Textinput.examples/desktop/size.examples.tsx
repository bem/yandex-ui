import React from 'react';

import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const Size = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" defaultValue="size m" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput size="s" view="default" defaultValue="size s" />
        </div>
    </>
);
