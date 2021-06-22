import React, { useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .anchor {
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

export const FlippingHermioneCase = () => {
    const { motionless = false } = useParams();
    const [visible, setVisible] = useState(false);
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <style>{styles}</style>
            <div ref={scopeRef} className="scroll" data-testid="container">
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
                    direction={['bottom-start', 'top-start']}
                    motionless={motionless}
                >
                    <div style={{ padding: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                </Popup>
            </div>
        </>
    );
};
