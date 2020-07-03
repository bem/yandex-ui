import React, { useState } from 'react';

import { Radiobox } from '../../../Radiobox/Radiobox.bundle/desktop';
import { TabsPanes } from '../../TabsPanes.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const WithRadiobox = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <>
            <Radiobox
                size="m"
                view="default"
                value={activeTab}
                options={[
                    { label: 'Поиск', value: 'search', onClick: () => setActiveTab('search') },
                    { label: 'Картинки', value: 'images', onClick: () => setActiveTab('images') },
                    { label: 'Видео', value: 'video', onClick: () => setActiveTab('video') },
                ]}
            />
            <TabsPanes
                activePane={activeTab}
                panes={[
                    { id: 'search', content: 'Поиск content' },
                    { id: 'images', content: 'Картинки content' },
                    { id: 'video', content: 'Видео content' },
                ]}
            />
        </>
    );
};

WithRadiobox.story = {
    name: 'with Radiobox',
};
