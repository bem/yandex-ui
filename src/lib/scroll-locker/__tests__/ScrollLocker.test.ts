import * as ScrollLocker from '../ScrollLocker';

describe('ScrollLocker', () => {
    test('должен корректно устанавливать значение `overflow` по-умолчанию для `body`', () => {
        expect(document.body).not.toHaveStyle('overflow: hidden');

        ScrollLocker.lock();
        expect(document.body).toHaveStyle('overflow: hidden');

        ScrollLocker.unlock();
        expect(document.body).not.toHaveStyle('overflow: hidden');
    });

    test('должен корректно устанавливать значение `overflow` для произвольного элемента', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        expect(container).not.toHaveStyle('overflow: hidden');

        ScrollLocker.lock(container);
        expect(container).toHaveStyle('overflow: hidden');

        ScrollLocker.unlock(container);
        expect(container).not.toHaveStyle('overflow: hidden');

        document.body.removeChild(container);
    });

    test('должен корректно работать при вызове `lock/unlock` на одном элементе несколько раз', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        expect(container).not.toHaveStyle('overflow: hidden');

        ScrollLocker.lock(container);
        expect(container).toHaveStyle('overflow: hidden');

        ScrollLocker.lock(container);
        expect(container).toHaveStyle('overflow: hidden');

        ScrollLocker.unlock(container);
        expect(container).toHaveStyle('overflow: hidden');

        ScrollLocker.unlock(container);
        expect(container).not.toHaveStyle('overflow: hidden');

        document.body.removeChild(container);
    });

    test('должен выставлять исходное значение `overflow` при разблокировке', () => {
        const container = document.createElement('div');
        container.style.overflow = 'scroll';
        document.body.appendChild(container);

        ScrollLocker.lock(container);
        expect(container).toHaveStyle('overflow: hidden');

        ScrollLocker.unlock(container);
        expect(container).toHaveStyle('overflow: scroll');

        document.body.removeChild(container);
    });
});
