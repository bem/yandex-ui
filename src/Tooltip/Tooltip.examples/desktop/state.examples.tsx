import React, { useRef, useState } from 'react';

import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';
import { Tooltip } from '@yandex-lego/components/Tooltip/Tooltip.bundle/desktop';

export const State = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const anchorRef3 = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative', display: 'flex', height: 64 }} ref={scopeRef}>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef1} size="m" view="default" onClick={() => setVisible1(!visible1)}>
                    Warning
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef2} size="m" view="default" onClick={() => setVisible2(!visible2)}>
                    Alert
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef3} size="m" view="default" onClick={() => setVisible3(!visible3)}>
                    Success
                </Button>
            </div>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="m"
                anchor={anchorRef1}
                scope={scopeRef}
                visible={visible1}
                state="warning"
            >
                Warning message
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="m"
                anchor={anchorRef2}
                scope={scopeRef}
                visible={visible2}
                state="alert"
            >
                Alert message
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="m"
                anchor={anchorRef3}
                scope={scopeRef}
                visible={visible3}
                state="success"
            >
                Success message
            </Tooltip>
        </div>
    );
};
