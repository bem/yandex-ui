/**
 * Функция-компаратор, сравнивает два объекта на равенство значений.
 *
 * За основу была взята библиотека [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)
 * с удалением проверок на лишние структуры данных.
 */
export function isEqual(a: any, b: any): boolean {
    if (a === b) return true;

    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;

        let length;
        let i;
        let keys;

        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;) if (!isEqual(a[i], b[i])) return false;
            return true;
        }

        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        if (typeof Element !== 'undefined' && a instanceof Element) return false;

        for (i = length; i-- !== 0;) {
            if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                continue;
            }
            if (!isEqual(a[keys[i]], b[keys[i]])) return false;
        }

        return true;
    }

    return a !== a && b !== b;
}
