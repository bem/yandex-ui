import './pointerfocus';

describe('Pointerfocus', () => {
    test('по умолчанию должен выставлять utilityfocus на body', () => {
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);
    });

    test('должен выставлять utilityfocus на body по onKeyDown/focusin', () => {
        window.document.dispatchEvent(new Event('keydown'));
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);

        window.document.dispatchEvent(new Event('focusin'));
        expect(window.document.body.classList.contains('utilityfocus')).toBe(true);
    });

    test('должен выставлять pointerfocus на body по mousedown/mouseup', () => {
        window.document.dispatchEvent(new Event('mousedown'));
        window.document.dispatchEvent(new Event('focusin'));
        expect(window.document.body.classList.contains('pointerfocus')).toBe(true);

        window.dispatchEvent(new Event('blur'));
        window.document.dispatchEvent(new Event('mouseup'));
        expect(window.document.body.classList.contains('pointerfocus')).toBe(true);
    });
});
