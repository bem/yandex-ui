import React, { useState } from 'react';
import { TabsMenu } from '@yandex-lego/components/TabsMenu/TabsMenu.bundle/desktop';

export const AdaptiveWithAddAndDelete = () => {
    const [activeTab, setActiveTab] = useState('0');
    const [tabs, setTabs] = useState(
        [...Array(10).keys()].map((idx) => ({ id: idx.toString(), content: `Tab-${idx}` })),
    );

    return (
        <div style={{ height: 200 }}>
            <TabsMenu
                adaptive
                size="m"
                view="default"
                layout="horiz"
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
            />
            <button
                onClick={() => {
                    setTabs([...tabs, { id: tabs.length.toString(), content: `Tab-${tabs.length}` }]);
                }}
            >
                Добавить
            </button>
            <button
                onClick={() => {
                    setTabs(tabs.slice(0, tabs.length - 1));
                }}
            >
                Удалить
            </button>
        </div>
    );
};
