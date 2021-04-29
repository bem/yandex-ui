import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';

export const Delay = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '32px' }}>
        <TooltipStateful view="default" size="m" hasTail content="Opened after 500ms" trigger="hover" openDelay={500}>
            <Button view="default" size="m">
                Delay Open - 500ms
            </Button>
        </TooltipStateful>
        <TooltipStateful view="default" size="m" hasTail content="Closed after 500ms" trigger="hover" closeDelay={500}>
            <Button view="default" size="m">
                Delay Close - 500ms
            </Button>
        </TooltipStateful>
    </div>
);
