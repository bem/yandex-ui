import React, { useState } from 'react';

import { usePreviousValue } from '@yandex-lego/components/usePreviousValue';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Default = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePreviousValue(count);

    return (
        <>
            Текущее значение: {count}. &nbsp;
            Предыдущее значение: {prevCount}. &nbsp;
            <Button view="action" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button>
        </>
    );
};
