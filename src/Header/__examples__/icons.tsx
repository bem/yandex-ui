import React from 'react';

import {
    ServicesIcon,
    MirrorIcon,
    SportIcon,
    NewsIcon,
    WeatherIcon,
    CrossIcon,
    SearchIcon,
} from '@yandex-lego/components/Header/desktop';

export const icons = () => (
    <>
        <ServicesIcon />
        <MirrorIcon />
        <SportIcon />
        <NewsIcon />
        <WeatherIcon />
        <div style={{ width: 36, height: 36, position: 'relative' }}><CrossIcon /></div>
        <div style={{ width: 36, height: 36, position: 'relative' }}><SearchIcon /></div>
    </>
);
