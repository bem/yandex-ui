import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import { TabsPanes } from '../../TabsPanes.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const activeTab = text('activeTab', 'search');
    const panes = object('panes', [
        { id: 'search', content: 'Поиск content' },
        { id: 'images', content: 'Картинки content' },
        { id: 'video', content: 'Видео content' },
    ]);

    return <TabsPanes activePane={activeTab} panes={panes} />;
};

Playground.story = {
    name: 'playground',
};
