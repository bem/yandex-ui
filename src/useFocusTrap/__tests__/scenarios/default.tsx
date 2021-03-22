import React, { FC, useRef, useState } from 'react';

import { useFocusTrap } from '@yandex-lego/components/useFocusTrap';

export const DefaultHermioneCase: FC = () => {
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
                    <a href="#" data-test-id="link-1">
                        Link 1
                    </a>
                    <a href="#" data-test-id="link-2">
                        Link 2
                    </a>
                    <a href="#" data-test-id="link-3">
                        Link 3
                    </a>
                </div>
            )}
        </div>
    );
};
