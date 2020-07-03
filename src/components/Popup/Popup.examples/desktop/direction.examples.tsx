import React, { createRef, useState } from 'react';

import { Popup } from '../../Popup.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const scopeRef = createRef<HTMLDivElement>();
const anchorRef = createRef<HTMLDivElement>();

const allDirections = [
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'left-top',
    'left-center',
    'left-bottom',
];

export const Direction = () => {
    const [visible] = useState(true);

    return (
        <div style={{ position: 'relative', top: 25, left: 100 }} ref={scopeRef}>
            <div
                style={{
                    background: '#e6e6e6',
                    height: 100,
                    width: 320,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                }}
                ref={anchorRef}
            >
                Anchor
            </div>
            {allDirections.map((direction: any) => (
                <Popup
                    key={direction}
                    anchor={anchorRef}
                    directions={[direction]}
                    hasTail
                    target="anchor"
                    scope={scopeRef}
                    view="default"
                    visible={visible}
                >
                    {direction}
                </Popup>
            ))}
        </div>
    );
};

Direction.story = {
    name: 'direction',
};
