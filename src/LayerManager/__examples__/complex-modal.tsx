import React, { useState, useRef } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';
import { MessageBoxPopup } from '@yandex-lego/components/MessageBox/desktop/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';
import { Select } from '@yandex-lego/components/Select/desktop/bundle';

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
        <div ref={rootRef} style={{ position: 'relative', height: '500px' }}>
            <Button innerRef={buttonRef1} view="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Modal theme="normal" visible={visible1} onClose={() => setVisible1(false)} scope={rootRef}>
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
                            scope={rootRef}
                            onClose={() => setVisible3(false)}
                            visible={visible3}
                            hasTail
                            anchor={buttonRef3}
                            direction="bottom"
                            view="default"
                            size="m"
                        >
                            Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        </MessageBoxPopup>

                        <Button view="default" size="m" innerRef={buttonRef2} onClick={() => setVisible2(!visible2)}>
                            Открыть Popup
                        </Button>
                        <Popup
                            scope={rootRef}
                            hasTail
                            visible={visible2}
                            anchor={buttonRef2}
                            onClose={() => setVisible2(false)}
                            target="anchor"
                            view="default"
                        >
                            <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>
                                <TooltipStateful
                                    hasTail
                                    view="default"
                                    size="m"
                                    content="Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
                                    trigger="click"
                                    scope={rootRef}
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
