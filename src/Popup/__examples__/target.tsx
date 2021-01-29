import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Target = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" view="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom-start"
                view="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                    Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                </div>
            </Popup>
        </>
    );
};
