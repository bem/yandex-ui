import React, { useRef, useState } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Tooltip } from '@yandex-lego/components/Tooltip/desktop/bundle';
import { directions } from '@yandex-lego/components/Popup';

export const Direction = () => {
    const [visible, setVisible] = useState(true);
    const [directionIndex, setDirectionIndex] = useState(0);
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div style={{ margin: 32, display: 'flex', justifyContent: 'center' }}>
            <Button
                size="m"
                view="default"
                innerRef={anchorRef}
                onClick={() => {
                    setVisible(true);
                    setDirectionIndex((directionIndex + 1) % directions.length);
                }}
            >
                Current direction: {directions[directionIndex]}
            </Button>
            <Tooltip
                hasTail
                key={directions[directionIndex]}
                direction={directions[directionIndex]}
                anchor={anchorRef}
                view="default"
                visible={visible}
                size="s"
            >
                {directions[directionIndex]}
            </Tooltip>
        </div>
    );
};
