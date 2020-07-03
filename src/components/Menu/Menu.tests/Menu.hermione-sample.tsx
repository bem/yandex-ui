import React from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import './Hermione.components/Hermione/Hermione.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Menu as MenuPresenter } from '../Menu@desktop';
import { withSizeM } from '../_size/Menu_size_m';
import { withSizeS } from '../_size/Menu_size_s';
import { withThemeNormal } from '../_theme/Menu_theme_normal@desktop';
import { withViewDefault } from '../_view/Menu_view_default@desktop';
import { withWidthAuto } from '../_width/Menu_width_auto';
import { withWidthMax } from '../_width/Menu_width_max';

configureRootTheme({ theme: themeDefault });

const Menu = compose(
    composeU(withSizeM, withSizeS),
    withViewDefault,
    composeU(withWidthAuto, withWidthMax),
    withThemeNormal,
)(MenuPresenter);

const themes = [themeDefault, themeInverse, themeBrand];

function MenuHermioneSample() {
    return (
        <BPage>
            <Hermione className="Classic">
                <Hermione element="Row" modifiers={{ type: 'sizes' }}>
                    {['s', 'm'].map((size: any) => (
                        <Hermione key={size} element="Item">
                            <Menu
                                theme="normal"
                                size={size}
                                value={['Каждый', 'Знать', 'Фазан']}
                                items={[
                                    {
                                        title: 'Заголовок',
                                        items: [
                                            { content: 'Каждый', value: 'Каждый' },
                                            { content: 'Охотник', value: 'Охотник' },
                                        ],
                                    },
                                    { content: 'menu_item+menu_group', value: 'menu_item+menu_group' },
                                    {
                                        title: '',
                                        items: [{ content: 'Желает', value: 'Желает', disabled: true }],
                                    },
                                    {
                                        title: 'Заголовок',
                                        items: [
                                            { content: 'Знать', value: 'Знать', disabled: true },
                                            { content: 'Где', value: 'Где' },
                                            { content: 'Сидит', value: 'Сидит' },
                                        ],
                                    },
                                    { content: 'Фазан', value: 'Фазан' },
                                ]}
                            />
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione element="Row" modifiers={{ type: 'disabled' }}>
                    <Menu
                        disabled
                        theme="normal"
                        size="m"
                        value={['Каждый', 'Знать', 'Фазан']}
                        items={[
                            {
                                title: 'Заголовок',
                                items: [
                                    { content: 'Каждый', value: 'Каждый' },
                                    { content: 'Охотник', value: 'Охотник' },
                                ],
                            },
                            { content: 'Желает', value: 'Желает' },
                        ]}
                    />
                </Hermione>
                <Hermione element="Row" modifiers={{ type: 'width-auto' }}>
                    <Menu
                        width="auto"
                        theme="normal"
                        size="m"
                        value={['Каждый', 'Знать', 'Фазан']}
                        items={[
                            {
                                title: 'Заголовок',
                                items: [
                                    { content: 'Каждый', value: 'Каждый' },
                                    { content: 'Охотник', value: 'Охотник' },
                                ],
                            },
                            { content: 'Желает', value: 'Желает' },
                        ]}
                    />
                </Hermione>
                <Hermione element="Row" modifiers={{ type: 'width-max' }}>
                    <Menu
                        width="max"
                        theme="normal"
                        size="m"
                        value={['Каждый', 'Знать', 'Фазан']}
                        items={[
                            {
                                title: 'Заголовок',
                                items: [
                                    { content: 'Каждый', value: 'Каждый' },
                                    { content: 'Охотник', value: 'Охотник' },
                                ],
                            },
                            { content: 'Желает', value: 'Желает' },
                        ]}
                    />
                </Hermione>
            </Hermione>
            <Hermione className="New">
                {themes.map((theme: any, index: number) => (
                    <div key={index} className={cnTheme(theme)}>
                        <Hermione element="Row" modifiers={{ color: theme.color }}>
                            {['s', 'm'].map((size: any) => (
                                <Hermione element="Item" key={size}>
                                    <Menu
                                        view="default"
                                        size={size}
                                        value={['Каждый', 'Знать', 'Фазан']}
                                        items={[
                                            {
                                                title: 'Заголовок',
                                                items: [
                                                    { content: 'Каждый', value: 'Каждый' },
                                                    { content: 'Охотник', value: 'Охотник' },
                                                ],
                                            },
                                            { content: 'menu_item+menu_group', value: 'menu_item+menu_group' },
                                            {
                                                title: '',
                                                items: [{ content: 'Желает', value: 'Желает', disabled: true }],
                                            },
                                            {
                                                title: 'Заголовок',
                                                items: [
                                                    { content: 'Знать', value: 'Знать', disabled: true },
                                                    { content: 'Где', value: 'Где' },
                                                    { content: 'Сидит', value: 'Сидит' },
                                                ],
                                            },
                                            { content: 'Фазан', value: 'Фазан' },
                                        ]}
                                    />
                                </Hermione>
                            ))}
                        </Hermione>
                    </div>
                ))}
            </Hermione>
        </BPage>
    );
}
render(<MenuHermioneSample />, document.getElementById('root'));
