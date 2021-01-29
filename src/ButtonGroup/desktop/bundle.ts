import { compose, composeU, ExtractProps } from '@bem-react/core';

import {
    withGapS,
    withGapM,
    withGapL,
    withGapXL,
    withPinCircle,
    withPinRound,
    ButtonGroup as ButtonGroupDesktop,
} from '..';

export * from '..';

export const ButtonGroup = compose(
    composeU(withGapS, withGapM, withGapL, withGapXL),
    composeU(withPinCircle, withPinRound),
)(ButtonGroupDesktop);

export type ButtonGroupProps = ExtractProps<typeof ButtonGroup>;
