import React, { useState } from 'react';

import { TabsMenu } from '../../TabsMenu.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Layout = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <TabsMenu
            size="m"
            view="default"
            layout="horiz"
            tabs={[
                { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
            ]}
            activeTab={activeTab}
        />
    );
};

Layout.story = {
    name: 'layout',
};

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

Size.story = {
    name: 'size',
};

export const Theme = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <TabsMenu
            size="m"
            theme="normal"
            layout="horiz"
            tabs={[
                { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
            ]}
            activeTab={activeTab}
        />
    );
};

Theme.story = {
    name: 'theme',
};

export const View = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <TabsMenu
            size="m"
            view="default"
            layout="horiz"
            tabs={[
                { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
            ]}
            activeTab={activeTab}
        />
    );
};

View.story = {
    name: 'view',
};

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

Adaptive.story = {
    name: 'adaptive',
};
