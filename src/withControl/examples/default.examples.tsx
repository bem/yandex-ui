import React, { useState } from 'react';

import { withControl } from '@yandex-lego/components/withControl';
import { Text } from '@yandex-lego/components/Text/Text.bundle/desktop';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';

const Component = (props:any) => <Button {...props} view="action" size="m"> Button </Button>;
const EnhancedComponent = withControl(Component);

export const Default = () => {
    const [curState, setCurState] = useState('No state');

    const handleBlur = () => setCurState('Handle blur');
    const handleFocus = () => setCurState('Handle focus');
    const handleMouseDown = () => setCurState('Handle mouse down');
    const handleMouseUp = () => setCurState('Handle mouse up');

    return (
        <>
            <EnhancedComponent
                onBlur={handleBlur}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            /> &nbsp;
            <Text> {curState} </Text>
        </>
    );
};
