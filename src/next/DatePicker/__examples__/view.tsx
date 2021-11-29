import React, { useState } from 'react';
import { MaybeDateValue } from 'web-platform-alpha';
import { DatePicker } from '@yandex-lego/components/next/DatePicker';

export const View = () => {
    const [value, setValue] = useState<MaybeDateValue>();

    return <DatePicker view="default" size="s" value={value} onChange={(event) => setValue(event.value)} />;
};
