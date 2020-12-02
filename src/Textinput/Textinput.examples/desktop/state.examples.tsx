import React from 'react';

import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const State = () => (
    <>
        <Textinput state="error" hint="Error message" size="m" view="default" defaultValue="view default" />
    </>
);
