import React, { useState } from 'react';

import { useUpdateEffect } from '@yandex-lego/components/useUpdateEffect';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';
import { Text } from '@yandex-lego/components/Text/Text.bundle/desktop';

export const Default = () => {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <>
            <Text>{count} &nbsp;</Text>
            <Button view="action" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button>
        </>
    );
};
