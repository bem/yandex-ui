import React, { createRef, useState } from 'react';

import { MessageBoxPopup } from '../../../MessageBox/MessageBox.bundle/desktop';

import { EXAMPLE_DESKTOP_TOKEN } from '../examples-config';
import { directions } from '../../../Popup';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
};

const scopeRef = createRef<HTMLDivElement>();
const anchorRef = createRef<HTMLDivElement>();
const smallAnchorRef = createRef<HTMLDivElement>();
const zIndexAnchorRef = createRef<HTMLDivElement>();

export const WithPopup = () => {
    const [arePopupsVisible, setPopupsVisible] = useState(true);
    const [areSmallAnchorPopupsVisible, setSmallAnchorPopupsVisible] = useState(true);
    const [withZIndexVisible, setWithZIndexVisible] = useState(true);

    return (
        <div
            style={{
                position: 'relative',
                margin: 64,
                display: 'grid',
                gridTemplateRows: '400px 250px 250px',
                justifyContent: 'center',
            }}
            ref={scopeRef}
        >
            <div
                style={{
                    background: '#e6e6e6',
                    height: 200,
                    width: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                }}
                ref={anchorRef}
                onClick={() => setPopupsVisible(!arePopupsVisible)}
            >
                Anchor
            </div>
            {directions.map((direction, index) => (
                <MessageBoxPopup
                    key={index}
                    visible={arePopupsVisible}
                    hasTail
                    scope={scopeRef}
                    direction={direction}
                    anchor={anchorRef}
                    view="default"
                    size="s"
                    onClose={() => setPopupsVisible(false)}
                >
                    {direction}
                </MessageBoxPopup>
            ))}
            <div
                style={{
                    background: '#000',
                    height: 10,
                    width: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                }}
                ref={smallAnchorRef}
                onClick={() => setSmallAnchorPopupsVisible(!areSmallAnchorPopupsVisible)}
            />
            <MessageBoxPopup
                secondaryOffset={-20}
                tailOffset={20}
                visible={areSmallAnchorPopupsVisible}
                hasTail
                scope={scopeRef}
                direction="bottom-end"
                anchor={smallAnchorRef}
                view="default"
                size="s"
            >
                bottom-right
            </MessageBoxPopup>
            <MessageBoxPopup
                secondaryOffset={-20}
                tailOffset={20}
                visible={areSmallAnchorPopupsVisible}
                hasTail
                scope={scopeRef}
                direction="top-start"
                anchor={smallAnchorRef}
                view="default"
                size="s"
            >
                bottom-right
            </MessageBoxPopup>
            <div
                style={{
                    background: '#F08080',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 10,
                }}>
                <div
                    style={{
                        background: '#000',
                        height: 30,
                        width: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 3,
                    }}
                    ref={zIndexAnchorRef}
                    onClick={() => setWithZIndexVisible(!withZIndexVisible)}
                />
                <MessageBoxPopup
                    visible={withZIndexVisible}
                    hasTail
                    scope={scopeRef}
                    direction="bottom"
                    anchor={zIndexAnchorRef}
                    view="default"
                    size="s"
                    onClose={() => setWithZIndexVisible(false)}
                >
                    With ZIndex
                </MessageBoxPopup>
            </div>
        </div>
    );
};
