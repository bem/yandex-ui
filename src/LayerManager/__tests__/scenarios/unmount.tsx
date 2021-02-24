import React, { FC, useCallback, useRef, useState } from 'react';

import { LayerManager } from '@yandex-lego/components/LayerManager';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        border: 1px solid rgb(0, 0, 0);
        width: 200px;
        padding: 20px;
    }

    .layer {
        display: none;
        border: 1px solid rgb(0, 0, 0);
        padding: 20px;
    }
`;

export const UnmountHermioneCase: FC<any> = () => {
    const togglerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [renderButton, setRenderButton] = useState(true);
    const [layerVisible, setLayerVisible] = useState(false);

    const handleToggle = useCallback(() => setLayerVisible((v) => !v), []);
    const handleClose = useCallback(() => setLayerVisible(false), []);
    const handleUnmount = useCallback(() => setRenderButton(false), []);

    return (
        <>
            <style>{styles}</style>

            <div data-test-id="container" className="container">
                <div ref={togglerRef} data-test-id="toggler" onClick={handleToggle}>
                    toggle layer
                </div>
                <LayerManager visible={layerVisible} onClose={handleClose} essentialRefs={[contentRef, togglerRef]}>
                    <div ref={contentRef} className="layer" style={{ display: layerVisible ? 'block' : 'none' }}>
                        content
                        {renderButton && (
                            <div data-test-id="trigger" onClick={handleUnmount}>
                                unmount
                            </div>
                        )}
                    </div>
                </LayerManager>
            </div>
        </>
    );
};
