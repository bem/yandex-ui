import { getTabbables } from './tabbable';

const FOCUS_TRAP_GUARD_ATTR = 'focusTrapGuard';

interface ScrollableElement {
    element: HTMLElement;
    scrollTop: number;
    scrollLeft: number;
}

let supportsPreventScrollCached: boolean | null = null;
function supportsPreventScroll() {
    if (supportsPreventScrollCached === null) {
        supportsPreventScrollCached = false;

        try {
            const element = document.createElement('div');

            element.focus({
                get preventScroll() {
                    supportsPreventScrollCached = true;
                    return true;
                },
            });
        } catch (e) {
            // ignore
        }
    }

    return supportsPreventScrollCached;
}

function getScrollableElements(element: HTMLElement): ScrollableElement[] {
    const scrollableElements: ScrollableElement[] = [];
    const rootScrollingElement = document.scrollingElement || document.documentElement;

    let parent = element.parentNode;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
            scrollableElements.push({
                element: parent,
                scrollTop: parent.scrollTop,
                scrollLeft: parent.scrollLeft,
            });
        }
        parent = parent.parentNode;
    }

    if (rootScrollingElement instanceof HTMLElement) {
        scrollableElements.push({
            element: rootScrollingElement,
            scrollTop: rootScrollingElement.scrollTop,
            scrollLeft: rootScrollingElement.scrollLeft,
        });
    }

    return scrollableElements;
}

function restoreScrollPosition(scrollableElements: ScrollableElement[]) {
    for (const { element, scrollTop, scrollLeft } of scrollableElements) {
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}

export function getActiveElement() {
    return document.activeElement as HTMLElement | null;
}

export function isElementInScope(scope: Element, element: Element) {
    return scope.contains(element);
}

export function isFocusFree() {
    return getActiveElement() === document.body;
}

export function createGuard(tabIndex: number) {
    const element = document.createElement('span');
    element.tabIndex = tabIndex;
    Object.assign(element.style, {
        width: '1px',
        height: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        top: '1px',
        left: '1px',
    });
    element.setAttribute('aria-hidden', 'true');
    element.dataset[FOCUS_TRAP_GUARD_ATTR] = 'true';

    return element;
}

export function isGuard(node: HTMLElement) {
    return Boolean(node.dataset[FOCUS_TRAP_GUARD_ATTR]);
}

export function removeElementFromDocument(element: Element) {
    if (!element.parentNode) {
        return;
    }

    element.parentNode.removeChild(element);
}

function focusWithoutScrolling(element: HTMLElement) {
    if (supportsPreventScroll()) {
        element.focus({ preventScroll: true });
    } else {
        const scrollableElements = getScrollableElements(element);
        element.focus();
        restoreScrollPosition(scrollableElements);
    }
}

export function focusElement(element?: HTMLElement | null, preventScroll?: boolean) {
    if (!element) {
        return;
    }

    try {
        if (preventScroll) {
            focusWithoutScrolling(element);
        } else {
            element.focus();
        }
    } catch (e) {
        // ignore
    }
}

export function focusFirstIn(scope: HTMLElement) {
    const [first] = getTabbables(scope, (node) => !isGuard(node));

    focusElement(first);
}

export function getNextTabbableIndex(current: number, count: number, step: number) {
    if (current === -1) {
        return 0;
    }

    return count > 0 ? (count + current + step) % count : -1;
}
