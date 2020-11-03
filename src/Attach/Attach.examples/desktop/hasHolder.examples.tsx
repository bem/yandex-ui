import React from 'react';

import { Attach } from '@yandex-lego/components/Attach/desktop/bundle';

export const HasHolder = () => (
    <>
        <Attach size="m" view="default">Select file</Attach>
        <Attach hasHolder holderText="no file chosen" size="m" view="default">Select file</Attach>
    </>
);
