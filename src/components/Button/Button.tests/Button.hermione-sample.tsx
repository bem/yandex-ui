import React from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Hermione } from '../../../internal/components/Hermione/Hermione';
import { generateCombinations } from '../../../internal/utils/generateCombinations';
import { BPage } from '../../../internal/components/BPage/BPage@desktop';

import { withCheckedState } from './Hermione.hocs/withCheckedState';
import { witControlClassName } from './Hermione.hocs/withControlClassName';

import { Button as ButtonBase } from '../Button@desktop';
import { withViewDefault } from '../_view/Button_view_default@desktop';
import { withViewAction } from '../_view/Button_view_action@desktop';
import { withViewClear } from '../_view/Button_view_clear@desktop';
import { withViewLink } from '../_view/Button_view_link@desktop';
import { withViewPseudo } from '../_view/Button_view_pseudo@desktop';
import { withViewRaised } from '../_view/Button_view_raised@desktop';

import { withThemeAction } from '../_theme/Button_theme_action@desktop';
import { withThemeClear } from '../_theme/Button_theme_clear@desktop';
import { withThemeNormal } from '../_theme/Button_theme_normal@desktop';
import { withThemePseudo } from '../_theme/Button_theme_pseudo@desktop';
import { withThemeRaised } from '../_theme/Button_theme_raised';
import { withThemeLink } from '../_theme/Button_theme_link';
import { withSizeS } from '../_size/Button_size_s';
import { withSizeM } from '../_size/Button_size_m';
import { withSizeL } from '../_size/Button_size_l';
import { withPinBrickBrick } from '../_pin/Button_pin_brick-brick';
import { withPinBrickCircle } from '../_pin/Button_pin_brick-circle';
import { withPinBrickClear } from '../_pin/Button_pin_brick-clear';
import { withPinBrickRound } from '../_pin/Button_pin_brick-round';
import { withPinCircleBrick } from '../_pin/Button_pin_circle-brick';
import { withPinCircleCircle } from '../_pin/Button_pin_circle-circle';
import { withPinCircleClear } from '../_pin/Button_pin_circle-clear';
import { withPinClearBrick } from '../_pin/Button_pin_clear-brick';
import { withPinClearCircle } from '../_pin/Button_pin_clear-circle';
import { withPinClearClear } from '../_pin/Button_pin_clear-clear';
import { withPinClearRound } from '../_pin/Button_pin_clear-round';
import { withPinRoundBrick } from '../_pin/Button_pin_round-brick';
import { withPinRoundClear } from '../_pin/Button_pin_round-clear';
import { withWidthAuto } from '../_width/Button_width_auto';
import { withWidthMax } from '../_width/Button_width_max';

import { Icon as IconBase } from '../../Icon/Icon';
import { withTypeArrow } from '../../Icon/_type/Icon_type_arrow';
import { withTypeLoad } from '../../Icon/_type/Icon_type_load@tests';
import { withTypeLocation } from '../../Icon/_type/Icon_type_location@tests';
import { withTypeHome } from '../../Icon/_type/Icon_type_home@tests';
import { withTypePlay } from '../../Icon/_type/Icon_type_play@tests';
import { withGlyphTypeLoad } from '../../Icon/_glyph/Icon_glyph_type_load@test';

import './Hermione.components/Icon/Icon.css';
import './Hermione.components/Hermione/Hermione.css';
import '../../../internal/components/BPage/BPage@test.css';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];

const Button = compose(
    withCheckedState,
    witControlClassName,
    composeU(
        withViewDefault,
        withViewAction,
        withViewClear,
        withViewLink,
        withViewPseudo,
        withViewRaised,
    ),
    composeU(withThemeAction, withThemeClear, withThemeNormal, withThemePseudo, withThemeRaised, withThemeLink),
    composeU(
        withPinBrickBrick,
        withPinBrickCircle,
        withPinBrickClear,
        withPinBrickRound,
        withPinCircleBrick,
        withPinCircleCircle,
        withPinCircleClear,
        withPinClearBrick,
        withPinClearCircle,
        withPinClearClear,
        withPinClearRound,
        withPinRoundBrick,
        withPinRoundClear,
    ),
    composeU(withWidthAuto, withWidthMax),
    composeU(withSizeM, withSizeS, withSizeL),
)(ButtonBase);

const Icon = compose(
    withGlyphTypeLoad,
    composeU(withTypeArrow, withTypeLoad, withTypeLocation, withTypeHome, withTypePlay),
)(IconBase);

render(
    <BPage>
        <Hermione id="static">
            <Hermione element="Item">
                <Button size="s" theme="normal" children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" hovered pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" hovered pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered pressed checked children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" hovered pressed checked focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" hovered children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" hovered focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" hovered pressed children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" hovered pressed focused children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="normal" checked disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="pseudo" checked disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="clear" checked disabled children="button" />
            </Hermione>
            <Hermione element="Item">
                <Button size="s" theme="action" disabled children="button" />
            </Hermione>
        </Hermione>
        <Hermione id="dynamic">
            <Hermione element="Item" className="type_ Theme_normal">
                <Button size="s" theme="normal" children="button" />
            </Hermione>
            <Hermione element="Item" className="type_ Theme_pseudo">
                <Button size="s" theme="pseudo" children="button" />
            </Hermione>
            <Hermione element="Item" className="type_ Theme_action">
                <Button size="s" theme="action" children="button" />
            </Hermione>
            <Hermione element="Item" className="type_ Theme_clear">
                <Button size="s" theme="clear" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_check Theme_normal">
                <Button checkable size="s" theme="normal" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_check Theme_pseudo">
                <Button checkable size="s" theme="pseudo" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_check Theme_action">
                <Button checkable size="s" theme="action" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_check Theme_clear">
                <Button checkable size="s" theme="clear" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_radio Theme_normal">
                <Button checkable size="s" theme="normal" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_radio Theme_pseudo">
                <Button checkable size="s" theme="pseudo" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_radio Theme_action">
                <Button checkable size="s" theme="action" children="button" />
            </Hermione>
            <Hermione element="Item" className="Type_radio Theme_clear">
                <Button checkable size="s" theme="clear" children="button" />
            </Hermione>
        </Hermione>
        <Hermione id="sizes">
            <Hermione element="Item" className="Size_s">
                <Button
                    theme="normal"

                    size="s"
                    icon={(className: string) => <Icon size="s" className={className} type="load" />}
                />{' '}
                <Button theme="normal" size="s" children="button" />{' '}
                <Button
                    theme="normal"

                    size="s"
                    iconLeft={(className: string) => <Icon size="s" className={className} type="load" />}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="s"
                    iconLeft={(className: string) => (
                        <Icon size="s" className={className} type="arrow" direction="left" />
                    )}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="s"
                    children="button"
                    iconRight={(className: string) => <Icon size="s" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="s"
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="s" className={className} type="arrow" direction="right" />
                    )}
                />{' '}
                <Button
                    theme="normal"

                    size="s"
                    iconLeft={(className: string) => <Icon size="s" className={className} type="load" />}
                    children="button"
                    iconRight={(className: string) => <Icon size="s" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="s"
                    iconLeft={(className: string) => (
                        <Icon size="s" className={className} type="arrow" direction="left" />
                    )}
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="s" className={className} type="arrow" direction="right" />
                    )}
                />
            </Hermione>
            <br />
            <Hermione element="Item" className="Size_m">
                <Button
                    theme="normal"

                    size="m"
                    icon={(className: string) => <Icon size="m" className={className} type="load" />}
                />{' '}
                <Button theme="normal" size="m" children="button" />{' '}
                <Button
                    theme="normal"

                    size="m"
                    iconLeft={(className: string) => <Icon size="m" className={className} type="load" />}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="m"
                    iconLeft={(className: string) => (
                        <Icon size="m" className={className} type="arrow" direction="left" />
                    )}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="m"
                    children="button"
                    iconRight={(className: string) => <Icon size="m" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="m"
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="m" className={className} type="arrow" direction="right" />
                    )}
                />{' '}
                <Button
                    theme="normal"

                    size="m"
                    iconLeft={(className: string) => <Icon size="m" className={className} type="load" />}
                    children="button"
                    iconRight={(className: string) => <Icon size="m" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="m"
                    iconLeft={(className: string) => (
                        <Icon size="m" className={className} type="arrow" direction="left" />
                    )}
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="m" className={className} type="arrow" direction="right" />
                    )}
                />
            </Hermione>
            <br />
            <Hermione element="Item" className="Size_l">
                <Button
                    theme="normal"

                    size="l"
                    icon={(className: string) => <Icon size="l" className={className} type="load" />}
                />{' '}
                <Button theme="normal" size="l" children="button" />{' '}
                <Button
                    theme="normal"

                    size="l"
                    iconLeft={(className: string) => <Icon size="l" className={className} type="load" />}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="l"
                    iconLeft={(className: string) => (
                        <Icon size="l" className={className} type="arrow" direction="left" />
                    )}
                    children="button"
                />{' '}
                <Button
                    theme="normal"

                    size="l"
                    children="button"
                    iconRight={(className: string) => <Icon size="l" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="l"
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="l" className={className} type="arrow" direction="right" />
                    )}
                />{' '}
                <Button
                    theme="normal"

                    size="l"
                    iconLeft={(className: string) => <Icon size="l" className={className} type="load" />}
                    children="button"
                    iconRight={(className: string) => <Icon size="l" className={className} type="load" />}
                />{' '}
                <Button
                    theme="normal"

                    size="l"
                    iconLeft={(className: string) => (
                        <Icon size="l" type="arrow" className={className} direction="left" />
                    )}
                    children="button"
                    iconRight={(className: string) => (
                        <Icon size="l" type="arrow" className={className} direction="right" />
                    )}
                />
            </Hermione>
            <br />
        </Hermione>
        <Hermione id="baseline">
            <Hermione element="Item">
                {' Кнопки '}
                <Button theme="normal" size="l" children="button" />
                {' выравниваются '}
                <Button theme="normal" size="s" children="button" />
                {' по базовой '}
                <Button theme="normal" size="m" children="button" />
                {' линии. '}
            </Hermione>
        </Hermione>
        <Hermione id="width">
            <Hermione element="Item" className="Width_200" style={{ width: '200px' }}>
                <Button theme="normal" size="s" children="синхрофазотрон" />
                <br />
                <br />
                <Button theme="normal" size="s" width="auto" children="синхрофазотрон" />
                <br />
                <br />
                <Button theme="normal" size="s" width="max" children="синхрофазотрон" />
            </Hermione>
            <Hermione element="Item" className="Width_100" style={{ width: '100px' }}>
                <Button theme="normal" size="s" children="синхрофазотрон" />
                <br />
                <br />
                <Button theme="normal" size="s" width="auto" children="синхрофазотрон" />
                <br />
                <br />
                <Button theme="normal" size="s" width="max" children="синхрофазотрон" />
            </Hermione>
        </Hermione>
        <Hermione id="pin">
            <Hermione element="Item">
                <Button theme="normal" size="s" pin="round-clear" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="clear-round" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="round-brick" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="brick-round" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="brick-clear" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="clear-brick" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="brick-brick" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="clear-clear" children="button" />
                <Hermione element="Gap" />
            </Hermione>
        </Hermione>
        <Hermione id="circle">
            <Hermione element="Item">
                <Button theme="normal" size="s" pin="circle-circle" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="circle-brick" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="brick-circle" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="clear-circle" children="button" />
                <Hermione element="Gap" />
                <Button theme="normal" size="s" pin="circle-clear" children="button" />
                <Hermione element="Gap" />
            </Hermione>
        </Hermione>
        <Hermione id="icon-circle">
            <Hermione element="Item">
                <Button
                    theme="normal"
                    size="l"
                    pin="circle-circle"
                    icon={(className: string) => <Icon size="l" className={className} type="location" />}
                />
                <Hermione element="Gap" />
                <Button
                    theme="normal"
                    size="l"
                    pin="circle-circle"
                    icon={(className: string) => <Icon size="l" className={className} type="home" />}
                />
                <Hermione element="Gap" />
                <Button
                    theme="normal"
                    size="l"
                    pin="circle-circle"
                    icon={(className: string) => <Icon size="l" className={className} type="play" />}
                />
                <Hermione element="Gap" />
            </Hermione>
        </Hermione>
        <Hermione id="icon-glyph">
            <Hermione element="Item">
                <Button
                    theme="normal"
                    size="m"
                    children="Кнопка"
                    iconLeft={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    theme="normal"
                    size="m"
                    children="Кнопка"
                    iconRight={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    theme="normal"
                    size="m"
                    children="Кнопка"
                    iconRight={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                    iconLeft={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    theme="normal"
                    size="m"
                    icon={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <br />
                <br />
                <Button
                    size="m"
                    view="default"
                    children="Кнопка"
                    iconLeft={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    size="m"
                    view="default"
                    children="Кнопка"
                    iconRight={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    size="m"
                    view="default"
                    children="Кнопка"
                    iconRight={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                    iconLeft={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <Hermione element="Gap" />
                <Button
                    size="m"
                    view="default"
                    icon={(className: string) => <Icon size="m" className={className} glyph="type-load" />}
                />
                <br />
                <br />
            </Hermione>
        </Hermione>
        <Hermione className="New">
            {themes.map((theme, index) => (
                <div key={index} className={cnTheme(theme)}>
                    <Hermione>
                        {generateCombinations({
                            view: ['default', 'action', 'pseudo', 'link', 'clear', 'raised'],
                            hovered: [false, true],
                            pressed: [false, true],
                            checked: [false, true],
                            focused: [false, true],
                        }).map((props: any) => (
                            <Hermione key={props} element="Item">
                                <Button
                                    hovered={props.hovered}
                                    pressed={props.pressed}
                                    focused={props.focused}
                                    checked={props.checked}
                                    view={props.view}
                                    size="m"
                                    children="button"
                                />
                            </Hermione>
                        ))}
                    </Hermione>
                </div>
            ))}
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
