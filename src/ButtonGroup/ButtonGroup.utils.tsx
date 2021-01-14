import { useCallback, useState, MouseEvent, ElementType } from 'react';

/**
 * Функция, возвращающая детей в `array` по индексам `indices`
 *
 * @example
 *
 *  const indices = [1, 3, 4]
 *  const array = ['a', 'b', 'c', {}, []]
 *
 *  const res = indicesToArray(indices, array)
 *  // ['b', {}, []]
 *
 * @param indices number[] Получает на вход массив индексов, по которым должны выбраться поля
 * @param array any[] Откуда забираются данные
 */
const indicesToArray = (indices: number[], array: any[]): any[] => {
    const res = [];

    for (let index of indices) {
        res.push(array[index]);
    }

    return res;
};

/**
 * Реакт-хук состояния для компонента ButtonGroup.
 *
 *
 * @example
 *
 * const state = useButtonGroupState({ type: 'radio' })
 * return <ButtonGroup {...state} />
 */
export function useButtonGroupState({
    type,
    value,
    mappings,
}: {
    type: 'radio' | 'checkbox';
    value?: number[];
    mappings?: any[];
}): { onClick: (event: MouseEvent<ElementType>, index: number) => void; selected: number[]; mapped: any[] } {
    const [selected, setSelected] = useState(value || []);
    const [mapped, setMapped] = useState(indicesToArray(selected, mappings || []));

    const onClick = useCallback(
        (_event: MouseEvent<ElementType>, nextValue: number) => {
            const includes = selected.includes(nextValue);
            let indices = [];

            if (type === 'radio') {
                indices = includes ? [] : [nextValue];
            } else {
                indices = includes ? selected.filter((el) => el !== nextValue) : [...selected, nextValue];
            }

            setSelected(indices);
            setMapped(indicesToArray(indices, mappings || []));
        },
        [mappings, selected, type],
    );

    return { onClick, selected, mapped };
}
