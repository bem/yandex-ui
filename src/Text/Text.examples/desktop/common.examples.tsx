import { select, withKnobs } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import { createDecorators, EXAMPLE_DESKTOP_TOKEN, parameters } from '../example-config';
import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Text, TextProps } from '../../Text.bundle/desktop';
import { maps, pin, stat, typographyValues } from './assets';
import 'yandex-font/build/browser.css';
import './common.css';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators()],
    parameters,
};

const Unit: FC<Partial<TextProps> & { groupId?: string }> = ({
    weight = 'regular',
    groupId,
    typography,
    className,
    as,
    ...props
}) => {
    const weightSelect = select(
        'Weight',
        [
            'light',
            'regular',
            'medium',
            'bold',
        ],
        weight,
        groupId,
    );
    const typographySelect = select<Required<TextProps>['typography']>(
        'Typography', typographyValues, typography!, groupId,
    );

    return (
        <Text
            as={as}
            className={className}
            typography={typographySelect}
            weight={weightSelect}
            {...props}
        />
    );
};

const Headline1 = (props: Partial<TextProps>) => (
    <Unit
        as="h1"
        typography="display-xl"
        weight="light"
        groupId="Display"
        { ...props }
    />
);

const Headline2 = (props: Partial<TextProps>) => (
    <Unit
        as="h2"
        typography="headline-xl"
        weight="medium"
        groupId="Headline"
        {...props}
    />
);

const Headline3 = (props: Partial<TextProps>) => (
    <Unit
        as="h3"
        typography="subheader-xl"
        weight="medium"
        groupId="Subheader"
        { ...props }
    />
);

const Paragraph = ({ typography = 'body-long-xl', ...props }: Partial<TextProps>) => (
    <Unit
        as="p"
        typography={typography}
        weight="regular"
        groupId={typography === 'body-long-xl' ? 'Paragraph Long' : 'Paragrapth Short'}
        { ...props }
    />
);

const Caption = (props: Partial<TextProps>) => (
    <Unit
        as="p"
        typography="caption-l"
        weight="regular"
        groupId="Caption"
        { ...props }
    />
);

const Overline = (props: Partial<TextProps>) => (
    <Unit
        as="p"
        typography="overline-s"
        weight="medium"
        groupId="Overline"
        {...props}
    />
);

export const Common = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    return (
        <section className={cnTheme(presets[preset])} style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Headline1 className="display">
                Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.
            </Headline1>
            <Headline2 className="headline">
                Счастье пользователей
            </Headline2>
            <Paragraph className="body-long">
                Все сервисы Яндекса сделаны для того, чтобы улучшать и упрощать жизнь людей. Каждый из наших сервисов
                помогает делать что-то, что ещё вчера казалось невозможным. Несколько лет назад мы не могли представить
                себе, что можно понять текст на незнакомом языке, не выясняя в словаре перевод каждого отдельного слова.
                Что можно мгновенно узнать адрес ближайшей работающей аптеки, находясь в любой точке города. Что такси
                не надо ждать или заказывать заранее. А сейчас это все совершенно обычные вещи.
            </Paragraph>
            <Paragraph>
                Это и есть то, чем Яндекс занимается, — создает сервисы для людей. Сервисы, которые, с одной стороны,
                обладают глубоким знанием окружающего мира, с другой стороны, понимают интересы пользователей. Сервисы,
                которые меняют привычную среду и помогают людям достигать своих целей в жизни.
            </Paragraph>
            <Paragraph>
                «Счастье пользователей» — очень важное для нас понятие. Среди прочего оно означает, что польза, которую
                приносит сервис, и то, насколько приятно с ним работать, для нас важнее, чем его монетизация. Как
                правило, если нам удается сделать хороший сервис, который нравится людям, его модель монетизации
                образуется сама собой. При этом она обязана учитывать интересы пользователя.
            </Paragraph>
            <Paragraph>
                Основа нашей работы — технологический подход и статистическая проверка всех содержательных изменений на
                наших сервисах. Любое изменение должно быть обосновано — это помогает нам понять, действительно ли оно
                полезно, действительно ли хорошо для пользователей.
            </Paragraph>
            <Headline3 className="subheader">
                1. Мы работаем для пользователей
            </Headline3>
            <Paragraph typography="body-short-xl" style={{ columnCount: 2 }} className="body-short">
                Наша главная цель — создавать качественные сервисы для миллионов пользователей интернета, и это
                отражено во внутренних документах Яндекса. Важно, чтобы к достижению этой цели стремился каждый
                член команды Яндекс ожидает, что члены команды будут чувствовать ответственность не только за свою
                часть работы, но и за продукт в целом. Будьте неравнодушны к отзывам пользователей, предлагайте
                усовершенствования.
            </Paragraph>
            <ul>
                <li>
                    <img src={maps} alt="" />
                    <Headline3 className="subheader">
                        Выход в город
                    </Headline3>
                    <Paragraph typography="body-short-xl" overflow="ellipsis" maxLines={2} className="body-short">
                        Как выглядели бы карты метро, если бы станции назывались в честь музеев, парков, гостиниц,
                        больниц и других мест, которые притягивают людей на эти станции.
                    </Paragraph>
                    <Caption className="caption" color="secondary">
                        Москва • Санкт-Петербург • Минск
                    </Caption>
                    <Overline className="overline" color="secondary">
                        ИССЛЕДОВАНИЯ • 14 МАЙ 2019
                    </Overline>
                </li>
                <li>
                    <img src={pin} alt="" />
                    <Headline3>
                        Выход в город
                    </Headline3>
                    <Paragraph typography="body-short-xl" overflow="fade" maxLines={2}>
                        Как выглядели бы карты метро, если бы станции назывались в честь музеев, парков, гостиниц,
                        больниц и других мест, которые притягивают людей на эти станции.
                    </Paragraph>
                    <Caption color="secondary">
                        Москва • Санкт-Петербург • Минск
                    </Caption>
                    <Overline color="secondary">
                        ИССЛЕДОВАНИЯ • 14 МАЙ 2019
                    </Overline>
                </li>
                <li>
                    <img src={stat} alt="" />
                    <Headline3>
                        Выход в город
                    </Headline3>
                    <Paragraph typography="body-short-xl" overflow="fade-horizontal" maxLines={2}>
                        Как выглядели бы карты метро, если бы станции назывались в честь музеев, парков, гостиниц,
                        больниц и других мест, которые притягивают людей на эти станции.
                    </Paragraph>
                    <Caption color="secondary">
                        Москва • Санкт-Петербург • Минск
                    </Caption>
                    <Overline color="secondary">
                        ИССЛЕДОВАНИЯ • 14 МАЙ 2019
                    </Overline>
                </li>
            </ul>
        </section>
    );
};

Common.story = {
    name: 'common',
};
