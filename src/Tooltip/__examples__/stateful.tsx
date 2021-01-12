import React, { useRef } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';

export const Stateful = () => {
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative', display: 'flex', height: 96 }} ref={scopeRef}>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <TooltipStateful
                    view="default"
                    size="m"
                    hasTail
                    scope={scopeRef}
                    content="Stateful hover"
                    trigger="hover"
                >
                    <Button view="default" size="m">
                        Target hover
                    </Button>
                </TooltipStateful>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <TooltipStateful
                    view="default"
                    size="m"
                    hasTail
                    scope={scopeRef}
                    content="Stateful click"
                    trigger="click"
                >
                    <Button view="default" size="m">
                        Target click
                    </Button>
                </TooltipStateful>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <TooltipStateful
                    view="default"
                    size="m"
                    hasTail
                    scope={scopeRef}
                    content="Stateful focus"
                    trigger="focus"
                >
                    <Button view="default" size="m">
                        Target focus
                    </Button>
                </TooltipStateful>
            </div>
        </div>
    );
};
