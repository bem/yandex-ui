export function isIOS() {
    return (
        typeof window !== 'undefined' &&
        window.navigator &&
        (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1))
    );
}
