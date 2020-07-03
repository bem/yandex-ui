import React, { PureComponent, ChangeEvent } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';
import { withRegistry, Registry } from '@bem-react/di';

import { BPage } from '../../../internal/components/BPage/BPage';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { withWidthMax } from '../_width/Select_width_max';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';

import { Button as ButtonDesktop } from '../../Button/Button@desktop';
import { withViewDefault as withButtonViewDefault } from '../../Button/_view/Button_view_default@desktop';
import { withSizeM as withButtonSizeM } from '../../Button/_size/Button_size_m';
import { withSizeS as withButtonSizeS } from '../../Button/_size/Button_size_s';

import { withThemeNormal } from '../../Button/_theme/Button_theme_normal@desktop';
import { withWidthMax as withButtonWidthMax } from '../../Button/_width/Button_width_max';

import { cnSelect, Select as SelectDesktop } from '../Select@desktop';

import { Popup as PopupDesktop } from '../../Popup/Popup@desktop';
import { withThemeNormal as withPopupThemeNormal } from '../../Popup/_theme/Popup_theme_normal';
import { withViewDefault as withPopupViewDefault } from '../../Popup/_view/Popup_view_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';

import { Menu as MenuDesktop } from '../../Menu/Menu@desktop';
import { withThemeNormal as withMenuThemeNormal } from '../../Menu/_theme/Menu_theme_normal@desktop';
import { withViewDefault as withMenuViewDefault } from '../../Menu/_view/Menu_view_default';
import { withSizeM as withMenuSizeM } from '../../Menu/_size/Menu_size_m';
import { withSizeS as withMenuSizeS } from '../../Menu/_size/Menu_size_s';

import { withWidthMax as withMenuWidthMax } from '../../Menu/_width/Menu_width_max';

import { Icon as IconDesktop } from '../../Icon/Icon';
import { withTypeArrow } from '../../Icon/_type/Icon_type_arrow';
import { withGlyphCaretsV } from '../../Icon/_glyph/Icon_glyph_carets-v';

import './Hermione.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];

const Icon = compose(
    withTypeArrow,
    withGlyphCaretsV,
)(IconDesktop);

const Button = compose(
    withButtonViewDefault,
    composeU(withButtonSizeM, withButtonSizeS),
    withThemeNormal,
    withButtonWidthMax,
)(ButtonDesktop);

const Popup = compose(
    withPopupViewDefault,
    withOutsideClick,
    withTargetAnchor,
    withPopupThemeNormal,
)(PopupDesktop);

const Menu = compose(
    withMenuThemeNormal,
    withMenuViewDefault,
    composeU(withMenuSizeM, withMenuSizeS),
    withMenuWidthMax,
)(MenuDesktop);

const selectRegistry = new Registry({ id: cnSelect() });

selectRegistry
    .set('Trigger', Button)
    .set('Popup', Popup)
    .set('Menu', Menu)
    .set('Icon', Icon);

const Select = compose(
    withRegistry(selectRegistry),
    withTogglable,
    withWidthMax,
)(SelectDesktop);

class SelectHermioneSample extends PureComponent {
    readonly state: any = {
        select0sValue: '',
        select0mValue: '',
        select1sValue: '',
        select1mValue: '',
        select1Value: 'orange',
        select3Value: [],
        select7Value: '',
    };

    onChange = (id: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ [`${id}Value`]: event.target.value });
    };

    render() {
        return (
            <BPage>
                <Hermione className="Classic">
                    <Hermione element="Row" modifiers={{ type: 'sizes' }}>
                        {['s', 'm'].map((size) => (
                            <Hermione key={size} element="Item" modifiers={{ size }}>
                                <Select
                                    value={this.state[`select0${size}Value`]}
                                    onChange={this.onChange(`select0${size}`)}
                                    options={[
                                        { value: 'red', content: 'Каждый' },
                                        { value: 'orange', content: 'Охотник' },
                                    ]}
                                    size={size}
                                    theme="normal"
                                />
                                <Select
                                    value={this.state.select1Value}
                                    onChange={this.onChange('select1')}
                                    options={[
                                        { value: 'red', content: 'Каждый' },
                                        { value: 'orange', content: 'Охотник' },
                                    ]}
                                    size={size}
                                    theme="normal"
                                />
                                <Select
                                    className="Complex"
                                    value={this.state.select1Value}
                                    onChange={this.onChange('select1')}
                                    options={[
                                        {
                                            title: 'Заголовок',
                                            items: [
                                                // @ts-ignore
                                                { value: 'red', content: 'Каждый', checkedText: 'Красный' },
                                            ],
                                        },
                                        {
                                            title: 'Заголовок',
                                            items: [
                                                {
                                                    value: 'orange',
                                                    content: 'Охотник',
                                                    // @ts-ignore
                                                    checkedText: 'Оранжевый',
                                                },
                                            ],
                                        },
                                    ]}
                                    size={size}
                                    theme="normal"
                                />
                            </Hermione>
                        ))}
                    </Hermione>
                    <Hermione element="Row" modifiers={{ type: 'fixed-height' }}>
                        <Select
                            value={this.state.select3Value}
                            onChange={this.onChange('select3')}
                            maxHeight={50}
                            options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                            size="m"
                            theme="normal"
                        />
                    </Hermione>
                    <Hermione element="Row" modifiers={{ type: 'width-max' }}>
                        <Select
                            value={this.state.select1Value}
                            onChange={this.onChange('select1')}
                            options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                            size="m"
                            theme="normal"
                            width="max"
                        />
                    </Hermione>
                    <Hermione element="Row" modifiers={{ type: 'width-fixed' }}>
                        <Select
                            style={{ width: 100 }}
                            value={this.state.select1Value}
                            onChange={this.onChange('select1')}
                            options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                            size="m"
                            theme="normal"
                        />
                    </Hermione>
                    <Hermione element="Row" modifiers={{ type: 'long-content' }}>
                        <Select
                            value={this.state.select7Value}
                            onChange={this.onChange('select7')}
                            options={[
                                {
                                    value: 'red',
                                    content:
                                        'В 1800-х годах, в те времена, когда не было еще ни железных, ни шоссейных дорог, ни газового, ни стеаринового света, ни пружинных низких диванов, ни мебели без лаку, ни разочарованных юношей со стеклышками, ни либеральных философов-женщин, ни милых дам-камелий...',
                                },
                            ]}
                            size="m"
                            theme="normal"
                        />
                    </Hermione>
                </Hermione>
                <Hermione className="New">
                    {themes.map((theme: any, index: number) => (
                        <Hermione key={index} element="Row" modifiers={{ type: 'sizes', color: theme.color }}>
                            <div className={cnTheme(theme)}>
                                {['s', 'm'].map((size) => (
                                    <Hermione key={size} element="Item" modifiers={{ size }}>
                                        <Select
                                            value={this.state[`select0${size}Value`]}
                                            onChange={this.onChange(`select0${size}`)}
                                            options={[
                                                { value: 'red', content: 'Каждый' },
                                                { value: 'orange', content: 'Охотник' },
                                            ]}
                                            size={size}
                                            view="default"
                                        />
                                        <Select
                                            value={this.state.select1Value}
                                            onChange={this.onChange('select1')}
                                            options={[
                                                { value: 'red', content: 'Каждый' },
                                                { value: 'orange', content: 'Охотник' },
                                            ]}
                                            size={size}
                                            view="default"
                                        />
                                        <Select
                                            className="Complex"
                                            value={this.state.select1Value}
                                            onChange={this.onChange('select1')}
                                            options={[
                                                {
                                                    title: 'Заголовок',
                                                    items: [
                                                        // @ts-ignore
                                                        { value: 'red', content: 'Каждый', checkedText: 'Красный' },
                                                    ],
                                                },
                                                {
                                                    title: 'Заголовок',
                                                    items: [
                                                        {
                                                            value: 'orange',
                                                            content: 'Охотник',
                                                            // @ts-ignore
                                                            checkedText: 'Оранжевый',
                                                        },
                                                    ],
                                                },
                                            ]}
                                            size={size}
                                            view="default"
                                        />
                                    </Hermione>
                                ))}
                            </div>
                        </Hermione>
                    ))}
                </Hermione>
            </BPage>
        );
    }
}

render(<SelectHermioneSample />, document.getElementById('root'));
