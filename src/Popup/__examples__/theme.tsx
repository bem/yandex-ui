import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Theme = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'flex' }} ref={scopeRef}>
            <Button
                onClick={() => setVisible1(!visible1)}
                innerRef={anchorRef1}
                view="default"
                size="m"
                children="_theme_clear"
            />
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef1}
                directions={['bottom-center']}
                scope={scopeRef}
                theme="clear"
                visible={visible1}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Clear</div>
            </Popup>
            &nbsp;
            <Button
                onClick={() => setVisible2(!visible2)}
                innerRef={anchorRef2}
                view="default"
                size="m"
                children="_theme_normal"
            />
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef2}
                scope={scopeRef}
                directions={['bottom-center']}
                theme="normal"
                visible={visible2}
            >
                <div style={{ padding: 8, fontFamily: 'var(--control-font-family)' }}>Normal</div>
            </Popup>
        </div>
    );
};
