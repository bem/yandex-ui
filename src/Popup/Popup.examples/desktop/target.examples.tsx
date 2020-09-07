import React, { createRef, useState } from 'react';

import { Button } from '../../../Button/Button.bundle/desktop';
import { Popup } from '../../Popup.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const scopeRef = createRef<HTMLDivElement>();
const anchorRef = createRef<HTMLDivElement>();

export const Target = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ position: 'relative' }} ref={scopeRef}>
            <Button
                onClick={() => setVisible(!visible)}
                innerRef={anchorRef}
                size="m"
                view="default"
                children="_target_anchor"
            />
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                directions={['bottom-left']}
                scope={scopeRef}
                view="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                    Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                </div>
            </Popup>
        </div>
    );
};

Target.story = {
    name: 'target',
};
