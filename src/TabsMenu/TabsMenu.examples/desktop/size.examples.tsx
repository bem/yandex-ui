import React, { useState } from 'react';
import { TabsMenu } from '@yandex-lego/components/TabsMenu/TabsMenu.bundle/desktop';

export const Size = () => {
    const [activeTab1, setActiveTab1] = useState('search');
    const [activeTab2, setActiveTab2] = useState('search');

    return (
        <>
            <TabsMenu
                size="s"
                view="default"
                layout="horiz"
                tabs={[
                    { id: 'search', onClick: () => setActiveTab1('search'), content: 'Поиск' },
                    { id: 'images', onClick: () => setActiveTab1('images'), content: 'Картинки' },
                    { id: 'video', onClick: () => setActiveTab1('video'), content: 'Видео' },
                ]}
                activeTab={activeTab1}
            />
            <TabsMenu
                size="m"
                view="default"
                layout="horiz"
                tabs={[
                    { id: 'search', onClick: () => setActiveTab2('search'), content: 'Поиск' },
                    { id: 'images', onClick: () => setActiveTab2('images'), content: 'Картинки' },
                    { id: 'video', onClick: () => setActiveTab2('video'), content: 'Видео' },
                ]}
                activeTab={activeTab2}
            />
        </>
    );
};
