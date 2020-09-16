import React, { useState } from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

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
    const adaptive = boolean('adaptive', true);
    const staticMoreText = boolean('staticMoreText', true);
    const hideMoreIcon = boolean('hideMoreIcon', false);

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
                onChange={setActiveTab}
                activeTab={activeTab}
                adaptive={adaptive}
                staticMoreText={staticMoreText}
                hideMoreIcon={hideMoreIcon}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
