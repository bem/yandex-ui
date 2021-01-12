import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { TabsMenu } from '@yandex-lego/components/TabsMenu/desktop/bundle';

export const Playground = () => {
    const [activeTab, setActiveTab] = useState('search');

    const view = select('view', ['default', ''], 'default') as any;
    const size = select('size', ['m', 's'], 'm') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const adaptive = boolean('adaptive', true);
    const staticMoreText = boolean('staticMoreText', true);
    const hideMoreIcon = boolean('hideMoreIcon', false);

    return (
        <TabsMenu
            layout="horiz"
            size={size}
            theme={theme}
            view={view}
            tabs={[
                { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
            ]}
            onChange={setActiveTab}
            activeTab={activeTab}
            adaptive={adaptive}
            staticMoreText={staticMoreText}
            hideMoreIcon={hideMoreIcon}
        />
    );
};
