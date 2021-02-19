/**
 * @jest-environment node
 */

import * as ScrollLocker from '../ScrollLocker';

describe('ScrollLocker (ssr)', () => {
    test('должен работать без ошибок в серверном окружении', () => {
        expect(() => {
            ScrollLocker.lock();
        }).not.toThrowError();

        expect(() => {
            ScrollLocker.unlock();
        }).not.toThrowError();
    });
});
