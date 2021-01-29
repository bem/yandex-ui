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
    const { reference } = state.elements;
    if (!(instance as any).__patchedScaleFactor) {
        (instance as any).__patchedScaleFactor = true;
        // Вызываем обновление только в случае если у якоря есть трансформация.
        if (reference instanceof HTMLElement && hasTransformScale(reference)) {
            // Устанавливаем задержку в 200ms для ожидания завершения большинства анимаций.
            setTimeout(() => instance.update(), 200);
        }
    }
}

function hasTransformScale(element: HTMLElement): boolean {
    return window.getComputedStyle(element).transform.indexOf('matrix') !== -1;
}
