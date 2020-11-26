import { renderHook } from '@testing-library/react-hooks';

import { useUniqId } from '../useUniqId';

describe('useUniqId', () => {
    test('should generate stable id without key', () => {
        const { result, rerender } = renderHook(() => useUniqId());
        expect(result.current).toBe('xuniq-0-1');
        rerender();
        expect(result.current).toBe('xuniq-0-1');
    });

    test('should generate stable id with key', () => {
        const { result, rerender } = renderHook(() => useUniqId('key'));
        expect(result.current).toBe('key-0-2');
        rerender();
        expect(result.current).toBe('key-0-2');
    });
});
