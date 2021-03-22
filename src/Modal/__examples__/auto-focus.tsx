import React, { FC, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

import { ModalContent } from './stubs/ModalContent';
import { Field } from './stubs/Field';

interface UseAutoFocusOptions {
    enabled?: boolean | undefined;
    focusRef?: RefObject<HTMLElement>;
}

function useAutoFocus(options: UseAutoFocusOptions) {
    const { enabled, focusRef } = options;
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (focusRef && ref.current !== focusRef.current) {
            ref.current = focusRef.current;
        }
    });

    useEffect(() => {
        if (enabled && ref.current) {
            ref.current.focus();
        }
    }, [enabled]);
}

export const AutoFocus: FC = () => {
    const [visible, setVisible] = useState(false);
    const scopeRef = useRef<HTMLDivElement>(null);
    const handleOpen = useCallback(() => setVisible(true), []);
    const handleClose = useCallback(() => setVisible(false), []);

    const initialFocusRef = useRef<HTMLInputElement>(null);
    useAutoFocus({ enabled: visible, focusRef: initialFocusRef });

    return (
        <div ref={scopeRef}>
            <Button view="default" size="m" onClick={handleOpen}>
                Открыть
            </Button>

            <Modal scope={scopeRef} theme="normal" visible={visible} onClose={handleClose} zIndex={1}>
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
                        <Textinput controlRef={initialFocusRef} view="default" size="m" />
                    </Field>
                </ModalContent>
            </Modal>
        </div>
    );
};
