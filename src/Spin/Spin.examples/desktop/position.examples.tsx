import React from 'react';
import { Spin } from '@yandex-lego/components/Spin/Spin.bundle/desktop';

export const Position = () => (
    <div style={{ position: 'relative', height: 38 }}>
        <Spin progress position="center" view="default" size="l" />
    </div>
);
