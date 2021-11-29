import React, { useState } from 'react';
import { MaybeDateValue } from 'web-platform-alpha';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

export const View = () => {
    const [value, setValue] = useState<MaybeDateValue>();

    return <DateTimeField view="default" size="m" value={value} onChange={(event) => setValue(event.value)} />;
};
