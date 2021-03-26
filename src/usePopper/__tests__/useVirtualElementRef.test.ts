import { renderHook } from '@testing-library/react-hooks';

import { useVirtualElementRef, UseVirtualElementRefProps } from '../useVirtualElementRef';

describe('useVirtualElementRef', () => {
    test('should return VirtualElement ref with getBoundingClientRect method', () => {
        const { result } = renderHook(() => useVirtualElementRef());
        const virtualElement = result.current.current;

        expect(typeof virtualElement?.getBoundingClientRect).toBe('function');
    });

    test('should return VirtualElement ref with contextElement property', () => {
        const contextElement: any = {};
        const { result } = renderHook(() => useVirtualElementRef({ contextElement }));
        const virtualElement = result.current.current;

        expect(virtualElement?.contextElement).toBe(contextElement);
    });

    test('should correct calculate rect', () => {
        const { result, rerender } = renderHook(({ rect }) => useVirtualElementRef({ rect }), {
            initialProps: {} as UseVirtualElementRefProps,
        });

        expect(result.current.current?.getBoundingClientRect()).toEqual({
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
        });

        rerender({ rect: { top: 10, left: 20 } });

        expect(result.current.current?.getBoundingClientRect()).toEqual({
            top: 10,
            left: 20,
            right: 20,
            bottom: 10,
            width: 0,
            height: 0,
        });

        rerender({ rect: { bottom: 10, right: 20 } });

        expect(result.current.current?.getBoundingClientRect()).toEqual({
            top: 0,
            left: 0,
            right: 20,
            bottom: 10,
            width: 20,
            height: 10,
        });

        rerender({ rect: { top: 2, left: 4, bottom: 6, right: 8 } });

        expect(result.current.current?.getBoundingClientRect()).toEqual({
            top: 2,
            left: 4,
            right: 8,
            bottom: 6,
            width: 4,
            height: 4,
        });
    });
});
