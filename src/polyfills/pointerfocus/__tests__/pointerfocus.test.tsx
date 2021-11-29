describe('pointerfocus', () => {
    let pointerfocus: { dispose: () => void };

    beforeAll(() => {
        jest.useFakeTimers();
        pointerfocus = require('../pointerfocus');
        jest.runAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should set utilityfocus className for body after init', () => {
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);
    });

    test('should set utilityfocus className for body after keydown/focusin', () => {
        window.document.dispatchEvent(new Event('keydown'));
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);

        window.document.dispatchEvent(new Event('focusin'));
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);
    });

    test('should set pointerfocus className for body after mousedown/mouseup', () => {
        window.document.dispatchEvent(new Event('mousedown'));
        window.document.dispatchEvent(new Event('focusin'));
        expect(window.document.body.classList.contains('pointerfocus')).toBe(true);

        window.dispatchEvent(new Event('blur'));
        window.document.dispatchEvent(new Event('mouseup'));
        expect(window.document.body.classList.contains('pointerfocus')).toBe(true);
    });

    test('should remove className after dispose', () => {
        pointerfocus.dispose();
        expect(window.document.body.classList.contains('pointerfocus')).toBe(false);
        expect(window.document.body.classList.contains('utilityfocus')).toBe(false);
    });
});
