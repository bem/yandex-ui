import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Nonvisual = () => {
    const [visible1, setVisible1] = useState(false);
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative', display: 'flex' }} ref={scopeRef}>
            <Button onClick={() => setVisible1(!visible1)} innerRef={anchorRef1} view="default" size="m">
                hello
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef1}
                directions={['bottom-center']}
                scope={scopeRef}
                view="default"
                nonvisual
                visible={visible1}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Nonvisual</div>
            </Popup>
        </div>
    );
};
