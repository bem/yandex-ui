import React from 'react';

import { useUniqId } from '@yandex-lego/components/useUniqId';

export const Default = () => {
    const id = useUniqId('componentName');

    return (
        <div id={id}>
            I am a component <br />
            id: <em>{id}</em>
        </div>
    );
};
