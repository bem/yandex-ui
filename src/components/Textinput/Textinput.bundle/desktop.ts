import { FC, MouseEventHandler } from 'react';
import { compose, composeU } from '@bem-react/core';

import { ITextinputProps as ITextinputDesktopProps, Textinput as TextinputDesktop } from '../Textinput@desktop';
// _size
import { withSizeM } from '../_size/Textinput_size_m';
import { withSizeS } from '../_size/Textinput_size_s';
// _theme
import { withThemeNormal } from '../_theme/Textinput_theme_normal@desktop';
import { withThemeWebsearch } from '../_theme/Textinput_theme_websearch@desktop';
// _view
import { withViewDefault } from '../_view/Textinput_view_default@desktop';
// _hasClear
import { withHasClear } from '../_hasClear/Textinput_hasClear@desktop';
// _pin
import { withPinBrickBrick } from '../_pin/Textinput_pin_brick-brick';
import { withPinBrickClear } from '../_pin/Textinput_pin_brick-clear';
import { withPinBrickRound } from '../_pin/Textinput_pin_brick-round';
import { withPinClearBrick } from '../_pin/Textinput_pin_clear-brick';
import { withPinClearClear } from '../_pin/Textinput_pin_clear-clear';
import { withPinClearRound } from '../_pin/Textinput_pin_clear-round';
import { withPinRoundBrick } from '../_pin/Textinput_pin_round-brick';
import { withPinRoundClear } from '../_pin/Textinput_pin_round-clear';
import { withPinRoundRound } from '../_pin/Textinput_pin_round-round';
// _baseline
import { withBaseline } from '../_baseline/Textinput_baseline';

export * from '../Textinput@desktop';

export interface ITextinputProps extends ITextinputDesktopProps {
    size?: 'm' | 's';
    theme?: 'normal' | 'websearch';
    view?: 'default';
    hasClear?: boolean;
    onClearClick?: MouseEventHandler<HTMLSpanElement>;
    pin?:
        | 'brick-brick'
        | 'brick-clear'
        | 'brick-round'
        | 'clear-brick'
        | 'clear-clear'
        | 'clear-round'
        | 'round-brick'
        | 'round-clear'
        | 'round-round';
    baseline?: boolean;
}

export const Textinput = compose(
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemeWebsearch),
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
    withViewDefault,
    withBaseline,
    withHasClear,
)(TextinputDesktop) as FC<ITextinputProps>;
