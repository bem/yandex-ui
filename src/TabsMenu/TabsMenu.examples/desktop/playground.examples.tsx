import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { TabsMenu } from '../../TabsMenu.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const [activeTab, setActiveTab] = useState('search');

    const preset = select('theme-preset', presetsKeys, 'default');
    const view = select('view', ['default', ''], 'default') as any;
    const size = select('size', ['m', 's'], 'm') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;

    return (
        <div className={cnTheme(presets[preset])}>
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
                activeTab={activeTab}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
