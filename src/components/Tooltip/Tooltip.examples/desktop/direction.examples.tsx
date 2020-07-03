import React, { useRef, useState } from 'react';

import { Button } from '../../../Button/Button.bundle/desktop';
import { Direction as DirectionT, Tooltip } from '../../Tooltip.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const DIRECTIONS: DirectionT[] = [
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'bottom-right',
    'bottom-center',
    'bottom-left',
    'left-bottom',
    'left-center',
    'left-top',
];

export const Direction = () => {
    const [visible, setVisible] = useState(true);
    const [directionIndex, setDirectionIndex] = useState(0);
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative', margin: 32, display: 'flex', justifyContent: 'center' }} ref={scopeRef}>
            <Button
                size="m"
                view="default"
                innerRef={anchorRef}
                onClick={() => {
                    setVisible(true);
                    setDirectionIndex((directionIndex + 1) % DIRECTIONS.length);
                }}
            >
                Current direction: {DIRECTIONS[directionIndex]}
            </Button>
            <Tooltip
                hasTail
                key={DIRECTIONS[directionIndex]}
                direction={DIRECTIONS[directionIndex]}
                anchor={anchorRef}
                scope={scopeRef}
                view="default"
                visible={visible}
                size="s"
            >
                {DIRECTIONS[directionIndex]}
            </Tooltip>
        </div>
    );
};

Direction.story = {
    name: 'direction',
};
