import React from 'react';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { MessageBox, Corner } from '@yandex-lego/components/MessageBox/desktop/bundle';

import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

export const Layout = () => {
    return (
        <div className={cnTheme(theme)}>
            <div style={{ padding: '16px' }}>
                <MessageBox
                    view="default"
                    size="m"
                    layout="plain"
                    corner={[
                        <Corner key="corner" width={42} side="top-left">
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
                        </Corner>,
                    ]}
                >
                    Жмите сюда, скорей
                </MessageBox>
            </div>
            <div style={{ padding: '16px' }}>
                <MessageBox view="default" size="m" layout="tooltip">
                    Пометить письмо как важное <i key="i">Shift + l</i>
                </MessageBox>
            </div>
            <div style={{ padding: '16px' }}>
                <MessageBox
                    view="default"
                    size="m"
                    layout="functional"
                    onClose={() => {}}
                    actions={
                        <>
                            <Button size="m" view="clear">
                                Нет
                            </Button>
                            <Button size="m" view="action">
                                Да
                            </Button>
                        </>
                    }
                >
                    Согласны?
                </MessageBox>
            </div>
        </div>
    );
};
