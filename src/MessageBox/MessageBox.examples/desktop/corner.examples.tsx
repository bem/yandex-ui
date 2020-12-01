import React from 'react';

import { MessageBox, Corner } from '@yandex-lego/components/MessageBox/desktop/bundle';

import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

export const Corners = () => (
    <div style={{ padding: '16px' }} className={cnTheme(theme)}>
        <MessageBox
            view="default"
            size="l"
            corner={
                <Corner width={42} side="bottom-right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
                        <path
                            fill="#ffd426"
                            stroke="#f6cf2e"
                            d="M17.644 34.455l9.906 13.912 4.949-16.171
                            16.296-4.911-14.02-9.83.167-16.948-13.614
                            10.096L5.135 5.039l5.606 16.07L.567
                            34.62z"
                        />
                    </svg>
                </Corner>
            }
        >
            Письмо содержит неверную или поддельную информацию об отправителе. Также кто-то мог изменить текст письма
            после его отправки.
        </MessageBox>
    </div>
);
