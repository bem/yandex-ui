import React, { useState } from 'react';
import { Drawer } from '@yandex-lego/components/Drawer/touch-phone/bundle';

export const Nested = () => {
    const scopeRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [nestedVisible, setNestedVisible] = useState(false);

    return (
        <div ref={scopeRef}>
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
            <Drawer visible={visible} onClose={() => setVisible(false)} scope={scopeRef} view="default">
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
                <Drawer
                    visible={nestedVisible}
                    onClose={() => setNestedVisible(false)}
                    scope={scopeRef}
                    view="default"
                    nested
                >
                    <div className="DrawerInnerContent">
                        <p>
                            Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula
                            congue ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis
                            scelerisque vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes,
                            et posuere diam mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti,
                            vulputate class mollis maecenas orci nibh.
                        </p>
                        <button onClick={() => setNestedVisible(false)}>Закрыть вложенную шторку</button>
                    </div>
                </Drawer>
            </Drawer>
        </div>
    );
};
