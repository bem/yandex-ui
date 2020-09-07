/**
 * Возвращает DOM-узел для монтирования компонента.
 */
export const getRoot = (): HTMLElement | null => {
    return document.getElementById('root');
};

/**
 * Хелпер, создающий корневой контейнер для монтирования,
 * необходим для того, чтобы избежать ошибок при монтировании в enzyme.
 */
export const jestEnvironmentSetup = (): void => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
        const node = document.createElement('div');
        node.setAttribute('id', 'root');
        document.body.appendChild(node);
    });

    // eslint-disable-next-line no-undef
    afterEach(() => {
        const node = getRoot();
        if (node !== null) {
            document.body.removeChild(node);
        }
    });
};
