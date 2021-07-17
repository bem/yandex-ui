import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        display: inline-flex;
        padding: 16px;
        background-color: #fcc;
        width: 600px;
        height: 200px;
    }

    .anchor {
        /* Use floated number as height for check sub-pixel offset. */
        height: 32.5px;
        width: 180px;
        background-color: #ccc;
        transition: transform 200ms ease-in-out;
    }

    .anchor:active {
        transform: scale(0.9);
    }
`;

export const ScaleHermioneCase = () => {
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
                    data-testid="popup"
                    target="anchor"
                    anchor={anchorRef}
                    scope={scopeRef}
                    view="default"
                    visible={visible}
                    style={{ maxWidth: 280 }}
                    onClose={() => setVisible(false)}
                    direction="bottom-start"
                >
                    <div style={{ padding: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                </Popup>
            </div>
        </>
    );
};
