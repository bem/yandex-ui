import React, { useRef, useState } from 'react';
import { Popup, directions } from '@yandex-lego/components/Popup/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        display: inline-flex;
        padding: 80px 180px;
        background-color: #fcc;
    }

    .anchor {
        height: 160px;
        width: 420px;
        background-color: #ccc;
    }
`;

export const DirectionsHermioneCase = () => {
    const { hasTail, mainOffset, secondaryOffset, visible: initialVisible = false, theme, view = 'default' } = useParams();
    const [visible, setVisible] = useState(initialVisible);
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <style>{styles}</style>
            <div ref={scopeRef} className="container" data-testid="container">
                <div className="anchor" data-testid="anchor" onClick={() => setVisible(!visible)} ref={anchorRef}>
                    Anchor
                </div>
                {directions.map((direction) => (
                    <Popup
                        hasTail={hasTail}
                        key={direction}
                        direction={direction}
                        data-testid="popup"
                        target="anchor"
                        anchor={anchorRef}
                        scope={scopeRef}
                        theme={theme}
                        view={view}
                        visible={visible}
                        onClose={() => setVisible(false)}
                        mainOffset={mainOffset}
                        secondaryOffset={secondaryOffset}
                    >
                        <div style={{ padding: 8 }}>{direction}</div>
                    </Popup>
                ))}
            </div>
        </>
    );
};
