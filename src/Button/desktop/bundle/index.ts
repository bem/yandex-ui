import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Button as ButtonDesktop } from '../../Button@desktop';
// _baseline
import { withBaseline } from '../../_baseline/Button_baseline';
// _pin
import { withPinBrickBrick } from '../../_pin/Button_pin_brick-brick';
import { withPinBrickCircle } from '../../_pin/Button_pin_brick-circle';
import { withPinBrickClear } from '../../_pin/Button_pin_brick-clear';
import { withPinBrickRound } from '../../_pin/Button_pin_brick-round';
import { withPinCircleBrick } from '../../_pin/Button_pin_circle-brick';
import { withPinCircleCircle } from '../../_pin/Button_pin_circle-circle';
import { withPinCircleClear } from '../../_pin/Button_pin_circle-clear';
import { withPinClearBrick } from '../../_pin/Button_pin_clear-brick';
import { withPinClearCircle } from '../../_pin/Button_pin_clear-circle';
import { withPinClearClear } from '../../_pin/Button_pin_clear-clear';
import { withPinClearRound } from '../../_pin/Button_pin_clear-round';
import { withPinRoundBrick } from '../../_pin/Button_pin_round-brick';
import { withPinRoundClear } from '../../_pin/Button_pin_round-clear';
// _size
import { withSizeL } from '../../_size/Button_size_l';
import { withSizeM } from '../../_size/Button_size_m';
import { withSizeS } from '../../_size/Button_size_s';
// _theme
import { withThemeAction } from '../../_theme/Button_theme_action@desktop';
import { withThemeClear } from '../../_theme/Button_theme_clear@desktop';
import { withThemeLink } from '../../_theme/Button_theme_link';
import { withThemeNormal } from '../../_theme/Button_theme_normal@desktop';
import { withThemePseudo } from '../../_theme/Button_theme_pseudo@desktop';
import { withThemeRaised } from '../../_theme/Button_theme_raised';
import { withThemeWebSearch } from '../../_theme/Button_theme_websearch';
// _type
import { withTypeLink } from '../../_type/Button_type_link';
import { withTypeSubmit } from '../../_type/Button_type_submit';
// _view
import { withViewDefault } from '../../_view/Button_view_default@desktop';
import { withViewAction } from '../../_view/Button_view_action@desktop';
import { withViewClear } from '../../_view/Button_view_clear@desktop';
import { withViewLink } from '../../_view/Button_view_link@desktop';
import { withViewPseudo } from '../../_view/Button_view_pseudo@desktop';
import { withViewRaised } from '../../_view/Button_view_raised@desktop';

// _width
import { withWidthAuto } from '../../_width/Button_width_auto';
import { withWidthMax } from '../../_width/Button_width_max';

export * from '../../Button@desktop';

export const Button = compose(
    composeU(
        composeU(
            withPinBrickBrick,
            withPinBrickCircle,
            withPinBrickClear,
            withPinBrickRound,
            withPinCircleBrick,
            withPinCircleCircle,
            withPinCircleClear,
            withPinClearBrick,
        ),
        withPinClearCircle,
        withPinClearClear,
        withPinClearRound,
        withPinRoundBrick,
        withPinRoundClear,
    ),
    composeU(withSizeL, withSizeM, withSizeS),
    composeU(
        withThemeAction,
        withThemeClear,
        withThemeLink,
        withThemeNormal,
        withThemePseudo,
        withThemeRaised,
        withThemeWebSearch,
    ),
    composeU(withTypeLink, withTypeSubmit),
    composeU(withWidthAuto, withWidthMax),
    composeU(withViewDefault, withViewAction, withViewClear, withViewLink, withViewPseudo, withViewRaised),
    withBaseline,
)(ButtonDesktop);

export type IButtonProps = ExtractProps<typeof Button>;
