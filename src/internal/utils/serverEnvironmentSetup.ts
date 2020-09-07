/**
 * Хелпер, который симулирует серверное окружение во время запуска тестов.
 */
export const serverEnvironmentSetup = () => {
    const prevWindow = (global as any).window;
    const prevDocument = (global as any).document;
    const prevRAF = (global as any).requestAnimationFrame;

    // eslint-disable-next-line no-undef
    beforeEach(() => {
        delete (global as any).window;
        delete (global as any).document;
        delete (global as any).requestAnimationFrame;
    });

    // eslint-disable-next-line no-undef
    afterEach(() => {
        (global as any).window = prevWindow;
        (global as any).document = prevDocument;
        (global as any).requestAnimationFrame = prevRAF;
    });
};
