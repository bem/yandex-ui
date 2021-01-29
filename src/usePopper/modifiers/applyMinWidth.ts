import { Modifier, ModifierArguments } from '@popperjs/core';

/**
 * Модификатор, устанавливающий минимальную ширину попапа относительно якоря.
 */
export const applyMinWidth: Modifier<'applyMinWidth', {}> = {
    name: 'applyMinWidth',
    enabled: true,
    fn: applyMinWidthFn,
    effect: applyMinWidthEffect,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
};

function applyMinWidthFn({ state }: ModifierArguments<{}>) {
    state.styles.popper.minWidth = `${state.rects.reference.width}px`;
}

function applyMinWidthEffect({ state }: ModifierArguments<{}>) {
    if (state.elements.reference instanceof HTMLElement) {
        state.elements.popper.style.minWidth = `${state.elements.reference.offsetWidth}px`;
    }
}
