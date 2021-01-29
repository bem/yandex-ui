import { Placement, BasePlacement, Offsets, top, left, right } from '@popperjs/core';

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
