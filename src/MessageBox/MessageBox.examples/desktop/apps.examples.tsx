import React, { FC, useRef } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Wrapper, MessageBoxPopup } from '../../../MessageBox/MessageBox.bundle/desktop';
import { Button } from '../../../Button/Button.bundle/desktop';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
};

const AnchorBox: FC<any> = ({ innerRef, children }) => (
    <div
        style={{
            background: '#e6e6e6',
            boxSizing: 'border-box',
            padding: 64,
            borderRadius: 4,
            display: 'inline-flex',
        }}
        ref={innerRef}
    >
        {children}
    </div>
);

export const MiniApps = () => {
    const preset = select('theme-preset', presetsKeys, 'turbo');
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef} className={cnTheme(presets[preset])} style={{ position: 'relative' }}>
            <div style={{ backgroundColor: 'var(--color-bg-default)', margin: '64px 480px 240px 480px' }}>
                <AnchorBox innerRef={anchorRef1} />

                <MessageBoxPopup
                    opaque
                    visible
                    view="default"
                    size="s"
                    layout="tooltip"
                    scope={scopeRef}
                    anchor={anchorRef1}
                    direction="left-center"
                >
                    <Wrapper align="left">Подсказка</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="bottom-center"
                    anchor={anchorRef1}
                    view="default"
                    size="s"
                    layout="tooltip"
                >
                    <Wrapper align="left">Подсказка</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="top-center"
                    anchor={anchorRef1}
                    view="default"
                    size="s"
                    layout="tooltip"
                >
                    <Wrapper align="left">Подсказка</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="right-center"
                    anchor={anchorRef1}
                    view="default"
                    size="s"
                    layout="tooltip"
                >
                    <Wrapper align="left">Подсказка</Wrapper>
                </MessageBoxPopup>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-default)', margin: '64px 480px 240px 480px' }}>
                <AnchorBox innerRef={anchorRef2} />

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="top-center"
                    anchor={anchorRef2}
                    view="promo"
                    size="m"
                    layout="plain"
                >
                    <Wrapper align="left">Нажатое состояние кнопки в бабле — 0.5 alpha</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="bottom-center"
                    anchor={anchorRef2}
                    view="promo"
                    size="m"
                    layout="plain"
                    actions={
                        <>
                            <Button
                                // @ts-ignore
                                style={{ borderTopWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.2)' }}
                                size="m"
                                view="clear"
                                width="max"
                            >
                                Войти
                            </Button>
                        </>
                    }
                >
                    <Wrapper align="left">Нажатое состояние кнопки в бабле — 0.5 alpha</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="left-center"
                    onClose={() => null}
                    anchor={anchorRef2}
                    view="promo"
                    size="m"
                    layout="plain"
                >
                    <Wrapper align="left">Нажатое состояние кнопки в бабле — 0.5 alpha</Wrapper>
                </MessageBoxPopup>

                <MessageBoxPopup
                    opaque
                    visible
                    hasTail
                    tailType="rounded"
                    scope={scopeRef}
                    direction="right-center"
                    anchor={anchorRef2}
                    onClose={() => null}
                    view="promo"
                    size="m"
                    layout="plain"
                    actions={
                        <>
                            <Button
                                // @ts-ignore
                                style={{ borderTopWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.2)' }}
                                size="m"
                                view="clear"
                                width="max"
                            >
                                Войти
                            </Button>
                        </>
                    }
                >
                    <Wrapper align="left">Нажатое состояние кнопки в бабле — 0.5 alpha</Wrapper>
                </MessageBoxPopup>
            </div>
        </div>
    );
};

MiniApps.story = {
    name: 'apps',
};
