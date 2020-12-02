import React from 'react';

import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const Type = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" type="number" defaultValue="200" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" type="password" defaultValue="secret" />
        </div>
    </>
);
