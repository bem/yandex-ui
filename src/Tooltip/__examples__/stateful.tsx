import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';

export const Stateful = () => (
    <div style={{ display: 'flex', height: 96 }}>
        <div style={{ marginLeft: 32, marginRight: 32 }}>
            <TooltipStateful
                view="default"
                size="m"
                hasTail
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
