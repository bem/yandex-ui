import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Theme = () => {
    const anchorRef1 = useRef<HTMLButtonElement>(null);
    const anchorRef2 = useRef<HTMLButtonElement>(null);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <div style={{ display: 'flex' }}>
            <Button onClick={() => setVisible1(!visible1)} innerRef={anchorRef1} view="default" size="m">
                Open popup (theme clear)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef1}
                direction="bottom"
                theme="clear"
                visible={visible1}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Clear</div>
            </Popup>
            &nbsp;
            <Button onClick={() => setVisible2(!visible2)} innerRef={anchorRef2} view="default" size="m">
                Open popup (theme normal)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef2}
                direction="bottom"
                theme="normal"
                visible={visible2}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Normal</div>
            </Popup>
        </div>
    );
};
