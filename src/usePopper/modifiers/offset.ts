import { Modifier, ModifierArguments } from '@popperjs/core';

import { directions } from '../directions';
import { getLayoutRect, distanceAndSkiddingToXY } from '../utils';

export type OffsetOptions = {
    offset: [number, number];
    tailOffset?: number;
};

/**
 * Модификатор, устанавливающий отступы для попапа и хвостика.
 */
export const offset: Modifier<'offset', OffsetOptions> = {
    name: 'offset',
    enabled: true,
    fn: offsetFn,
    phase: 'main',
    requires: ['popperOffsets'],
};

// Не используем offset из popper, т.к. нам необходимо
// применить дополнительное смещение с учетом хвостика, а также
// округлить значения для правильного выравнивания.
function offsetFn({ state, options }: ModifierArguments<OffsetOptions>) {
    const { offset = [0, 0], tailOffset } = options;

    if (state.modifiersData.arrow && tailOffset) {
        if (state.modifiersData.arrow.x) {
            state.modifiersData.arrow.x += tailOffset;
        }
        if (state.modifiersData.arrow.y) {
            state.modifiersData.arrow.y += tailOffset;
        }
    }

    if (state.modifiersData.popperOffsets && state.elements.arrow) {
        const { width } = getLayoutRect(state.elements.arrow);
        // Смещаем хвостик на половину, т.к. он всегда должен быть вписан в квадрат,
        // для правильного позиционирования во всех направлениях.
        const { x, y } = distanceAndSkiddingToXY(state.placement, [0, width / 2]);
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }

    const data = directions.reduce<any>((acc, placement) => {
        acc[placement] = distanceAndSkiddingToXY(placement, offset);
        return acc;
    }, {});

    const { x, y } = data[state.placement];

    if (state.modifiersData.popperOffsets) {
        state.modifiersData.popperOffsets.x = Math.ceil(state.modifiersData.popperOffsets.x + x);
        state.modifiersData.popperOffsets.y = Math.ceil(state.modifiersData.popperOffsets.y + y);
    }

    // Записываем данные для дальнейшего использования в detectOverflow.
    state.modifiersData.offset = data;
}
