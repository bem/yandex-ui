import React, { createRef } from 'react';

import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const scopeRef = createRef<HTMLDivElement>();

export const Position = () => (
    <div ref={scopeRef} style={{ height: 150, position: 'relative' }}>
        <Popup view="default" visible scope={scopeRef} position={{ top: 16, left: 16 }}>
            <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                <pre>{'position={{\n  top: 16,\n  left: 16\n}}'}</pre>
            </div>
        </Popup>
    </div>
);
