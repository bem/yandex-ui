import React from 'react';

import { createClientRender } from '../../internal/testing';
import { usePreventScroll, UsePreventScrollOptions } from '../usePreventScroll';

function Example(props: UsePreventScrollOptions) {
    usePreventScroll(props);

    return <div />;
}

describe('usePreventScroll', () => {
    const render = createClientRender();

    test('должен корректно устанавливать значение `overflow` для `body` по-умолчанию', () => {
        expect(document.body).not.toHaveStyle('overflow: hidden');

        const res = render(<Example enabled />);
        expect(document.body).toHaveStyle('overflow: hidden');

        res.unmount();
        expect(document.body).not.toHaveStyle('overflow: hidden');
    });

    test('должен корректно устанавливать значение `overflow` для произвольного элемента', () => {
        const current = document.createElement('div');
        const containerRef = { current };

        expect(current).not.toHaveStyle('overflow: hidden');

        const res = render(<Example enabled containerRef={containerRef} />);
        expect(current).toHaveStyle('overflow: hidden');

        res.unmount();
        expect(current).not.toHaveStyle('overflow: hidden');
    });

    test('не должен выставлять `overflow: hidden` если значение `enabled` не задано', () => {
        expect(document.body).not.toHaveStyle('overflow: hidden');

        render(<Example enabled={undefined} />);

        expect(document.body).not.toHaveStyle('overflow: hidden');
    });

    test('должен корректно работать при смене ссылки на DOM-элемент', () => {
        const current = document.createElement('div');
        const containerRef = { current };

        expect(document.body).not.toHaveStyle('overflow: hidden');
        expect(current).not.toHaveStyle('overflow: hidden');

        const res = render(<Example enabled />);
        expect(document.body).toHaveStyle('overflow: hidden');

        res.rerender(<Example enabled containerRef={containerRef} />);
        expect(document.body).not.toHaveStyle('overflow: hidden');
        expect(current).toHaveStyle('overflow: hidden');

        res.unmount();
        expect(document.body).not.toHaveStyle('overflow: hidden');
        expect(current).not.toHaveStyle('overflow: hidden');
    });

    test('должен корректно работать при отмене блокировки и смене ссылки на DOM-элемент', () => {
        const current = document.createElement('div');
        const containerRef = { current };

        expect(document.body).not.toHaveStyle('overflow: hidden');
        expect(current).not.toHaveStyle('overflow: hidden');

        const res = render(<Example enabled containerRef={containerRef} />);
        expect(current).toHaveStyle('overflow: hidden');

        res.rerender(<Example enabled={false} />);
        expect(document.body).not.toHaveStyle('overflow: hidden');
        expect(current).not.toHaveStyle('overflow: hidden');

        res.unmount();
    });
});
