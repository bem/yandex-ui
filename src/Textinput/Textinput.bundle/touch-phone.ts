import { compose, composeU, ExtractProps } from '@bem-react/core';

import {
    Textinput as TextinputTouchPhone,
} from '../Textinput@touch-phone';
import { withDebounceInput } from '../../withDebounceInput';
// _size
import { withSizeM } from '../_size/Textinput_size_m';
import { withSizeS } from '../_size/Textinput_size_s';
// _theme
import { withThemeNormal } from '../_theme/Textinput_theme_normal';
import { withThemeWebsearch } from '../_theme/Textinput_theme_websearch';
// _view
import { withViewDefault } from '../_view/Textinput_view_default';
import { withViewMaterial } from '../_view/Textinput_view_material';
// _hasClear
import { withHasClear } from '../_hasClear/Textinput_hasClear@touch-phone';
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

export * from '../Textinput@touch-phone';

export const Textinput = compose(
    withDebounceInput,
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemeWebsearch),
    composeU(
        composeU(
            withPinBrickBrick,
            withPinBrickClear,
            withPinBrickRound,
            withPinClearBrick,
            withPinClearClear,
            withPinClearRound,
        ),
        withPinRoundBrick,
        withPinRoundClear,
        withPinRoundRound,
    ),
    composeU(
        withViewDefault,
        withViewMaterial,
    ),
    withBaseline,
    withHasClear,
)(TextinputTouchPhone);

export type ITextinputProps = ExtractProps<typeof Textinput>;
