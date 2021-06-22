import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0!important;
    }

    .container {
        display: inline-flex;
        background-color: #fcc;
        height: 200px;
        width: 300px;
    }

    .anchor {
        height: 32px;
        width: 180px;
        background-color: #ccc;
    }
`;

export const OverflowHermioneCase = () => {
    const [visible, setVisible] = useState(false);
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <style>{styles}</style>
            <div ref={scopeRef} className="container" data-testid="container">
                <div className="anchor" data-testid="anchor" onClick={() => setVisible(!visible)} ref={anchorRef}>
                    Anchor
                </div>
                <Popup
                    hasTail
                    data-testid="popup"
                    target="anchor"
                    anchor={anchorRef}
                    scope={scopeRef}
                    view="default"
                    visible={visible}
                    style={{ maxWidth: 280 }}
                    onClose={() => setVisible(false)}
                    direction="bottom"
                >
                    <div style={{ padding: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                </Popup>
            </div>
        </>
    );
};
