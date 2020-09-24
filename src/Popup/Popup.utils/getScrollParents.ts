function getWindow(node: HTMLElement | Window): Window {
    if (node.toString() !== '[object Window]') {
        const ownerDocument = (node as HTMLElement).ownerDocument;
        return (ownerDocument && ownerDocument.defaultView) || window;
    }

    return node as Window;
}

function getComputedStyle(element: HTMLElement): CSSStyleDeclaration {
    return getWindow(element).getComputedStyle(element);
}

function isHTMLElement(node: HTMLElement) {
    // Property 'HTMLElement' does not exist on type 'Window'
    // @ts-ignore
    const OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement;
}

function getNodeName(element: HTMLElement): string | null {
    return element ? (element.nodeName || '').toLowerCase() : null;
}

function getParentNode(element: HTMLElement): HTMLElement {
    if (getNodeName(element) === 'html') {
        return element;
    }

    return (
        element.parentNode || // DOM Element detected
        // @ts-ignore
        element.host || // ShadowRoot detected
        document.ownerDocument || // Fallback to ownerDocument if available
        document.documentElement // Or to documentElement if everything else fails
    );
}

function getScrollParent(node: HTMLElement): HTMLElement {
    const nodeName = getNodeName(node);

    if (nodeName && ['html', 'body'].indexOf(nodeName) >= 0) {
        return node.ownerDocument!.body;
    }

    if (isHTMLElement(node)) {
        // Firefox wants us to check `-x` and `-y` variations as well
        const { overflow, overflowX, overflowY } = getComputedStyle(node);

        if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
            return node as HTMLElement;
        }
    }

    return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
export function listScrollParents(
    element: HTMLElement | null,
    list: Array<HTMLElement> = [],
): Array<HTMLElement> {
    if (!element) {
        return [document.body];
    }

    const scrollParent = getScrollParent(element);
    const isBody = getNodeName(scrollParent) === 'body';
    const updatedList = list.concat(scrollParent);

    return isBody
        ? updatedList
        : updatedList.concat(listScrollParents(getParentNode(scrollParent)));
}
