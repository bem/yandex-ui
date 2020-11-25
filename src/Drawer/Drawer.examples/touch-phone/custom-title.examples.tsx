import React, { useMemo, useState } from 'react';

import { Drawer } from '@yandex-lego/components/Drawer/touch-phone/bundle';

export const CustomTitle = () => {
    const scopeRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const TitleComponent = useMemo(
        () => (
            <div className="DrawerTitleComponent">
                Это заголовок.
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                    }}
                >
                    &times;
                </a>
            </div>
        ),
        [setVisible],
    );

    const nested = false;
    const dragDisabled = false;
    const direction = 'bottom';
    const animation = {
        tension: 230,
        friction: 24,
        disabled: false,
        dragImmediate: false,
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
                <button onClick={() => setVisible(true)}>Открыть большую шторку</button>
            </p>
            <Drawer
                visible={visible}
                onClose={() => setVisible(false)}
                scope={scopeRef}
                titleComponent={TitleComponent}
                nested={nested}
                dragDisabled={dragDisabled}
                direction={direction}
                animation={animation}
                view="default"
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
                </div>
            </Drawer>
        </div>
    );
};
