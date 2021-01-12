import React, { useState, useRef } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

export const ComplexPopup = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const buttonRef1 = useRef<HTMLDivElement>(null);
    const buttonRef2 = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootRef} style={{ position: 'relative', height: '200px' }}>
            <Button innerRef={buttonRef1} view="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Popup
                visible={visible1}
                scope={rootRef}
                anchor={buttonRef1}
                onClose={() => setVisible1(false)}
                target="anchor"
                view="default"
                hasTail
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                    content-1
                    <Button innerRef={buttonRef2} view="default" size="m" onClick={() => setVisible2(!visible2)}>
                        Открыть
                    </Button>
                </div>
                <Popup
                    visible={visible2}
                    scope={rootRef}
                    anchor={buttonRef2}
                    onClose={() => setVisible2(false)}
                    target="anchor"
                    view="default"
                    hasTail
                >
                    <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>content-2</div>
                </Popup>
            </Popup>
        </div>
    );
};
