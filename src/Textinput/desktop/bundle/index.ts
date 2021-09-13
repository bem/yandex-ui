import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Textinput as TextinputDesktop } from '../../Textinput@desktop';
import { withDebounceInput } from '../../../withDebounceInput';
// _size
import { withSizeM } from '../../_size/Textinput_size_m';
import { withSizeS } from '../../_size/Textinput_size_s';
// _theme
import { withThemeNormal } from '../../_theme/Textinput_theme_normal@desktop';
import { withThemeWebsearch } from '../../_theme/Textinput_theme_websearch@desktop';
// _view
import { withViewDefault } from '../../_view/Textinput_view_default@desktop';
import { withViewMaterial } from '../../_view/Textinput_view_material@desktop';
// _hasClear
import { withHasClear } from '../../_hasClear/Textinput_hasClear@desktop';
// _pin
import { withPinBrickBrick } from '../../_pin/Textinput_pin_brick-brick';
import { withPinBrickClear } from '../../_pin/Textinput_pin_brick-clear';
import { withPinBrickRound } from '../../_pin/Textinput_pin_brick-round';
import { withPinClearBrick } from '../../_pin/Textinput_pin_clear-brick';
import { withPinClearClear } from '../../_pin/Textinput_pin_clear-clear';
import { withPinClearRound } from '../../_pin/Textinput_pin_clear-round';
import { withPinRoundBrick } from '../../_pin/Textinput_pin_round-brick';
import { withPinRoundClear } from '../../_pin/Textinput_pin_round-clear';
import { withPinRoundRound } from '../../_pin/Textinput_pin_round-round';
// _baseline
import { withBaseline } from '../../_baseline/Textinput_baseline';

export * from '../../Textinput@desktop';

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
)(TextinputDesktop);

export type ITextinputProps = ExtractProps<typeof Textinput>;
