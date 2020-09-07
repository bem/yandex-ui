import React from 'react';

import { MessageBox } from '../../MessageBox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { cnTheme } from '../../../Theme';
import { theme } from '../../../Theme/presets/default';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Text = () => {
    return (
        <div className={cnTheme(theme)}>
            <MessageBox
                view="default"
                size="s"
                layout="tooltip"
            >
                Пометить письмо как важное <i key="i">Shift + l</i>
            </MessageBox>
            <br />
            <br />
            <MessageBox
                view="default"
                size="m"
                layout="tooltip"
            >
                Письмо содержит неверную или поддельную информацию об отправителе.
                <br />
                Также кто-то мог изменить текст письма после его отправки.
            </MessageBox>
            <br />
            <br />
            <MessageBox
                view="default"
                size="l"
                layout="tooltip"
            >
                Письмо содержит неверную или поддельную информацию об отправителе.
                <br />
                Также кто-то мог изменить текст письма после его отправки.
                <br key="br1" />
                <br key="br2" />
                <b key="b1">Подпись</b> отсутствует
                <br key="br3" />
                <b key="b2">Шифрования</b> нет
                <br key="br4" />
                <b key="b3">Сборщик</b> enb@yandex-team.ru
            </MessageBox>
        </div>
    );
};

Text.story = {
    name: 'text',
};
