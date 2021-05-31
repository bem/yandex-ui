import React, { useState } from 'react';
import { Radiobox } from '@yandex-lego/components/Radiobox/desktop/bundle';
import { TabsPanes } from '@yandex-lego/components/TabsPanes/desktop/bundle';

export const WithRadiobox = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <>
            <Radiobox
                size="m"
                view="default"
                value={activeTab}
                onChange={(event) => setActiveTab(event.target.value)}
                options={[
                    { label: 'Поиск', value: 'search' },
                    { label: 'Картинки', value: 'images' },
                    { label: 'Видео', value: 'video' },
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
