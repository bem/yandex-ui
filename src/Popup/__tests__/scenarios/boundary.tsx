import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .anchor-wrapper {
        display: inline-block;
        overflow: hidden;
    }

    .anchor {
        display: inline-block;
        height: 32px;
        width: 180px;
        background-color: #ccc;
    }

    .scroll {
        width: 600px;
        height: 600px;
        background-color: #fcc;
        overflow: scroll;
    }

    .scroll::before {
        content: '';
        display: block;
        height: 600px;
        width: 1px;
    }

    .scroll::after {
        content: '';
        display: block;
        height: 600px;
        width: 1px;
    }
`;

export const BoundaryHermioneCase = () => {
    const [visible, setVisible] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const boundaryRef = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef}>
            <style>{styles}</style>
            <div ref={boundaryRef} className="scroll" data-testid="container">
                <span className="anchor-wrapper">
                    <span className="anchor" data-testid="anchor" onClick={() => setVisible(!visible)} ref={anchorRef}>
                        Anchor
                    </span>
                </span>

                <Popup
                    data-testid="popup"
                    target="anchor"
                    anchor={anchorRef}
                    view="default"
                    visible={visible}
                    style={{ maxWidth: 280 }}
                    onClose={() => setVisible(false)}
                    direction={['bottom-start', 'top-start']}
                    boundary={boundaryRef}
                    scope={scopeRef}
                >
                    <div style={{ padding: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                </Popup>
            </div>
        </div>
    );
};
