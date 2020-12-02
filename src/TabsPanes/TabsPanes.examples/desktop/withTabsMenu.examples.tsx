import React, { useState } from 'react';

import { TabsMenu } from '@yandex-lego/components/TabsMenu/TabsMenu.bundle/desktop';
import { TabsPanes } from '@yandex-lego/components/TabsPanes/TabsPanes.bundle/desktop';

export const WithTabsMenu = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <>
            <TabsMenu
                view="default"
                layout="horiz"
                size="m"
                activeTab={activeTab}
                tabs={[
                    { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                    { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                    { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
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
