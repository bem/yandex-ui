/**
 * Возвращает плоский список элементов.
 *
 * @example
 * flatMap((item) => item.items ? item.items : item, items)
 *
 * @param func Функция возвращающая элемент который нужно сделать плоским.
 * @param array Исходный список.
 */
export const flatMap = (func: (value: any) => any, array: any[]) => array.reduce((prev, x) => prev.concat(func(x)), []);
