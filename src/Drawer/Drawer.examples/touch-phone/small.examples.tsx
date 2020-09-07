import React, { useState } from 'react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import { EXAMPLE_TOKEN, createDecorators, parameters } from '../examples-config';
import { Drawer } from '../../touch-phone/bundle';

import '../examples-styles.css';

export default {
    title: EXAMPLE_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'touch-phone' })],
    parameters,
};

export const Small = () => {
    const scopeRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const nested = boolean('nested', false);
    const dragDisabled = boolean('dragDisabled', false);
    const direction = select('direction', ['left', 'right', 'bottom'], 'bottom');
    const animation = {
        tension: number('tension', 230),
        friction: number('friction', 24),
        disabled: boolean('disable animation', false),
        dragImmediate: boolean('drag immediate', false),
    };

    return (
        <div ref={scopeRef}>
            <p>
                Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
                tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
                dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
                Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
            </p>
            <p>
                Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
                tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
                dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
                Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
            </p>
            <p>
                <button onClick={() => setVisible(true)}>Открыть маленькую шторку</button>
            </p>
            <p>
                Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
                tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
                dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
                Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
            </p>
            <p>
                Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
                tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
                dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
                Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
            </p>
            <p>
                Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
                tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
                dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
                Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
            </p>
            <Drawer
                visible={visible}
                onClose={() => setVisible(false)}
                scope={scopeRef}
                animation={animation}
                nested={nested}
                dragDisabled={dragDisabled}
                direction={direction}
                view="default"
            >
                <div className="DrawerInnerContent">
                    <p>
                        Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                        ad nisi tempor laoreet lacus.
                    </p>
                    <button onClick={() => setVisible(false)}>Закрыть шторку</button>
                </div>
            </Drawer>
        </div>
    );
};

Small.story = {
    name: 'small',
};
