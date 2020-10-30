import React from 'react';

import { Textinput } from '../../Textinput.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { Icon } from '../../../Icon/Icon.bundle/common';
import { Text } from '../../../Text/Text.bundle/common';
import { ListTile } from '../../../ListTile/ListTile';
import { Spacer } from '../../../Spacer/Spacer';
import { IconProps } from '../../../Checkbox/Checkbox.registry/desktop';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const IconCross = ({ style, ...props }: IconProps) => (
    <Icon
        glyph="type-cross"
        style={{
            ...style,
            width: 24,
            height: 24,
        }}
        {...props}
    />
);

export const MiniApps = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '1rem',
            }}>
            {([
                undefined,
                'filled',
                'outlined',
            ]).map((variant: any, idx) => (
                <div key={idx}>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Без лейбла
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Без лейбла c иконками
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Пустое поле
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                            label="Заголовок"
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Пустое поле
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Заполненное
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            defaultValue="Текст"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Заполненное c ListTile и Spacer
                        </Text>
                        <Spacer left={16}>
                            <ListTile
                                alignItems="center"
                                leftSpace="m"
                                leading={
                                    <IconCross
                                        style={{
                                            color: 'rgba(0, 0, 0, 0.8)',
                                        }} />
                            }
                        >
                                <Textinput
                                    view="material"
                                    variant={variant}
                                    label="Заголовок"
                                    defaultValue="Текст"
                                    iconRight={
                                        <IconCross />
                                    }
                            />
                            </ListTile>
                        </Spacer>
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            С подсказкой
                        </Text>
                        <Textinput
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            defaultValue="Текст"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                            hint="Подсказка"
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            С ошибкой
                        </Text>
                        <Textinput
                            state="error"
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            defaultValue="Текст"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                            hint="Подсказка"
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Выключенное
                        </Text>
                        <Textinput
                            disabled
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            defaultValue="Текст"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                        />
                    </div>
                    <div>
                        <Text as="h3" typography="body-short-xl" color="secondary">
                            Выключенное с подсказкой
                        </Text>
                        <Textinput
                            disabled
                            view="material"
                            variant={variant}
                            label="Заголовок"
                            defaultValue="Текст"
                            iconLeft={
                                <IconCross />
                            }
                            iconRight={
                                <IconCross />
                            }
                            hint="Подсказка"
                        />
                    </div>
                </div>),
            )
            }

        </div>
    );
};

MiniApps.story = {
    name: 'mini-apps',
};
