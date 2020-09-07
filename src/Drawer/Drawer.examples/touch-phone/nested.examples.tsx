import React, { useState } from 'react';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_TOKEN, createDecorators, parameters } from '../examples-config';
import { Drawer } from '../../touch-phone/bundle';

import '../examples-styles.css';

export default {
    title: EXAMPLE_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'touch-phone' })],
    parameters,
};

export const Nested = () => {
    const scopeRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [nestedVisible, setNestedVisible] = useState(false);

    const dragDisabled = boolean('dragDisabled', false);
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
                <button onClick={() => setVisible(true)} data-testid="opener-primary">
                    Открыть шторку
                </button>
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
                view="default"
                animation={animation}
                dragDisabled={dragDisabled}
            >
                <div className="DrawerInnerContent">
                    <p>
                        Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                        ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                        vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                        mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                        mollis maecenas orci nibh.
                    </p>
                    <p>
                        Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                        ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                        vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                        mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                        mollis maecenas orci nibh.
                    </p>
                    <p>
                        Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                        ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                        vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                        mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                        mollis maecenas orci nibh.
                    </p>
                    <button onClick={() => setVisible(false)}>Закрыть шторку</button>
                    <button onClick={() => setNestedVisible(true)} data-testid="opener-secondary">
                        Отрыть вложенную шторку
                    </button>
                </div>
            </Drawer>
            <Drawer
                visible={nestedVisible}
                onClose={() => setNestedVisible(false)}
                scope={scopeRef}
                animation={animation}
                dragDisabled={dragDisabled}
                view="default"
                nested
            >
                <div className="DrawerInnerContent">
                    <p>
                        Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                        ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                        vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                        mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                        mollis maecenas orci nibh.
                    </p>
                    <button onClick={() => setNestedVisible(false)}>Закрыть вложенную шторку</button>
                </div>
            </Drawer>
        </div>
    );
};

Nested.story = {
    name: 'nested',
};
