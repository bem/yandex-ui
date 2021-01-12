import React, { useState } from 'react';

import { select, withKnobs } from '@storybook/addon-knobs';
import { ListTile } from '../../ListTile';
import { presets, presetsKeys } from '../../../Theme/presets';
import { cnTheme } from '../../../Theme';
import { Cell } from './Layout';
import { Text } from '../../../Text/Text.bundle/touch-phone';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

import './Layout.css';
import { Icon } from '../../../Icon/Icon.bundle/common';
import { Checkbox } from '../../../Checkbox/Checkbox.bundle/desktop';
import { Tumbler } from '../../../Tumbler/Tumbler.bundle/touch-phone';
import { UserPic } from '../../../UserPic/UserPic.bundle/desktop';
import { Spacer } from '../../../Spacer/Spacer';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators()],
    parameters,
};

const Check = () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox view="default" size="m" checked={checked} onChange={() => setChecked(!checked)} />;
};

const Switch = () => {
    const [checked, setChecked] = useState(false);
    return <Tumbler view="default" size="l" checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Miniapps = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    return (
        <div className={cnTheme(presets[preset])} style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <div className="Grid">
                <Cell label="Однострочные">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            trailing={
                                <Text typography="control-s" color="secondary">
                                    Текст
                                </Text>
                            }
                        >
                            <Text typography="control-xl" color="primary">
                                Текст
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Многострочные">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="start"
                            trailing={
                                <Text typography="control-s" color="secondary">
                                    Значение
                                </Text>
                            }
                        >
                            <Text as="div" typography="control-xl" color="primary">
                                Текст
                            </Text>
                            <Text as="div" typography="control-s" color="secondary">
                                Текст
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Без графики, контролов, аватарки и кнопок">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            trailing={
                                <Text typography="control-s" color="secondary">
                                    Значение
                                </Text>
                            }
                        >
                            <Text typography="control-xl" color="primary">
                                Текст
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Со всем этим">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            leftSpace="s"
                            rightSpace="s"
                            leading={
                                <svg
                                    width="36"
                                    height="24"
                                    viewBox="0 0 36 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 3C0 1.34315 1.34315 0 3 0H33C34.6569 0 36 1.34315 36 3V21C36 22.6569 34.6569 24 33 24H3C1.34315 24 0 22.6569 0 21V3Z"
                                        fill="#F2F2F2"
                                    />
                                    <path
                                        d="M13 19C16.866 19 20 15.866 20 12C20 8.13401 16.866 5 13 5C9.13401 5 6 8.13401 6 12C6 15.866 9.13401 19 13 19Z"
                                        fill="#EB001B"
                                    />
                                    <path
                                        d="M23 19C26.866 19 30 15.866 30 12C30 8.13401 26.866 5 23 5C19.134 5 16 8.13401 16 12C16 15.866 19.134 19 23 19Z"
                                        fill="#F79E1B"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18 7.10107C16.7628 8.36361 16 10.0928 16 12.0001C16 13.9074 16.7628 15.6365 18 16.899C19.2372 15.6365 20 13.9074 20 12.0001C20 10.0928 19.2372 8.36361 18 7.10107Z"
                                        fill="#FF5F00"
                                    />
                                </svg>
                            }
                            trailing={<Check />}
                        >
                            <ListTile
                                alignItems="center"
                                trailing={
                                    <Text typography="control-s" color="secondary">
                                        Значение
                                    </Text>
                                }
                            >
                                <Text typography="control-xl" color="primary">
                                    Текст
                                </Text>
                            </ListTile>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Для заголовков">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                        >
                            <Text typography="headline-s" color="primary">
                                Заголовок
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Ячейка таблицы">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            leftSpace="s"
                            rightSpace="s"
                            leading={<Check />}
                            trailing={<Check />}
                        >
                            <ListTile
                                alignItems="center"
                                trailing={
                                    <Text typography="control-s" color="secondary">
                                        Значение
                                    </Text>
                                }
                            >
                                <Text typography="control-xl" color="primary">
                                    Текст
                                </Text>
                            </ListTile>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Для заголовков c иконкой">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            leftSpace="s"
                            leading={<Icon glyph="type-cross" style={{ width: 16, height: 16 }} />}
                        >
                            <Text typography="headline-s" color="primary">
                                Заголовок
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Ячейка таблицы и userpic">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            leftSpace="s"
                            leading={<UserPic size="m" />}
                        >
                            <Text as="div" typography="control-xl" color="primary">
                                Текст
                            </Text>
                            <Text as="div" typography="control-s" color="secondary">
                                Текст
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Длинный текст">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            leftSpace="s"
                            rightSpace="s"
                            leading={<Check />}
                            trailing={<Check />}
                        >
                            <ListTile
                                alignItems="center"
                                rightSpace="m"
                                trailing={
                                    <Text typography="control-s" color="secondary">
                                        Значение
                                    </Text>
                                }
                            >
                                <Text maxLines={1} overflow="ellipsis" typography="control-xl" color="primary">
                                    Длинный текст до границ с другим о до границ с другим
                                </Text>
                            </ListTile>
                        </ListTile>
                    </Spacer>
                </Cell>
                <Cell label="Ячейка таблицы c тумблером">
                    <Spacer vertical={12} horizontal={16}>
                        <ListTile
                            alignItems="center"
                            rightSpace="s"
                            trailing={<Switch />}
                        >
                            <Text maxLines={1} overflow="ellipsis" typography="control-xl" color="primary">
                                Ячейка таблицы c тумблером и длинный текст
                            </Text>
                        </ListTile>
                    </Spacer>
                </Cell>
            </div>
        </div>
    );
};

Miniapps.story = {
    name: 'miniapps',
};
