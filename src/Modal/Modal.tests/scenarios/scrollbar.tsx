import React, { FC, useCallback, useRef } from 'react';

import { BPage } from '@yandex-lego/components/internal/components/BPage/BPage@desktop';
import { Hermione } from '@yandex-lego/components/internal/components/Hermione/Hermione';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';

import { Skeleton } from '../Hermione.components/Skeleton/Skeleton';

const cssVariables = {
    scrollbarWidth: '12px',
    colorScrollTrack: 'transparent',
    colorScrollCorner: 'rgba(0, 0, 0, 0.1)',
    colorScrollHandle: 'rgba(0, 0, 0, 0.1)',
    colorScrollHandleHover: 'rgba(0, 0, 0, 0.15)',
};

const getStyles = (overflow: string) => `
    html {
        scrollbar-width: ${cssVariables.scrollbarWidth};
        scrollbar-color: ${cssVariables.colorScrollHandle} ${cssVariables.colorScrollTrack};
    }

    ::-webkit-scrollbar {
        width: ${cssVariables.scrollbarWidth} !important;
        height: ${cssVariables.scrollbarWidth} !important;
        background-color: ${cssVariables.colorScrollTrack} !important;
    }

    ::-webkit-scrollbar-track {
        background-color: ${cssVariables.colorScrollTrack} !important;
    }

    ::-webkit-scrollbar-corner {
        background-color: ${cssVariables.colorScrollCorner} !important;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${cssVariables.colorScrollHandle} !important;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${cssVariables.colorScrollHandleHover} !important;
    }

    /* 1. Необходимо, чтобы на скриншоте появился scrollbar */
    html {
        overflow: hidden; /*1*/
        height: 100%;
    }

    body {
        overflow-y: ${overflow}; /*1*/
        height: 100%;
    }

    .modal-content {
        width: 50vw;
    }
`;

export const ScrollBarHermioneCase: FC<any> = (props) => {
    const { modalLines = 10, bodyLines = 50, overflow = 'auto' } = props;
    const [visible, setVisible] = React.useState(false);
    const scopeRef = useRef(null);

    const open = useCallback(() => setVisible(true), []);
    const close = useCallback(() => setVisible(false), []);

    return (
        <>
            <style>{getStyles(overflow)}</style>
            <BPage innerRef={scopeRef}>
                <Hermione>
                    <Hermione element="Trigger" onClick={open}>
                        open modal
                    </Hermione>

                    <Skeleton lines={bodyLines} />

                    <Modal onClose={close} scope={scopeRef} theme="normal" visible={visible}>
                        <div className="modal-content">
                            <Skeleton lines={modalLines} />
                        </div>
                    </Modal>
                </Hermione>
            </BPage>
        </>
    );
};
