import React, { useState } from 'react';

import { usePreviousValue } from '@yandex-lego/components/usePreviousValue';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const useForceUpdate = () => {
    const [, setValue] = useState(0);
    return () => setValue((value) => ++value);
};

export const Rerender = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePreviousValue(count);

    const forceUpdate = useForceUpdate();

    return (
        <>
            Текущее значение: {count}. &nbsp;
            Предыдущее значение: {prevCount}. &nbsp;
            <Button view="action" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button> &nbsp;
            <Button view="action" size="m" onClick={forceUpdate}>
                Ререндер
            </Button>
        </>
    );
};
