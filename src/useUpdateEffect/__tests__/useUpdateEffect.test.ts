import { renderHook } from '@testing-library/react-hooks';

import { useUpdateEffect } from '../useUpdateEffect';

describe('useUpdateEffect', () => {
    test('should run provided function only after the first render', () => {
        const mockCallback = jest.fn();
        let initDep = 0;

        // First run `mockCallback` not run
        const { rerender } = renderHook(() => useUpdateEffect(mockCallback, [initDep]));
        expect(mockCallback.mock.calls.length).toBe(0);

        initDep = 1;
        rerender();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    test('should run provided function only when dependent value changes', () => {
        const mockCallback = jest.fn();
        let initDep = 0;

        const { rerender } = renderHook(() => useUpdateEffect(mockCallback, [initDep]));
        expect(mockCallback.mock.calls.length).toBe(0);

        rerender();
        expect(mockCallback.mock.calls.length).toBe(0);

        initDep = 1;
        rerender();
        expect(mockCallback.mock.calls.length).toBe(1);

        rerender();
        expect(mockCallback.mock.calls.length).toBe(1);

        initDep = 2;
        rerender();
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    test('should run desctructor returned by fn passed into hook', () => {
        const mockCallback = jest.fn();
        let initDep = 0;
        const { rerender } = renderHook(() => useUpdateEffect(() => mockCallback, [initDep]));

        expect(mockCallback.mock.calls.length).toBe(0);

        initDep = 1;
        rerender();

        // After second run useEffect only memorized the function that it suppose to run on cleanup
        expect(mockCallback.mock.calls.length).toBe(0);

        initDep = 2;
        rerender();

        // Cleanup function run
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
