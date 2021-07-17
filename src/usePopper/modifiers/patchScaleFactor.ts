import { Modifier, ModifierArguments } from '@popperjs/core';

/**
 * Модификатор, исправляющий положение попапа с учетом scale-трансформации якоря.
 */
export const patchScaleFactor: Modifier<'patchScaleFactor', {}> = {
    name: 'patchScaleFactor',
    enabled: true,
    fn: patchScaleFactorFn,
    phase: 'beforeRead',
    requires: ['popperOffsets'],
};

function patchScaleFactorFn({ state, instance }: ModifierArguments<{}>) {
    (instance as any).__patchCounter = (instance as any).__patchCounter ?? 0;

    const { reference } = state.elements;
    const patchCounter = (instance as any).__patchCounter;

    // Need only two updates for apply patch.
    if (patchCounter > 2) {
        return;
    }

    // Skip changes for virtual element.
    if (!(reference instanceof HTMLElement)) {
        return;
    }

    const [scaleX, scaleY] = getScaleRatio(reference);

    // Apply changes after first render, because if apply at first render,
    // then preventOverflow will be broken.
    if (patchCounter === 1 && (scaleX !== 1 || scaleY !== 1)) {
        const { width, height } = state.rects.reference;

        // Use "toFixed" because browser can render sub-pixel only with two numbers after comma.
        const originalWidth = Number((width / scaleX).toFixed(2));
        const originalHeight = Number((height / scaleY).toFixed(2));

        const diffX = (originalWidth - width) / 2;
        const diffY = (originalHeight - height) / 2;

        state.rects.reference = {
            // Use round because popper use floor or ceil inside popperOffset
            // and set wrong position with floated numbers.
            x: Math.round(state.rects.reference.x - diffX),
            y: Math.round(state.rects.reference.y - diffY),
            width: originalWidth,
            height: originalHeight,
        };
    }

    (instance as any).__patchCounter++;
}

function getScaleRatio(element: HTMLElement): [number, number] {
    const styles = window.getComputedStyle(element);
    const matrix = styles.transform || styles.webkitTransform;

    const matrixType = matrix.indexOf('3d') >= 0 ? '3d' : '2d';
    const match = matrix.match(/matrix.*\((.+)\)/);

    if (matrixType === '2d' && match !== null) {
        const matrixValues = match[1].split(', ');
        // matrix(1, 0, 0, 1, 0, 0)
        // x[1] __^
        // y[3] ___________^
        return [Number(matrixValues[0]), Number(matrixValues[3])];
    }

    return [1, 1];
}
