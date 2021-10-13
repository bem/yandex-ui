import { ComponentProps } from 'react';
import { compose, composeU } from '@bem-react/core';

import {
    DateTimeField as UnstyledDateTimeField,
    DateTimeRangeField as UnstyledDateTimeRangeField,
    withPinBrickBrick,
    withPinBrickClear,
    withPinBrickRound,
    withPinClearBrick,
    withPinClearClear,
    withPinClearRound,
    withPinRoundBrick,
    withPinRoundClear,
    withSizeM,
    withSizeS,
    withViewDefault,
} from '..';

export * from '../..';

const enhancer = compose(
    composeU(
        withPinBrickBrick,
        withPinBrickClear,
        withPinBrickRound,
        withPinClearBrick,
        withPinClearClear,
        withPinClearRound,
        withPinRoundBrick,
        withPinRoundClear,
    ),
    composeU(withSizeS, withSizeM),
    withViewDefault,
);

export const DateTimeField = enhancer(UnstyledDateTimeField);

export type DateTimeFieldProps = ComponentProps<typeof DateTimeField>;

export const DateTimeRangeField = enhancer(UnstyledDateTimeRangeField);

export type DateTimeRangeFieldProps = ComponentProps<typeof DateTimeRangeField>;

if (process.env.NODE_ENV !== 'production') {
    DateTimeField.displayName = 'Bundle(DateTimeFieldDesktop)';
    DateTimeRangeField.displayName = 'Bundle(DateTimeRangeFieldDesktop)';
}
