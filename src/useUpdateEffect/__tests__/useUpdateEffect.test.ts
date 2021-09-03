import { renderHook } from '@testing-library/react-hooks';

import { useUpdateEffect } from '../useUpdateEffect';

describe('useUpdateEffect', () => {
    test('should run provided function only after the first render', () => {
        const mockCallback = jest.fn();
        // First run `mockCallback` not run
        const { rerender } = renderHook(({ dep }) => useUpdateEffect(mockCallback, [dep]), {
            initialProps: { dep: 0 },
        });
        expect(mockCallback.mock.calls.length).toBe(0);

        rerender({ dep: 1 });
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    test('should run provided function only when dependent value changes', () => {
        const mockCallback = jest.fn();
        const { rerender } = renderHook(({ dep }) => useUpdateEffect(() => mockCallback(), [dep]), {
            initialProps: { dep: 0 },
        });
        expect(mockCallback.mock.calls.length).toBe(0);

        rerender({ dep: 0 });
        expect(mockCallback.mock.calls.length).toBe(0);

        rerender({ dep: 1 });
        expect(mockCallback.mock.calls.length).toBe(1);

        rerender({ dep: 1 });
        expect(mockCallback.mock.calls.length).toBe(1);

        rerender({ dep: 2 });
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    test('should run desctructor returned by fn passed into hook', () => {
        const mockCallback = jest.fn();
        const { rerender } = renderHook(({ dep }) => useUpdateEffect(() => mockCallback, [dep]), {
            initialProps: { dep: 0 },
        });

        expect(mockCallback.mock.calls.length).toBe(0);

        rerender({ dep: 1 });

        // After second run useEffect only memorized the function that it suppose to run on cleanup
        expect(mockCallback.mock.calls.length).toBe(0);

        rerender({ dep: 2 });

        // Cleanup function run
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
