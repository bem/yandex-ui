import { canUseDOM } from '../canUseDOM';

export function setStyle<T extends HTMLElement>(
    element: T,
    style: Partial<CSSStyleDeclaration>,
): Partial<CSSStyleDeclaration> {
    const prev: Partial<CSSStyleDeclaration> = {};

    for (const key in style) {
        if (style.hasOwnProperty(key)) {
            prev[key] = element.style[key];
        }
    }

    for (const key in style) {
        if (style.hasOwnProperty(key)) {
            element.style[key] = style[key] as string;
        }
    }

    return prev;
}

function isScrollable(node: HTMLElement) {
    const style = getComputedStyle(node);

    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}

export function getScrollParent(node: HTMLElement | null): HTMLElement {
    while (node && !isScrollable(node)) {
        node = node.parentElement;
    }

    return node || document.documentElement;
}

let cachedScrollGap: number;
export function getScrollBarGap() {
    if (typeof document === 'undefined') {
        return 0;
    }

    if (cachedScrollGap === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');

        outer.style.position = 'absolute';
        outer.style.top = '0';
        outer.style.left = '0';
        outer.style.pointerEvents = 'none';
        outer.style.visibility = 'hidden';
        outer.style.width = '200px';
        outer.style.height = '150px';
        outer.style.overflow = 'hidden';

        outer.appendChild(inner);
        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cachedScrollGap = widthContained - widthScroll;
    }

    return cachedScrollGap;
}

export function isPassiveEventsSupported() {
    let supported = false;

    if (!canUseDOM()) {
        return false;
    }

    try {
        const listener = () => null;
        const opts = {
            get passive() {
                supported = true;
                return undefined;
            },
        };

        window.addEventListener('testPassive', listener, opts);
        window.removeEventListener('testPassive', listener);
    } catch (e) {}

    return supported;
}

export function isRootHTMLElement(node: HTMLElement) {
    return node === document.body || node === document.documentElement;
}
