import React, { useState } from 'react';
import { TabsMenu } from '@yandex-lego/components/TabsMenu/TabsMenu.bundle/desktop';

export const Adaptive = () => {
    const [activeTab, setActiveTab] = useState('0');
    const tabs = [...Array(20).keys()].map((idx) => ({ id: idx.toString(), content: `Tab-${idx}` }));

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
        </div>
    );
};
