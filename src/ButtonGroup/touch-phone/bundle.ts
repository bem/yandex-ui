import { compose, composeU, ExtractProps } from '@bem-react/core';

import {
    withGapS,
    withGapM,
    withGapL,
    withGapXL,
    withPinCircle,
    withPinRound,
    ButtonGroup as ButtonGroupTouchPhone,
} from '..';

export * from '..';

export const ButtonGroup = compose(
    composeU(withGapS, withGapM, withGapL, withGapXL),
    composeU(withPinCircle, withPinRound),
)(ButtonGroupTouchPhone);

export type ButtonGroupProps = ExtractProps<typeof ButtonGroup>;
