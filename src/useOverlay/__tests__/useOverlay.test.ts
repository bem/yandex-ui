import { RefObject } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useOverlay, UseOverlayOptions, OverlayManager } from '..';

describe('useOverlay', () => {
    const manager = OverlayManager.getInstance();

    test('должен добавлять слой если установлен флаг `visible`', () => {
        const essentialRefs: RefObject<HTMLElement>[] = [];
        const { rerender } = renderHook<UseOverlayOptions, void>((options) => useOverlay(options), {
            initialProps: {
                visible: false,
                essentialRefs,
            },
        });

        expect(manager.count()).toBe(0);

        rerender({ visible: true, essentialRefs });

        expect(manager.count()).toBe(1);

        rerender({ visible: false, essentialRefs });

        expect(manager.count()).toBe(0);
    });

    test('должен обновить `onClose`', () => {
        const onClose1 = jest.fn();
        const onClose2 = jest.fn();
        const essentialRefs: RefObject<HTMLElement>[] = [];
        const { rerender } = renderHook<UseOverlayOptions, void>((options) => useOverlay(options), {
            initialProps: {
                visible: true,
                essentialRefs,
                onClose: onClose1,
            },
        });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(manager.getTopOverlayOptions()!.onClose).toBe(onClose1);

        rerender({ visible: true, essentialRefs, onClose: onClose2 });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(manager.getTopOverlayOptions()!.onClose).toBe(onClose2);
    });

    test('должен обновить `essentialRefs`', () => {
        const essentialRefs1: RefObject<HTMLElement>[] = [];
        const essentialRefs2: RefObject<HTMLElement>[] = [];

        const { rerender } = renderHook<UseOverlayOptions, void>((options) => useOverlay(options), {
            initialProps: {
                visible: true,
                essentialRefs: essentialRefs1,
            },
        });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(manager.getTopOverlayOptions()!.refs).toBe(essentialRefs1);

        rerender({ visible: true, essentialRefs: essentialRefs2 });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(manager.getTopOverlayOptions()!.refs).toBe(essentialRefs2);
    });
});
