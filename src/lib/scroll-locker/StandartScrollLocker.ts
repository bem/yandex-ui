import { getScrollBarGap, isRootHTMLElement, setStyle } from './utils';

const randomKey = Math.random()
    .toString(36)
    .slice(2);
const SCROLL_LOCK_STATE_KEY = `__scrollLockState$${randomKey}` as '__scrollLockState$*';

interface ScrollLockState {
    initialStyle: Partial<CSSStyleDeclaration>;
    count: number;
}

/**
 * @internal
 */
declare global {
    interface HTMLElement {
        [SCROLL_LOCK_STATE_KEY]?: ScrollLockState;
    }
}

function getLockState(node: HTMLElement) {
    return node[SCROLL_LOCK_STATE_KEY];
}

function setLockState(node: HTMLElement, state: ScrollLockState) {
    node[SCROLL_LOCK_STATE_KEY] = state;
}

function clearLockState(node: HTMLElement) {
    delete node[SCROLL_LOCK_STATE_KEY];
}

function hasStaticVerticalScroll(node: HTMLElement) {
    const { overflowY } = getComputedStyle(node);

    return /scroll/.test(overflowY);
}

function getScrollbarSize(node: HTMLElement) {
    const hasScrollbarRoot = isRootHTMLElement(node) && window.innerWidth - document.documentElement.clientWidth > 0;
    const hasScrollbarNode = node.scrollHeight > node.clientHeight;

    if (hasScrollbarRoot || hasScrollbarNode || hasStaticVerticalScroll(node)) {
        return getScrollBarGap();
    }

    return 0;
}

export function lock(container: HTMLElement) {
    const state = getLockState(container);

    if (state) {
        state.count++;
        return;
    }

    const scrollBarSize = getScrollbarSize(container);
    const computedPaddingRight = parseInt(getComputedStyle(container).getPropertyValue('padding-right'), 10);

    const initialStyle = setStyle(container, {
        paddingRight: `${computedPaddingRight + scrollBarSize}px`,
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden',
    });

    setLockState(container, { initialStyle, count: 1 });
}

export function unlock(container: HTMLElement) {
    const state = getLockState(container);

    if (!state) {
        return;
    }

    state.count--;

    if (state.count === 0) {
        setStyle(container, state.initialStyle);
        clearLockState(container);
    }
}
