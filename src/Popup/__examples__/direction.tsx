import React, { useRef } from 'react';
import { Popup, directions } from '@yandex-lego/components/Popup/desktop/bundle';

export const Direction = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef} style={{ marginLeft: 112, marginTop: 32 }}>
            <div
                style={{
                    background: '#e6e6e6',
                    height: 160,
                    width: 320,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                ref={anchorRef}
            >
                Anchor
            </div>
            {directions.map((direction) => (
                <Popup
                    key={direction}
                    anchor={anchorRef}
                    scope={scopeRef}
                    direction={direction}
                    hasTail
                    target="anchor"
                    view="default"
                    visible
                >
                    <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>{direction}</div>
                </Popup>
            ))}
        </div>
    );
};
