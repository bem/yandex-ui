import React, { createRef, useState } from 'react';

import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const scopeRef = createRef<HTMLDivElement>();
const anchorRef = createRef<HTMLDivElement>();

export const Scrollable = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <div className="wrapper" style={{ overflowY: 'hidden', overflowX: 'auto' }}>
                <div style={{ width: 5000, overflow: 'auto' }}>
                    <div
                        className="header"
                        style={{ background: '#555', color: '#eee', width: 10000 }}
                    >
                        В 1800-х годах,&nbsp;
                        <Button
                            onClick={() => setVisible(!visible)}
                            innerRef={anchorRef}
                            size="m"
                            view="default"
                            children="Открыть попап"
                        />
                        &nbsp;в те времена, когда не было еще ни железных, ни шоссейных дорог,
                        ни газового, ни стеаринового света, ни пружинных низких диванов, ни мебели без лаку,&nbsp;
                        ни разочарованных юношей со стеклышками, ни либеральных философов-женщин...
                    </div>
                    <Popup
                        hasTail
                        hideWithAnchor
                        target="anchor"
                        anchor={anchorRef}
                        scope={scopeRef}
                        view="default"
                        visible={visible}
                        style={{ maxWidth: 280 }}
                        onClose={() => setVisible(false)}>
                        <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                            А вы как думаете?
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    );
};
