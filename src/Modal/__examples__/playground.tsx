import React, { useRef, useState } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';

export const Playground = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef} style={{ height: 72 }}>
            <Button view="default" size="m" onClick={() => setVisible(true)}>
                Открыть
            </Button>
            <Modal theme="normal" scope={scopeRef} visible={visible} onClose={() => setVisible(false)} ariaLabelledBy="dialog-header">
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)', width: 400 }}>
                    <h1 style={{ marginBottom: 16, font: 'inherit' }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button view="clear" size="m" onClick={() => setVisible(false)}>
                            Отменить
                        </Button>
                        <Button view="default" size="m" onClick={() => setVisible(false)}>
                            Хорошо
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
