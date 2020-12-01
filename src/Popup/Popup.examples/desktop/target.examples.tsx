import React, { createRef, useState } from 'react';

import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const scopeRef = createRef<HTMLDivElement>();
const anchorRef = createRef<HTMLDivElement>();

export const Target = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ position: 'relative' }} ref={scopeRef}>
            <Button
                onClick={() => setVisible(!visible)}
                innerRef={anchorRef}
                size="m"
                view="default"
                children="_target_anchor"
            />
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                directions={['bottom-left']}
                scope={scopeRef}
                view="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                    Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                </div>
            </Popup>
        </div>
    );
};
