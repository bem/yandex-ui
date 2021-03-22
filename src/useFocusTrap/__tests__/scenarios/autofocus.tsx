import React, { FC, useRef, useState } from 'react';

import { useFocusTrap } from '@yandex-lego/components/useFocusTrap';

export const AutofocusHermioneCase: FC = () => {
    const [enabled, setEnabled] = useState(false);
    const scopeRef = useRef(null);

    useFocusTrap({ enabled, scopeRef });

    return (
        <div>
            <button onClick={() => setEnabled((v) => !v)} data-test-id="trigger">
                trigger
            </button>

            {enabled && (
                <div ref={scopeRef}>
                    <div>
                        <a href="#">link</a>
                    </div>
                    <div>
                        <input id="autofocused-input" autoFocus data-test-id="autofocus-element" />
                    </div>
                </div>
            )}
        </div>
    );
};
