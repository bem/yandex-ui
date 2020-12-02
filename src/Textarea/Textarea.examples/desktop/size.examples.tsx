import React from 'react';

import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const Size = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textarea size="m" view="default" defaultValue="size m" />
        </div>
        <div style={{ padding: 4 }}>
            <Textarea size="s" view="default" defaultValue="size s" />
        </div>
    </>
);
