type Fn = (...args: any[]) => any;

/**
 * Позволяет безопасно вызывать пользовательские и внутренние функции компонента.
 *
 * @example
 * forkFn(props.onClick, internalOnClick)
 */
export const forkFn = (originFn: Fn | undefined, forkedFn: Fn): Fn => {
    return (...args: any[]) => {
        if (originFn !== undefined) {
            originFn(...args);
        }
        forkedFn(...args);
    };
};
