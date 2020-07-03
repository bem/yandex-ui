import React, { Fragment, PureComponent } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Textinput as TextinputPresenter } from '../Textinput@desktop';
import { withSizeM } from '../_size/Textinput_size_m';
import { withSizeS } from '../_size/Textinput_size_s';
import { withThemeNormal } from '../_theme/Textinput_theme_normal@desktop';
import { withThemeWebsearch } from '../_theme/Textinput_theme_websearch@desktop';
import { withViewDefault } from '../_view/Textinput_view_default@desktop';
import { withHasClear } from '../_hasClear/Textinput_hasClear@desktop';
import { withPinBrickBrick } from '../_pin/Textinput_pin_brick-brick';
import { withPinBrickClear } from '../_pin/Textinput_pin_brick-clear';
import { withPinBrickRound } from '../_pin/Textinput_pin_brick-round';
import { withPinClearBrick } from '../_pin/Textinput_pin_clear-brick';
import { withPinClearClear } from '../_pin/Textinput_pin_clear-clear';
import { withPinClearRound } from '../_pin/Textinput_pin_clear-round';
import { withPinRoundBrick } from '../_pin/Textinput_pin_round-brick';
import { withPinRoundClear } from '../_pin/Textinput_pin_round-clear';
import { withPinRoundRound } from '../_pin/Textinput_pin_round-round';

import { Icon as IconPresenter } from '../../Icon/Icon';
import { withTypeArrow } from '../../Icon/_type/Icon_type_arrow';
import { withGlyphTypeEye } from '../../../internal/components/Icon/_glyph/Icon_glyph_type-eye';
import { withGlyphTypeLock } from '../../../internal/components/Icon/_glyph/Icon_glyph_type-lock';
import { withTypeEye } from '../../../internal/components/Icon/_type/Icon_type_eye';
import { withTypeLock } from '../../../internal/components/Icon/_type/Icon_type_lock';

import './Hermione.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const Textinput = compose(
    withHasClear,
    composeU(withSizeM, withSizeS),
    composeU(withThemeWebsearch, withThemeNormal),
    withViewDefault,
    composeU(
        withPinBrickBrick,
        withPinBrickClear,
        withPinBrickRound,
        withPinClearBrick,
        withPinClearClear,
        withPinClearRound,
        withPinRoundBrick,
        withPinRoundClear,
        withPinRoundRound,
    ),
)(TextinputPresenter);

const Icon = compose(
    composeU(withTypeArrow, withTypeEye, withTypeLock),
    composeU(withGlyphTypeEye, withGlyphTypeLock),
)(IconPresenter);

const data = [
    '',
    'В 1800-х годах, в те времена, когда не было еще ни железных, ни шоссейных дорог, ни газового, ни стеаринового света, ни пружинных низких диванов, ни мебели без лаку, ни разочарованных юношей со стеклышками, ни либеральных философов-женщин, ни милых дам-камелий...',
];
const sizes = ['s', 'm'];
const themes = [themeDefault, themeInverse, themeBrand];

class TextinputHermioneSample extends PureComponent {
    render() {
        return (
            <BPage>
                <Hermione id="websearch">
                    <Hermione element="Capture">
                        <Hermione element="Variation">
                            {data.map((value) => (
                                <Hermione element="Item" key={value}>
                                    <Textinput hasClear theme="websearch" value={value} />
                                </Hermione>
                            ))}
                        </Hermione>
                    </Hermione>
                </Hermione>
                <Hermione id="pin">
                    <Hermione element="Capture">
                        {[
                            ['round-round'],
                            ['round-clear', 'brick-brick', 'clear-brick', 'clear-round'],
                            ['round-brick', 'clear-clear', 'brick-clear', 'brick-round'],
                        ].map((row, idx) => (
                            <Hermione id={`row_${idx}`} element="Variation" key={idx}>
                                <Hermione element="Item">
                                    {row.map((pin) => (
                                        <Textinput theme="normal" size="m" pin={pin} style={{ width: 150 }} key={pin} />
                                    ))}
                                </Hermione>
                            </Hermione>
                        ))}
                    </Hermione>
                </Hermione>
                <Hermione id="base">
                    {sizes.map((size) => (
                        <Hermione element="Capture" modifiers={{ size }} key={size}>
                            {[{}, { disabled: true }, { hasClear: true }].map((state, idx) => (
                                <Hermione element="Variation" modifiers={state} key={idx}>
                                    {data.map((value) => (
                                        <Hermione element="Item" modifiers={{ hasValue: Boolean(value) }} key={value}>
                                            <Textinput {...state} theme="normal" size={size} value={value} />
                                        </Hermione>
                                    ))}
                                </Hermione>
                            ))}
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="number">
                    {sizes.map((size) => (
                        <Hermione element="Capture" modifiers={{ size, type: 'number' }} key={size}>
                            <Hermione element="Variation">
                                {['', 3.141592653589793238462643].map((value) => (
                                    <Hermione element="Item" modifiers={{ hasValue: Boolean(value) }} key={value}>
                                        <Textinput type="number" theme="normal" size={size} value={value} />
                                    </Hermione>
                                ))}
                            </Hermione>
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="icons">
                    {sizes.map((size: any) => (
                        <Hermione element="Capture" modifiers={{ size }} key={size}>
                            {[{ hasIcon: true }, { hasIcon: true, hasClear: true }].map((state, idx) => (
                                <Hermione element="Variation" key={idx}>
                                    {data.map((value) => (
                                        <Fragment key={value}>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    theme="normal"
                                                    size={size}
                                                    value={value}
                                                    iconLeft={<Icon type="eye" size={size} />}
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    theme="normal"
                                                    size={size}
                                                    value={value}
                                                    iconLeft={<Icon type="lock" size={size} />}
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    theme="normal"
                                                    size={size}
                                                    value={value}
                                                    iconLeft={<Icon type="lock" size={size} />}
                                                    iconRight={<Icon type="eye" size={size} />}
                                                />
                                            </Hermione>
                                        </Fragment>
                                    ))}
                                </Hermione>
                            ))}
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="number-clear">
                    <Hermione element="Capture">
                        {[{ theme: 'normal' }, { view: 'default' }].map((state, index) => (
                            <Fragment key={index}>
                                <Hermione element="Variation">
                                    {sizes.map((size: any) => (
                                        <Fragment key={size}>
                                            <Hermione element="Item">
                                                <Textinput
                                                    hasClear
                                                    hasIcon
                                                    {...state}
                                                    size={size}
                                                    type="number"
                                                    value=""
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    className="Textinput_withValue"
                                                    hasClear
                                                    hasIcon
                                                    {...state}
                                                    size={size}
                                                    type="number"
                                                    value="74957393777"
                                                />
                                            </Hermione>
                                        </Fragment>
                                    ))}
                                </Hermione>
                            </Fragment>
                        ))}
                    </Hermione>
                </Hermione>
                <Hermione id="number-clear-icon">
                    <Hermione element="Capture">
                        {['classic', 'default'].map((view) => (
                            <Fragment key={view}>
                                <Hermione element="Variation">
                                    {sizes.map((size: any) => (
                                        <Fragment key={size}>
                                            <Hermione element="Item">
                                                <Textinput
                                                    hasClear
                                                    hasIcon
                                                    theme="normal"
                                                    view={view}
                                                    size={size}
                                                    type="number"
                                                    value=""
                                                    iconRight={<Icon type="lock" size={size} />}
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    className="Textinput_withValue"
                                                    hasClear
                                                    hasIcon
                                                    theme="normal"
                                                    view={view}
                                                    size={size}
                                                    type="number"
                                                    value="74957393777"
                                                    iconRight={<Icon type="lock" size={size} />}
                                                />
                                            </Hermione>
                                        </Fragment>
                                    ))}
                                </Hermione>
                            </Fragment>
                        ))}
                    </Hermione>
                </Hermione>
                <Hermione className="New">
                    {themes.map((theme: any, index) => (
                        <div key={index} className={cnTheme(theme)}>
                            <Hermione element="Row">
                                {['typical', 'focused', 'hovered'].map((state, idx) => (
                                    <Hermione element="Item" key={idx}>
                                        <Textinput
                                            {...{ [state]: true }}
                                            view="default"
                                            size="m"
                                            placeholder={`A ${state} placeholder`}
                                        />
                                    </Hermione>
                                ))}
                            </Hermione>
                            <Hermione element="Row">
                                {[
                                    [['round-round', 'brick-round', 'clear-round'], {}],
                                    [['round-brick', 'brick-brick', 'clear-brick'], {}],
                                    [['round-clear', 'brick-clear', 'clear-clear'], {}],
                                    [['round-round', 'brick-round', 'clear-round'], { focused: true }],
                                    [['round-brick', 'brick-brick', 'clear-brick'], { focused: true }],
                                    [['round-clear', 'brick-clear', 'clear-clear'], { focused: true }],
                                    [['round-round', 'brick-round', 'clear-round'], { hovered: true }],
                                    [['round-brick', 'brick-brick', 'clear-brick'], { hovered: true }],
                                    [['round-clear', 'brick-clear', 'clear-clear'], { hovered: true }],
                                ].map((row: any, idx) => (
                                    <Hermione key={idx} element="Item">
                                        {row[0].map((pin: any) => (
                                            <Textinput
                                                {...row[1]}
                                                view="default"
                                                size="m"
                                                placeholder={pin}
                                                pin={pin}
                                                style={{ width: 150, marginRight: 5 }}
                                                key={pin}
                                            />
                                        ))}
                                    </Hermione>
                                ))}
                            </Hermione>
                            <Hermione element="Row">
                                {[{}, { disabled: true }, { hasClear: true }].map((state) =>
                                    data.map((value) => (
                                        <Hermione element="Item" modifiers={{ hasValue: Boolean(value) }} key={value}>
                                            <Textinput {...state} view="default" size="m" value={value} />
                                        </Hermione>
                                    )),
                                )}
                            </Hermione>
                            <Hermione element="Row">
                                {['', 3.141592653589793238462643].map((value) => (
                                    <Hermione element="Item" key={value}>
                                        <Textinput type="number" view="default" size="m" value={value} />
                                    </Hermione>
                                ))}
                            </Hermione>
                            <Hermione element="Row">
                                {[{ hasIcon: true }, { hasIcon: true, hasClear: true }].map((state) =>
                                    data.map((value) => (
                                        <Fragment key={value}>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    view="default"
                                                    size="m"
                                                    value={value}
                                                    iconLeft={<Icon glyph="type-eye" size="m" />}
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    view="default"
                                                    size="m"
                                                    value={value}
                                                    iconLeft={<Icon glyph="type-lock" size="m" />}
                                                />
                                            </Hermione>
                                            <Hermione element="Item">
                                                <Textinput
                                                    {...state}
                                                    view="default"
                                                    size="m"
                                                    value={value}
                                                    iconLeft={<Icon glyph="type-lock" size="m" />}
                                                    iconRight={<Icon glyph="type-eye" size="m" />}
                                                />
                                            </Hermione>
                                        </Fragment>
                                    )),
                                )}
                            </Hermione>
                            <Hermione element="Row">
                                <Hermione element="Item" style={{ paddingBottom: 32 }}>
                                    <Textinput view="default" size="m" state="error" hint="error-message" />
                                </Hermione>
                            </Hermione>
                        </div>
                    ))}
                </Hermione>
            </BPage>
        );
    }
}

render(<TextinputHermioneSample />, document.getElementById('root'));
