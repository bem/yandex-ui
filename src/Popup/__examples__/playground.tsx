import React, { useState, useRef } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Popup, directions } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Playground = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(!false);
    const children = text(
        'children',
        'Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.',
    );
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'clear'], 'normal') as any) : null;
    const direction = select('direction', directions, 'bottom-start');

    return (
        <>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" view="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction={direction}
                view={view}
                theme={theme}
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>{children}</div>
            </Popup>
        </>
    );
};
