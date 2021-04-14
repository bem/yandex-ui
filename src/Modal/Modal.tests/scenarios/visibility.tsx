import React, { FC, useCallback, useRef } from 'react';

import { BPage } from '@yandex-lego/components/internal/components/BPage/BPage@desktop';
import { Hermione } from '@yandex-lego/components/internal/components/Hermione/Hermione';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';

const styles = `
    .modal-content {
        padding: 20px;
        color: #000;
        visibility: visible;
    }
`;

export const VisibilityHermioneCase: FC<any> = () => {
    const [visible, setVisible] = React.useState(false);
    const scopeRef = useRef(null);

    const open = useCallback(() => setVisible(true), []);
    const close = useCallback(() => setVisible(false), []);

    return (
        <>
            <style>{styles}</style>
            <BPage innerRef={scopeRef}>
                <Hermione>
                    <Hermione element="Trigger" onClick={open}>
                        open modal
                    </Hermione>

                    <Modal onClose={close} scope={scopeRef} theme="normal" visible={visible}>
                        <div className="modal-content">Modal Content</div>
                    </Modal>
                </Hermione>
            </BPage>
        </>
    );
};
