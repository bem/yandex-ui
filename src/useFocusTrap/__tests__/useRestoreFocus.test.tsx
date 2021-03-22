import { renderHook } from '@testing-library/react-hooks';

import { useRestoreFocus, UseRestoreFocusOptions } from '../useRestoreFocus';

let elements: HTMLElement[] = [];
const createFocusableElement = (testId: string) => {
    const el = document.createElement('button');
    el.dataset.testId = testId;

    document.body.appendChild(el);
    elements.push(el);

    return el;
};

describe('useRestoreFocus', () => {
    afterEach(() => {
        elements.forEach((el) => {
            document.body.removeChild(el);
        });
        elements = [];
    });

    test('должен вернуть фокус на последний активный элемент', () => {
        const a = createFocusableElement('a');
        const b = createFocusableElement('b');
        a.focus();

        const { rerender } = renderHook<UseRestoreFocusOptions, void>((props) => useRestoreFocus(props), {
            initialProps: { enabled: true },
        });

        b.focus();
        rerender({ enabled: false });

        expect(a).toHaveFocus();
    });

    test('должен вернуть фокус на пользовательский элемент', () => {
        const a = createFocusableElement('a');
        const b = createFocusableElement('b');
        const restoreFocusRef = { current: b };
        a.focus();

        const { rerender } = renderHook<UseRestoreFocusOptions, void>((props) => useRestoreFocus(props), {
            initialProps: { enabled: true, restoreFocusRef },
        });

        expect(a).toHaveFocus();

        rerender({ enabled: false });

        expect(b).toHaveFocus();
    });
});
