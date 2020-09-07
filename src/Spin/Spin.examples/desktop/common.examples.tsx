import React from 'react';

import { Spin } from '../../Spin.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Position = () => (
    <div style={{ position: 'relative', height: 38 }}>
        <Spin progress position="center" view="default" size="l" />
    </div>
);

Position.story = {
    name: 'position',
};

export const Size = () => (
    <>
        <Spin progress view="default" size="l" />
        <Spin progress view="default" size="m" />
        <Spin progress view="default" size="s" />
        <Spin progress view="default" size="xs" />
        <Spin progress view="default" size="xxs" />
    </>
);

Size.story = {
    name: 'size',
};

export const View = () => (
    <>
        <Spin progress view="default" size="l" />
    </>
);

View.story = {
    name: 'view',
};
