import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { MessageBox } from '@yandex-lego/components/MessageBox/desktop/bundle';

export const Buttons = () => (
    <div style={{ padding: '16px' }}>
        <MessageBox
            onClose={() => null}
            view="default"
            size="m"
            actions={
                <>
                    <Button view="clear" size="m">
                        Отклонить
                    </Button>
                    <Button view="action" size="m">
                        Принять
                    </Button>
                </>
            }
        >
            Новая почта с классными темами теперь для вас!
        </MessageBox>
    </div>
);
