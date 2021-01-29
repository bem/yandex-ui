import { BasePlacement, VariationPlacement } from '@popperjs/core';

export type Direction = BasePlacement | VariationPlacement;

export const directions: Direction[] = [
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
];
