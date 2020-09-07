import React, { createRef } from 'react';

import { Popup } from '../../Popup.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

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

Position.story = {
    name: 'position',
};
