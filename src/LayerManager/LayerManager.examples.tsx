import React, { useState, useRef } from 'react';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';

import { cnTheme } from '../Theme';
import { presets } from '../Theme/presets';
import { Button } from '../Button/Button.bundle/desktop';
import { Popup } from '../Popup/Popup.bundle/desktop';
import { Modal } from '../Modal/Modal.bundle/desktop';
import { MessageBoxPopup } from '../MessageBox/MessageBox.bundle/desktop';
import { TooltipStateful } from '../Tooltip/Tooltip.bundle/desktop';
import { Select } from '../Select/Select.bundle/desktop';

export default {
    title: 'Utility|LayerManager (I)',
    decorators: [createScopeDecorator('desktop', 'lego')],
    parameters: {
        docs: {
            readme: require('./LayerManager.md'),
        },
    },
};

export const ComplexPopup = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const buttonRef1 = useRef<HTMLDivElement>(null);
    const buttonRef2 = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootRef} className={cnTheme(presets.default)} style={{ position: 'relative' }}>
            <Button innerRef={buttonRef1} view="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Popup
                visible={visible1}
                scope={rootRef}
                anchor={buttonRef1}
                onClose={() => setVisible1(false)}
                target="anchor"
                view="default"
                hasTail
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                    content-1
                    <Button innerRef={buttonRef2} view="default" size="m" onClick={() => setVisible2(!visible2)}>
                        Открыть
                    </Button>
                </div>
                <Popup
                    visible={visible2}
                    scope={rootRef}
                    anchor={buttonRef2}
                    onClose={() => setVisible2(false)}
                    target="anchor"
                    view="default"
                    hasTail
                >
                    <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>content-2</div>
                </Popup>
            </Popup>
        </div>
    );
};

ComplexPopup.story = {
    name: 'complex-popup',
};

export const ComplexModal = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const [value1, setValue1] = useState('');

    const buttonRef1 = useRef<HTMLDivElement>(null);
    const buttonRef2 = useRef<HTMLDivElement>(null);
    const buttonRef3 = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootRef} className={cnTheme(presets.default)} style={{ position: 'relative' }}>
            <Button innerRef={buttonRef1} view="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Modal theme="normal" scope={rootRef} visible={visible1} onClose={() => setVisible1(false)}>
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)', width: 400 }}>
                    <div style={{ marginBottom: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        <div>
                            <Select
                                size="m"
                                view="default"
                                value={value1}
                                onChange={(event) => setValue1(event.target.value)}
                                options={[
                                    { value: 'a', content: 'Каждый' },
                                    { value: 'b', content: 'Охотник' },
                                    { value: 'c', content: 'Желает' },
                                    { value: 'd', content: 'Знать' },
                                    { value: 'e', content: 'Где', disabled: true },
                                    { value: 'f', content: 'Сидит' },
                                    { value: 'g', content: 'Фазан' },
                                ]}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button view="default" size="m" innerRef={buttonRef3} onClick={() => setVisible3(!visible3)}>
                            Открыть MessageBox
                        </Button>
                        <MessageBoxPopup
                            onClose={() => setVisible3(false)}
                            visible={visible3}
                            scope={rootRef}
                            hasTail
                            anchor={buttonRef3}
                            direction="bottom-center"
                            view="default"
                            size="m"
                        >
                            Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        </MessageBoxPopup>

                        <Button view="default" size="m" innerRef={buttonRef2} onClick={() => setVisible2(!visible2)}>
                            Открыть Popup
                        </Button>
                        <Popup
                            hasTail
                            visible={visible2}
                            scope={rootRef}
                            anchor={buttonRef2}
                            onClose={() => setVisible2(false)}
                            target="anchor"
                            view="default"
                        >
                            <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                                <TooltipStateful
                                    hasTail
                                    scope={rootRef}
                                    view="default"
                                    size="m"
                                    content="Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
                                    trigger="click"
                                >
                                    <Button view="default" size="m">
                                        Открыть Tooltip
                                    </Button>
                                </TooltipStateful>
                            </div>
                        </Popup>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

ComplexModal.story = {
    name: 'complex-modal',
};
