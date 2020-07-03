/**
 * Проверяет, можно использовать браузерное API в текущем окружении.
 *
 * @example
 * if (canUseDOM()) {
 *   document.querySelector('...')
 * }
 */
export const canUseDOM = (): boolean => {
    return (
        typeof window !== 'undefined' &&
        typeof window.document !== 'undefined' &&
        typeof window.document.createElement !== 'undefined'
    );
};
