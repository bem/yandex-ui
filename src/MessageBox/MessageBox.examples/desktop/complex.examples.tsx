import React from 'react';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { MessageBox, Wrapper } from '@yandex-lego/components/MessageBox/desktop/bundle';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';
import { Progress } from '@yandex-lego/components/Progress/desktop/bundle';

import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';
import { theme as brandTheme } from '@yandex-lego/components/Theme/presets/brand';

export const Complex = () => (
    <div className={cnTheme(theme)}>
        <div style={{ padding: '16px' }}>
            <MessageBox
                size="l"
                view="default"
                onClose={() => {}}
                background={
                    <img
                        style={{ filter: 'opacity(.5)', width: '100%' }}
                        src="//jing.yandex-team.ru/files/axaxaman/catalogue-banner-x3.jpeg"
                    />
                }
            >
                <Wrapper>
                    <p>Навык дня</p>
                    <h1>Развивайте речь ребенка</h1>
                    <p>Тренажер для развития речи</p>
                </Wrapper>
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                view="default"
                background={<Progress style={{ height: '100%', backgroundColor: '#2196f3' }} value={0.65} />}
            >
                <Wrapper
                    leading={
                        <span className={cnTheme(brandTheme)}>
                            <Spin view="default" size="xs" progress />
                        </span>
                    }
                    trailing={
                        <Button view="clear" size="s">
                            Отменить
                        </Button>
                    }
                >
                    <b>Загружено 35 из 54 файлов</b>
                    <br />
                    Осталось 1 час 30 минут
                </Wrapper>
            </MessageBox>
        </div>
    </div>
);
