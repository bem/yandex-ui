import React from 'react';
import { Progress } from '@yandex-lego/components/Progress/Progress.bundle/desktop';

export const Common = () => {
    return (
        <div>
            <Progress value={10} timing="linear" maxValue={100} />
        </div>
    );
};
