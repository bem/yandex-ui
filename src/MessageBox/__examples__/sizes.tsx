import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { MessageBox } from '@yandex-lego/components/MessageBox/desktop/bundle';

export const Size = () => (
    <>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="default"
                size="s"
                actions={
                    <>
                        <Button size="s" view="action">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новый раздел с вашими покупками
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="default"
                size="m"
                actions={
                    <>
                        <Button size="m" view="action">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новая почта <b>squorax@gmail.com</b> привязана к вашему аккаунту
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="default"
                size="l"
                actions={
                    <>
                        <Button size="l" view="action">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Письмо содержит неверную или поддельную информацию об отправителе. Также кто-то мог изменить текст
                письма после его отправки.
            </MessageBox>
        </div>
    </>
);
