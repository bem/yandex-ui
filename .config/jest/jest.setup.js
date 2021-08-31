require('@testing-library/jest-dom/extend-expect');

global.requestAnimationFrame = (callback) => {
    return setTimeout(callback, 0);
};

global.cancelAnimationFrame = (handle) => {
    return clearTimeout(handle);
};
