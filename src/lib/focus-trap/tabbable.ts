import { createWalker } from './createWalker';

const TABBABLE_SELECTORS = [
    'input',
    'select',
    'textarea',
    'button',
    'a[href]',
    'area[href]',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
    'details>summary:first-of-type',
    'details',
].join(',');

let protoMatches: Element['matches'] | null = null;
if (typeof Element !== 'undefined') {
    protoMatches =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        // @ts-expect-error
        Element.prototype.matchesSelector ||
        // @ts-expect-error
        Element.prototype.mozMatchesSelector ||
        // @ts-expect-error
        Element.prototype.msMatchesSelector;
}

function matches(node: Element, selectors: string) {
    return protoMatches ? protoMatches.call(node, selectors) : false;
}

function getTabindex(node: HTMLElement) {
    const tabIndexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

    if (!isNaN(tabIndexAttr)) {
        return tabIndexAttr;
    }

    // Браузеры не возвращают правильно "tabIndex" для contentEditable узлов,
    // поэтому, если у них нет специально установленного атрибута tabindex, предположим, что он равен 0.
    if (node.contentEditable === 'true') {
        return 0;
    }

    // Если `tabIndex` не указан явно для <details/>, <audio controls/> и <video controls/>,
    // то в Chrome значение по-умолчанию будет равен -1, а в FF равен 0;
    // для консистентности, будем считать, что `tabIndex` равен 0
    if (
        (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') &&
        node.getAttribute('tabindex') === null
    ) {
        return 0;
    }

    return node.tabIndex;
}

function isInput(node: HTMLElement): node is HTMLInputElement {
    return node.tagName === 'INPUT';
}

function isHiddenInput(node: HTMLElement): node is HTMLInputElement {
    return isInput(node) && node.type === 'hidden';
}

function isRadioInput(node: HTMLElement): node is HTMLInputElement {
    return isInput(node) && node.type === 'radio';
}

function isHidden(node: Element) {
    if (window.getComputedStyle(node).visibility === 'hidden') {
        return true;
    }

    let parent: Element | null = node;
    while (parent) {
        if (window.getComputedStyle(parent).display === 'none') {
            return true;
        }

        parent = parent.parentElement;
    }

    return false;
}

function getCheckedRadio(radio: HTMLInputElement) {
    if (radio.checked) {
        return radio;
    }

    const walker = createWalker(radio.form || radio.ownerDocument, (node) => {
        const element = node as HTMLElement;

        return isRadioInput(element) && element.name === radio.name && element.checked && element.form === radio.form;
    });

    return walker.nextNode() as HTMLInputElement | null;
}

function isTabbableRadio(radio: HTMLInputElement) {
    if (!radio.name) {
        return true;
    }

    const checked = getCheckedRadio(radio);

    return !checked || checked === radio;
}

function isTabbable(node: HTMLElement) {
    if (!matches(node, TABBABLE_SELECTORS) || (isRadioInput(node) && !isTabbableRadio(node)) || isHiddenInput(node)) {
        return false;
    }

    return getTabindex(node) >= 0 && !(node as any).disabled && !isHidden(node);
}

interface TabbableNode {
    index: number;
    tabIndex: number;
    node: HTMLElement;
}

export function getTabbables(root: HTMLElement, filter?: (node: HTMLElement) => boolean) {
    const walker = createWalker(root, (node) => {
        const tabbable = isTabbable(node as HTMLElement);

        if (filter) {
            return tabbable && filter(node as HTMLElement);
        }

        return tabbable;
    });

    const nodes: TabbableNode[] = [];
    const regular: HTMLElement[] = [];

    let index = 0;
    while (walker.nextNode()) {
        const node = walker.currentNode as HTMLElement;
        const tabIndex = getTabindex(node);

        if (tabIndex === 0) {
            regular.push(node);
        } else {
            nodes.push({
                index: index++,
                tabIndex: getTabindex(node),
                node,
            });
        }
    }

    return nodes
        .sort((a, b) => (a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex))
        .map((v) => v.node)
        .concat(regular);
}
