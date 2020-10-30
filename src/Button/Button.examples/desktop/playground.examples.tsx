import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';

import { Button } from '../../Button.bundle/desktop';
import { Icon } from '../../../Icon/Icon.bundle/desktop';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const children = text('children', 'Button');
    const view = select('view', ['default', 'action', 'pseudo', 'link', 'clear', 'raised', ''], 'default') as any;
    const size = select('size', ['s', 'm', 'l'], 'm') as any;
    const theme =
        view === ''
            ? (select('theme', ['action', 'clear', 'normal', 'pseudo', 'raised', 'link'], 'normal') as any)
            : null;
    const checked = boolean('checked', false) as any;
    const disabled = boolean('disabled', false) as any;
    const progress = boolean('progress', false) as any;
    const icon = boolean('icon', false);
    const iconLeft = icon ? null : boolean('iconLeft', false);
    const iconRight = icon ? null : boolean('iconRight', false);
    const iconType =
        icon || iconLeft || iconRight
            ? (select('icon type', ['arrow', 'close', 'cross', 'cross-websearch', 'filter'], 'arrow') as any)
            : null;
    const direction =
        iconType === 'arrow' ? (select('direction', ['left', 'right', 'top', 'bottom'], 'bottom') as any) : null;

    return (
        <div className={cnTheme(presets[preset])}>
            <Button
                theme={theme}
                size={size}
                view={view}
                progress={progress}
                disabled={disabled}
                checked={checked}
                children={icon ? null : children}
                // @ts-ignore TODO: Исправить тип
                icon={
                    icon &&
                    ((className: string) => (
                        <Icon size={size} type={iconType} direction={direction} className={className} />
                    ))
                }
                // @ts-ignore TODO: Исправить тип
                iconLeft={
                    iconLeft &&
                    ((className: string) => (
                        <Icon size={size} type={iconType} direction={direction} className={className} />
                    ))
                }
                // @ts-ignore TODO: Исправить тип
                iconRight={
                    iconRight &&
                    ((className: string) => (
                        <Icon size={size} type={iconType} direction={direction} className={className} />
                    ))
                }
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
