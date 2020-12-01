import React from 'react';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { MessageBox } from '@yandex-lego/components/MessageBox/desktop/bundle';

import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

export const View = () => (
    <div className={cnTheme(theme)}>
        <div style={{ backgroundColor: '#fff', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="default"
                size="m"
                actions={
                    <>
                        <Button view="clear" size="s">
                            Отклонить
                        </Button>
                        <Button view="action" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: '#000', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="inverse"
                size="m"
                actions={
                    <>
                        <Button view="clear" size="s">
                            Отклонить
                        </Button>
                        <Button view="action" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                view="promo"
                size="m"
                actions={
                    <>
                        <Button view="action" size="s">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Сохраняйте картинки, полезные ссылки, фотографии красивых мест и многое другое в коллекции
            </MessageBox>
        </div>
    </div>
);
