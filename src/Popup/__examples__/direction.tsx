import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

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
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

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
