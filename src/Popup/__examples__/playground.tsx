import React, { useRef } from 'react';
import { select, boolean, object, text } from '@storybook/addon-knobs';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';

const allDirections = [
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'left-top',
    'left-center',
    'left-bottom',
];

export const Playground = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const visible = boolean('visible', !true);
    const nonvisual = boolean('nonvisual', false) as any;
    const children = text(
        'children',
        'Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.',
    ) as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'clear'], 'normal') as any) : null;
    const position = object('position ', { top: 0, left: 0 }) as any;
    const direction = select('direction', allDirections, 'bottom-center') as any;

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Popup
                scope={scopeRef}
                theme={theme}
                view={view}
                direction={direction}
                visible={visible}
                nonvisual={nonvisual}
                position={position}
                style={{ maxWidth: 280 }}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>{children}</div>
            </Popup>
        </div>
    );
};
