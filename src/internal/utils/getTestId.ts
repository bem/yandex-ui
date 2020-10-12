/**
 * Возвращает ID для использования в тестах.
 *
 * @example
 *
 * getTestId('host', testId)
 */
export function getTestId(prefix:string, id?: string): string | undefined {
    if (id === undefined) {
        return undefined;
    }
    return `${id}-${prefix}`;
}
