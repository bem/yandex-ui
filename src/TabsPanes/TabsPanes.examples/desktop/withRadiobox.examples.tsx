import React, { useState } from 'react';

import { Radiobox } from '@yandex-lego/components/Radiobox/Radiobox.bundle/desktop';
import { TabsPanes } from '@yandex-lego/components/TabsPanes/TabsPanes.bundle/desktop';

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
