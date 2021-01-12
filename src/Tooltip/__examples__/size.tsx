import React, { useRef, useState } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Tooltip } from '@yandex-lego/components/Tooltip/desktop/bundle';

export const Size = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const anchorRef3 = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative', display: 'flex', height: 96 }} ref={scopeRef}>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef1} size="m" view="default" onClick={() => setVisible1(!visible1)}>
                    Target
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef2} size="m" view="default" onClick={() => setVisible2(!visible2)}>
                    Target
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef3} size="m" view="default" onClick={() => setVisible3(!visible3)}>
                    Target
                </Button>
            </div>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="s"
                anchor={anchorRef1}
                scope={scopeRef}
                visible={visible1}
            >
                Size small
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="m"
                anchor={anchorRef2}
                scope={scopeRef}
                visible={visible2}
            >
                Size medium
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom-center"
                view="default"
                size="l"
                anchor={anchorRef3}
                scope={scopeRef}
                visible={visible3}
            >
                Size large
            </Tooltip>
        </div>
    );
};
