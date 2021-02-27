import { Placement, BasePlacement, Offsets } from '@popperjs/core';

// Не используем константы из popper, так как они отсутствуют в commonjs сборке.
// Например, при тестировании с помощью jest можно из-за этого столкнуться с непонятными проблемами.
// https://github.com/popperjs/popper-core/issues/1259
export const top = 'top';
export const left = 'left';
export const right = 'right';
export const bottom = 'bottom';

import { Boundary } from './types';

export function getLayoutRect(element: HTMLElement) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight,
    };
}

export default function getBasePlacement(placement: Placement): BasePlacement {
    return placement.split('-')[0] as any;
}

export function distanceAndSkiddingToXY(placement: Placement, offset: [number, number]): Offsets {
    const basePlacement = getBasePlacement(placement);
    const invertDistance = [left, top].indexOf(basePlacement as any) >= 0 ? -1 : 1;

    const skidding = offset[0] || 0;
    const distance = (offset[1] || 0) * invertDistance;

    return [left, right].indexOf(basePlacement as any) >= 0
        ? { x: distance, y: skidding }
        : { x: skidding, y: distance };
}

export function getElementsFromRefs(boundary?: Boundary): HTMLElement[] | undefined {
    const refs = Array.isArray(boundary) ? boundary : [boundary];

    const elements = refs.reduce(
        (acc, ref) => {
            if (ref && ref.current) {
                acc.push(ref.current);
            }

            return acc;
        },
        [] as HTMLElement[],
    );

    return elements.length ? elements : undefined;
}
