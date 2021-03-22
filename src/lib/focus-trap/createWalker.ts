export function createWalker(root: Node, predicate: (node: Node) => boolean) {
    const acceptNode: NodeFilter['acceptNode'] = (node) => {
        if (predicate(node)) {
            return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_SKIP;
    };

    // В IE11 необходимо передать функцию, а не объект
    const safeFilter = (acceptNode as unknown) as NodeFilter;
    safeFilter.acceptNode = acceptNode;

    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        safeFilter,
        /* в IE11 обязателен последний аргумент */ false,
    );

    return walker;
}
