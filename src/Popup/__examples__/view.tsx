import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const View = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible1, setVisible1] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible1(!visible1)} innerRef={anchorRef} view="default" size="m">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom"
                view="default"
                visible={visible1}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Default</div>
            </Popup>
        </>
    );
};
