import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Spin } from '@yandex-lego/components/Spin/Spin.bundle/desktop';

export const Playground = () => {
    const view = select('view', ['default'], 'default') as any;
    const size = select('size', ['l', 'm', 's', 'xs', 'xxs'], 'm') as any;
    const position = select('position', ['', 'center'], '') as any;
    const progress = boolean('progress', true);

    return <Spin view={view} progress={progress} position={position} size={size} />;
};
