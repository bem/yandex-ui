import React, { useRef, useState } from 'react';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const styles = `
    .scrollable {
        overflow: auto;
        height: 300px;
        background-color: #f2f2f2;
        text-align: center;
    }

    .scrollable::before,
    .scrollable::after {
        content: '';
        display: block;
        height: 600px;
        width: 1px;
    }

    .hidden {
        display: inline-block;
        overflow: hidden;
    }
`;

export const Boundary = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const boundaryRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <style>{styles}</style>
            <div ref={scopeRef}>
                <div className="scrollable" ref={boundaryRef}>
                    <span className="hidden">
                        <Button innerRef={anchorRef} view="action" size="m" onClick={() => setVisible(true)}>
                            anchor
                        </Button>
                    </span>

                    <Popup
                        view="default"
                        target="anchor"
                        direction={['bottom', 'top']}
                        anchor={anchorRef}
                        scope={scopeRef}
                        visible={visible}
                        onClose={() => setVisible(false)}
                        boundary={boundaryRef}
                    >
                        <div style={{ padding: 16, maxWidth: 300, fontFamily: 'var(--control-font-family)' }}>
                            Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        </div>
                    </Popup>
                </div>
            </div>
        </>
    );
};
