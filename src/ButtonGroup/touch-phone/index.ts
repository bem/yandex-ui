import { compose, composeU, ExtractProps } from '@bem-react/core';

import { ButtonGroup as ButtonGroupDesktop } from '../ButtonGroup';

// _margin
import { withGapS } from '../_gap/ButtonGroup_gap_s';
import { withGapM } from '../_gap/ButtonGroup_gap_m';
import { withGapL } from '../_gap/ButtonGroup_gap_l';
import { withGapXL } from '../_gap/ButtonGroup_gap_xl';
// _pin
import { withPinCircle } from '../_pin/ButtonGroup_pin_circle';
import { withPinRound } from '../_pin/ButtonGroup_pin_round';

export * from '../ButtonGroup';
export * from '../ButtonGroup.utils';

export const ButtonGroup = compose(
    composeU(withGapS, withGapM, withGapL, withGapXL),
    composeU(withPinCircle, withPinRound),
)(ButtonGroupDesktop);

export type ButtonGroupProps = ExtractProps<typeof ButtonGroup>;
