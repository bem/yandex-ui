import React, { useState } from 'react';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const View = () => {
    const [checked, setChecked] = useState(false);

    return <Checkbox size="m" view="default" label="Label" onChange={() => setChecked(!checked)} checked={checked} />;
};
