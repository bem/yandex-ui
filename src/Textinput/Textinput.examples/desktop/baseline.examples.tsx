import React from 'react';

import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const Baseline = () => (
    <div style={{ display: 'inline-block', width: 330 }}>
        <Textinput baseline size="m" view="default" defaultValue="Hello" style={{ margin: 4, width: 150 }} />
        <Textinput baseline size="s" view="default" defaultValue="World" style={{ margin: 4, width: 150 }} />
    </div>
);
