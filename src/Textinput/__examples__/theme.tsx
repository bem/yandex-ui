import React from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

export const Theme = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput theme="normal" size="m" defaultValue="theme normal" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput theme="websearch" defaultValue="theme websearch" />
        </div>
    </>
);
