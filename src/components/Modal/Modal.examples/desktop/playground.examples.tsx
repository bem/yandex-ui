import React, { createRef, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../../Button/Button.bundle/desktop';
import { Modal } from '../../Modal.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const scopeRef = createRef<HTMLDivElement>();

export const Playground = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div ref={scopeRef} style={{ height: 72 }}>
            <Button view="default" size="m" onClick={() => setVisible(true)}>
                Открыть
            </Button>
            <Modal theme="normal" scope={scopeRef} visible={visible} onClose={() => setVisible(false)}>
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)', width: 400 }}>
                    <div style={{ marginBottom: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
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

Playground.story = {
    name: 'playground',
};
