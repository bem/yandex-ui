import React, { FC, useRef, useState } from 'react';

import { useFocusTrap } from '@yandex-lego/components/useFocusTrap';

export const OrderHermioneCase: FC = () => {
    const [enabled, setEnabled] = useState(false);
    const scopeRef = useRef(null);

    useFocusTrap({ enabled, scopeRef, autoFocus: true, restoreFocus: true });

    return (
        <div>
            <button onClick={() => setEnabled((v) => !v)} data-test-id="trigger">
                trigger
            </button>

            {enabled && (
                <div ref={scopeRef}>
                    <input type="text" data-test-id="tabbable-6" />
                    <input type="text" data-test-id="tabbable-4" tabIndex={3} />
                    <input type="text" data-test-id="tabbable-2" tabIndex={2} />
                    <input type="text" data-test-id="tabbable-1" tabIndex={1} />
                    <input type="text" data-test-id="tabbable-3" tabIndex={2} />
                    <input type="text" data-test-id="tabbable-5" tabIndex={4} />
                </div>
            )}
        </div>
    );
};
