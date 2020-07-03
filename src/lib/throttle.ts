export const throttle = (callback: any) => {
    let rid: any = null;
    let saveArgs: any[];

    const makeCallback = (context: any) => () => {
        rid = null;
        callback.apply(context, saveArgs);
    };

    const throttled = function(...args: any[]) {
        saveArgs = args;
        if (rid === null) {
            // @ts-ignore this
            rid = requestAnimationFrame(makeCallback(this));
        }
    };

    return throttled;
};
