import React, { useState, useCallback, useRef } from 'react';

import { usePreventScroll } from '@yandex-lego/components/usePreventScroll';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const styles = `
    .scrollable {
        overflow: auto;
        height: 200px;
        border: 1px solid #e5e5e5;
        padding: 12px;
        border-radius: 4px;
        margin-top: 16px;
    }

    .skeleton {
        height: 20px;
        border-radius: 1px;
        background-color: rgb(240, 240, 240);
    }

    .skeleton + .skeleton {
        margin-top: 8px;
    }
`;

export const Default = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);
    const toggle = useCallback(() => setEnabled((v) => !v), []);

    usePreventScroll({ enabled, containerRef });

    const content = [];
    for (let i = 0; i <= 50; i++) {
        content.push(<div key={i} className="skeleton" />);
    }

    return (
        <>
            <style>{styles}</style>
            <Button view="default" size="m" onClick={toggle}>
                {enabled ? 'Разблокировать scroll' : 'Заблокировать scroll'}
            </Button>
            <div ref={containerRef} className="scrollable">
                {content}
            </div>
        </>
    );
};
