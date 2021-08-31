import { fireEvent } from '../../internal/testing';
import { OverlayManager, OverlayOptions } from '..';

describe('useOverlay', () => {
    describe('OverlayManager', () => {
        test('должен возвращать синглтон при вызове `getInstance`', () => {
            const manager = OverlayManager.getInstance();

            expect(OverlayManager.getInstance()).toBe(manager);
        });

        test('должен добавлять (удалять) слой в стек (из стека)', () => {
            const manager = new OverlayManager();
            const a: OverlayOptions = { refs: [], onClose: jest.fn(), closeStrategy: 'pressup' };
            const b: OverlayOptions = { refs: [], onClose: jest.fn(), closeStrategy: 'pressup' };

            expect(manager.count()).toBe(0);

            manager.addOverlay(a);
            expect(manager.count()).toBe(1);

            manager.addOverlay(b);
            expect(manager.count()).toBe(2);

            manager.removeOverlay(a);
            expect(manager.count()).toBe(1);

            manager.removeOverlay(b);
            expect(manager.count()).toBe(0);
        });

        test('должен вызвать `onClose` при нажатии на `Esc`', () => {
            const manager = new OverlayManager();
            const onClose = jest.fn();
            const options: OverlayOptions = { refs: [], onClose, closeStrategy: 'pressup' };
            manager.addOverlay(options);

            fireEvent.keyUp(document.body, { key: 'Esc' });

            expect(onClose).toBeCalledTimes(1);
            expect(onClose).toBeCalledWith(expect.objectContaining({ type: 'keyup', key: 'Esc' }), 'esc');

            onClose.mockReset();
            fireEvent.keyUp(document.body, { key: 'Escape' });

            expect(onClose).toBeCalledTimes(1);
            expect(onClose).toBeCalledWith(expect.objectContaining({ type: 'keyup', key: 'Escape' }), 'esc');

            onClose.mockReset();
            fireEvent.keyUp(document.body, { key: 'Enter' });
            expect(onClose).toBeCalledTimes(0);

            manager.removeOverlay(options);
            fireEvent.keyUp(document.body, { key: 'Esc' });
            expect(onClose).toBeCalledTimes(0);
        });

        test('не должен вызывать `onClose` после удаления слоя из стека при нажатии на `Esc`', () => {
            const manager = new OverlayManager();
            const options: OverlayOptions = { refs: [], onClose: jest.fn(), closeStrategy: 'pressup' };
            manager.addOverlay(options);
            manager.removeOverlay(options);

            fireEvent.keyUp(document.body, { key: 'Esc' });
            expect(options.onClose).toBeCalledTimes(0);
        });

        test('должен вызвать `onClose` при клике вне `refs`', () => {
            const current = document.createElement('div');
            document.body.appendChild(current);

            const manager = new OverlayManager();
            const ref = { current };
            const onClose = jest.fn();
            const options: OverlayOptions = { refs: [ref], onClose, closeStrategy: 'pressdown' };
            manager.addOverlay(options);

            fireEvent.mouseDown(document.body);

            expect(onClose).toBeCalledTimes(1);
            expect(onClose).toBeCalledWith(expect.objectContaining({ type: 'mousedown' }), 'click');

            onClose.mockReset();
            options.closeStrategy = 'pressup';

            fireEvent.mouseDown(document.body);
            fireEvent.baseClick(document.body);

            expect(options.onClose).toBeCalledTimes(1);
            expect(options.onClose).toBeCalledWith(expect.objectContaining({ type: 'click' }), 'click');

            document.body.removeChild(current);
        });

        test('не должен вызвать `onClose` при клике на `refs`', () => {
            const current = document.createElement('div');
            document.body.appendChild(current);

            const manager = new OverlayManager();
            const ref = { current };
            const onClose = jest.fn();
            const options: OverlayOptions = { refs: [ref], onClose, closeStrategy: 'pressdown' };
            manager.addOverlay(options);

            fireEvent.mouseDown(current);

            expect(options.onClose).toBeCalledTimes(0);

            options.closeStrategy = 'pressup';

            fireEvent.mouseDown(current);
            fireEvent.baseClick(current);

            expect(options.onClose).toBeCalledTimes(0);

            document.body.removeChild(current);
        });

        test('не должен вызвать `onClose` при `mousedown` на `refs` и `click` вне `refs`', () => {
            const current = document.createElement('div');
            document.body.appendChild(current);

            const manager = new OverlayManager();
            const ref = { current };
            const options: OverlayOptions = { refs: [ref], onClose: jest.fn(), closeStrategy: 'pressup' };
            manager.addOverlay(options);

            fireEvent.mouseDown(current);
            fireEvent.baseClick(document.body);

            expect(options.onClose).toBeCalledTimes(0);

            document.body.removeChild(current);
        });

        test('должен вызвать `onClose` если установить обработчик после добавления слоя', () => {
            const options: OverlayOptions = { refs: [], closeStrategy: 'pressup' };
            const onClose = jest.fn();
            const manager = new OverlayManager();
            manager.addOverlay(options);

            expect(manager.count()).toBe(1);

            fireEvent.keyUp(document.body, { key: 'Esc' });
            fireEvent.mouseDown(document.body);
            fireEvent.baseClick(document.body);

            options.onClose = onClose;

            fireEvent.keyUp(document.body, { key: 'Esc' });
            expect(onClose).toBeCalledTimes(1);

            onClose.mockReset();
            fireEvent.mouseDown(document.body);
            fireEvent.baseClick(document.body);
            expect(onClose).toBeCalledTimes(1);
        });

        test('должен вызвать `onClose` для последнего слоя в стеке', () => {
            const onClose1 = jest.fn();
            const onClose2 = jest.fn();
            const options1: OverlayOptions = { refs: [], onClose: onClose1, closeStrategy: 'pressup' };
            const options2: OverlayOptions = { refs: [], onClose: onClose2, closeStrategy: 'pressup' };
            const manager = new OverlayManager();

            manager.addOverlay(options1);
            manager.addOverlay(options2);
            fireEvent.keyUp(document.body, { key: 'Esc' });

            expect(onClose1).toBeCalledTimes(0);
            expect(onClose2).toBeCalledTimes(1);

            manager.removeOverlay(options2);
            fireEvent.keyUp(document.body, { key: 'Esc' });

            expect(onClose1).toBeCalledTimes(1);
            expect(onClose2).toBeCalledTimes(1);

            manager.addOverlay(options2);
            fireEvent.keyUp(document.body, { key: 'Esc' });

            expect(onClose1).toBeCalledTimes(1);
            expect(onClose2).toBeCalledTimes(2);

            manager.removeOverlay(options1);
            manager.addOverlay(options1);
            fireEvent.keyUp(document.body, { key: 'Esc' });

            expect(onClose1).toBeCalledTimes(2);
            expect(onClose2).toBeCalledTimes(2);
        });
    });
});
