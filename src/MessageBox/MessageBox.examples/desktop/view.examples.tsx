import React from 'react';

import { Button } from '../../../Button/Button.bundle/desktop';
import { MessageBox } from '../../MessageBox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { cnTheme } from '../../../Theme';
import { theme } from '../../../Theme/presets/default';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

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

View.story = {
    name: 'view',
};
