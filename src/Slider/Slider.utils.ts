import { useCallback, useState } from 'react';
import { Direction } from 'react-range';

/**
 * Возвращает позицию элемента Range.
 *
 * @param values - Текущее значение слайдера
 * @param min - Минимальное значение слайдера
 * @param max - Максимальное значение слайдера
 */
export function getRangePosition(
    values: number[],
    min: number,
    max: number,
    reverse?: boolean,
): { top: string; bottom: string } | { left: string; right: string } {
    const positions = values.map((value) => ((value - min) / (max - min)) * 100);

    // TODO: Необходим рефакторинг.
    if (values.length === 1) {
        if (reverse) {
            return { left: `${100 - positions[positions.length - 1]}%`, right: '0%' };
        }
        return { left: '0%', right: `${100 - positions[positions.length - 1]}%` };
    }

    if (reverse) {
        return { left: `${100 - positions[positions.length - 1]}%`, right: `${positions[0]}%` };
    }

    return { left: `${positions[0]}%`, right: `${100 - positions[positions.length - 1]}%` };
}

/**
 * Возвращает список пометок на линии.
 *
 * @param min - Минимальное значение слайдера
 * @param max - Максимальное значение слайдера
 * @param step - Шаг смещения бегунка
 */
export function getTicks(min: number, max: number, step: number): number[] {
    // Добавляем единицу чтобы учесть нулевую позицию.
    const ticksLength = (max - min) / step + 1;
    return Array.from({ length: ticksLength }).map((_, idx) => min + step * idx);
}

/**
 * Нормализует значения в пределах диапазона.
 *
 * @param values - Текущее значение слайдера
 * @param min - Минимальное значение слайдера
 * @param max - Максимальное значение слайдера
 */
export function normalizeValue(values: number[], min: number, max: number): number[] {
    if (values.length === 0 || values.length > 2) {
        throw new RangeError('Свойство "value" должно принимать одно или два значения.');
    }

    return values.map((value) => {
        if (value > max) return max;
        if (value < min) return min;
        return value;
    });
}

/**
 * Возвращает направление слайдера.
 *
 * @param vertical - Вертикальное положение слайдера
 * @param reverse - Обратное направление слайдера
 */
export function getDirection(vertical?: boolean, reverse?: boolean): Direction {
    if (vertical && reverse) return Direction.Down;
    if (vertical && !reverse) return Direction.Up;
    if (!vertical && reverse) return Direction.Left;
    return Direction.Right;
}

/**
 * Реакт-хук состояния для компонента Slider.
 *
 * @experimental
 *
 * @example
 *
 * const state = useSliderState({ value: [10] })
 * return <Slider {...state} />
 */
export function useSliderState(options: {
    value: number[];
}): { onInput: (event: any, value: number[]) => void; value: number[] } {
    const [value, setValue] = useState(options.value);
    const onInput = useCallback((_, nextValue) => setValue(nextValue), []);
    return { onInput, value };
}
