import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Nonvisual = () => {
    const [visible, setVisible] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div style={{ display: 'flex' }}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} view="default" size="m">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom"
                view="default"
                nonvisual
                visible={visible}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Nonvisual</div>
            </Popup>
        </div>
    );
};
