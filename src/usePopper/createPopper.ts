import { OptionsGeneric, popperGenerator } from '@popperjs/core';
import { arrow, computeStyles, eventListeners, flip, popperOffsets, preventOverflow } from '@popperjs/core';

import { applyStyles } from './modifiers/applyStyles';
import { offset } from './modifiers/offset';
import { patchScaleFactor } from './modifiers/patchScaleFactor';
import { hide } from './modifiers/hide';

/**
 * Набор стандартных popper модификаторов.
 *
 * @link https://popper.js.org/docs/v2/modifiers
 */
const defaultModifiers = [
    applyStyles,
    arrow,
    computeStyles,
    eventListeners,
    flip,
    hide,
    offset,
    patchScaleFactor,
    popperOffsets,
    preventOverflow,
];

export type Modifiers = Partial<typeof defaultModifiers[number]>;

/**
 * Набор popper свойств.
 *
 * @link https://popper.js.org/docs/v2/constructors/#options
 */
export type Options = Partial<OptionsGeneric<Modifiers> & { children: any }>;

// Создаем свой инстанс popper, для того,
// чтобы не подключать неиспользуемые модификаторы.
export const createPopper = popperGenerator({ defaultModifiers });
