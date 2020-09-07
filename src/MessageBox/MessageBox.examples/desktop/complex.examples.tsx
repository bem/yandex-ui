import React from 'react';

import { Button } from '../../../Button/Button.bundle/desktop';
import { Spin } from '../../../Spin/Spin.bundle/desktop';
import { Progress } from '../../../Progress/Progress.bundle/desktop';
import { MessageBox, Wrapper } from '../../MessageBox.bundle/desktop';
import { theme as brandTheme } from '../../../Theme/presets/brand';
import { theme } from '../../../Theme/presets/default';
import { cnTheme } from '../../../Theme';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

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

Complex.story = {
    name: 'complex',
};
