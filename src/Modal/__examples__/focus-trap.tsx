import React, { FC, useCallback, useRef, useState } from 'react';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

import { ModalContent } from './stubs/ModalContent';
import { Field } from './stubs/Field';

export const FocusTrap: FC = () => {
    const [visible, setVisible] = useState(false);
    const scopeRef = useRef<HTMLDivElement>(null);
    const restoreFocusRef = useRef<HTMLButtonElement>(null);
    const handleOpen = useCallback(() => setVisible(true), []);
    const handleClose = useCallback(() => setVisible(false), []);

    return (
        <div ref={scopeRef}>
            <Button view="default" size="m" onClick={handleOpen}>
                Открыть
            </Button>
            &nbsp;
            <Button innerRef={restoreFocusRef} view="default" size="m">
                Фокус будет здесь после закрытия
            </Button>
            <Modal
                scope={scopeRef}
                theme="normal"
                visible={visible}
                restoreFocusRef={restoreFocusRef}
                onClose={handleClose}
                zIndex={1}
            >
                <ModalContent
                    header="Создание учётной записи"
                    footer={
                        <>
                            <Button view="default" size="m" onClick={handleClose}>
                                Закрыть
                            </Button>
                        </>
                    }
                >
                    <Field label="Имя">
                        <Textinput view="default" size="m" />
                    </Field>

                    <Field label="Фамилия">
                        <Textinput view="default" size="m" />
                    </Field>
                </ModalContent>
            </Modal>
        </div>
    );
};
