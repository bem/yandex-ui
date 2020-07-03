import { Omit } from '../typings/utility-types';

/**
 * Возвращает новый объект с ключами из `object` за исключением тех которые указаны в `keys`.
 *
 * @example
 * omit({ f1: 'v1', f2: 'v2' }, ['f1'])
 *
 * @param shape Исходный объект.
 * @param paths Список ключей которые нужно не учитывать.
 */
export function omit<T extends Record<string, any>, K extends keyof T>(shape: T, paths: ReadonlyArray<K> | K[]) {
    const keys = Object.keys(shape);
    const result = {} as Omit<T, K>;

    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        if (paths.indexOf(key as K) === -1) {
            result[key as Exclude<keyof T, K>] = shape[key];
        }
    }

    return result;
}
