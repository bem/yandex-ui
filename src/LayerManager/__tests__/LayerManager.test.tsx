import React, { FC, useRef } from 'react';

import { createClientRender, fireEvent, act } from '../../internal/testing';
import { OverlayManager } from '../../useOverlay';
import { LayerManager } from '../LayerManager';

const LayerUnitCase: FC<any> = ({ onClose1, onClose2, onClose3, visible1, visible2, visible3 }) => {
    const contentRef1 = useRef<HTMLDivElement>(null);
    const contentRef2 = useRef<HTMLDivElement>(null);
    const contentRef3 = useRef<HTMLDivElement>(null);

    return (
        <>
            <LayerManager visible={visible1} onClose={onClose1} essentialRefs={[contentRef1]}>
                <div ref={contentRef1}>content-1</div>
                <LayerManager visible={visible2} onClose={onClose2} essentialRefs={[contentRef2]}>
                    <div ref={contentRef2}>content-2</div>
                </LayerManager>
            </LayerManager>

            <LayerManager visible={visible3} onClose={onClose3} essentialRefs={[contentRef3]}>
                <div ref={contentRef3}>content-3</div>
            </LayerManager>
        </>
    );
};

describe('LayerManager', () => {
    const render = createClientRender();
    const manager = OverlayManager.getInstance();

    test('должен быть установлен корректный displayName', () => {
        expect(LayerManager.displayName).toBe('LayerManager');
    });

    test('должен при нажатии на esc вызывать onClose', () => {
        const onClose1 = jest.fn();
        const onClose2 = jest.fn();

        // Рендерим все слои невидимыми.
        const { rerender } = render(
            <LayerUnitCase visible1={false} visible2={false} onClose1={onClose1} onClose2={onClose2} />,
        );
        expect(manager.count()).toBe(0);

        // Рендерим первый слой видимым.
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        // Рендерим второй слой видимым.
        rerender(<LayerUnitCase visible1 visible2 onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(2);

        // Вызываем второй onClose.
        fireEvent.keyUp(document.body, { key: 'Escape' });
        expect(onClose2).toHaveBeenCalledTimes(1);
        expect(onClose1).toHaveBeenCalledTimes(0);

        onClose1.mockReset();
        onClose2.mockReset();

        // Рендерим второй слой невидимым.
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        // Вызываем первый onClose.
        fireEvent.keyUp(document.body, { key: 'Escape' });
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(1);

        // Рендерим первый слой невидимым.
        rerender(<LayerUnitCase visible1={false} visible2={false} onClose1={onClose1} onClose2={onClose2} />);

        expect(manager.count()).toBe(0);
    });

    test('должен при нажатии на область вне essentialRefs вызывать onClose', () => {
        const onClose1 = jest.fn();
        const onClose2 = jest.fn();

        // Рендерим все слои невидимыми.
        const { getByText, rerender } = render(
            <LayerUnitCase visible1={false} visible2={false} onClose1={onClose1} onClose2={onClose2} />,
        );
        expect(manager.count()).toBe(0);

        // Рендерим первый слой видимым.
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        // Рендерим первый слой видимым.
        rerender(<LayerUnitCase visible1 visible2 onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(2);

        // Клик в контент не должен вызывать onClose.
        fireEvent.mouseDown(getByText(/content-2/));
        fireEvent.baseClick(getByText(/content-2/));
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(0);

        onClose1.mockReset();
        onClose2.mockReset();

        // mousedown в контент и click вне контента не должен вызывать onClose.
        fireEvent.mouseDown(getByText(/content-2/));
        fireEvent.baseClick(getByText(/content-1/));
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(0);

        onClose1.mockReset();
        onClose2.mockReset();

        // Клик вне контента должен вызывать onClose.
        fireEvent.mouseDown(getByText(/content-1/));
        fireEvent.baseClick(getByText(/content-1/));
        expect(onClose2).toHaveBeenCalledTimes(1);
        expect(onClose1).toHaveBeenCalledTimes(0);

        // Рендерим второй слой невидимым.
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        onClose1.mockReset();
        onClose2.mockReset();

        // Клик вне контента должен вызывать onClose.
        fireEvent.mouseDown(document.body);
        fireEvent.baseClick(document.body);
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(1);

        // Рендерим первый слой невидимым.
        rerender(<LayerUnitCase visible1={false} visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(0);
    });

    test('должен обновлять onClose', () => {
        const onClose1 = jest.fn();
        const onClose2 = jest.fn();
        const onClose3 = jest.fn();

        // Рендерим все слои невидимыми.
        const { rerender } = render(
            <LayerUnitCase visible1={false} visible2={false} onClose1={onClose1} onClose2={onClose2} />,
        );
        expect(manager.count()).toBe(0);

        // Рендерим первый слой видимым.
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        // Рендерим второй слой видимым.
        // Приходится рендерить слои видимыми по очереди, т.к. в тестах и в браузере
        // очередность вызова useEffect - разная, и в тестах слои добавляются в неправильном порядке.
        rerender(<LayerUnitCase visible1 visible2 onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(2);

        rerender(<LayerUnitCase visible1 visible2 onClose1={onClose1} onClose2={onClose3} />);

        fireEvent.mouseDown(document.body);
        fireEvent.baseClick(document.body);
        expect(onClose3).toHaveBeenCalledTimes(1);
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(0);

        onClose1.mockReset();
        onClose2.mockReset();
        onClose3.mockReset();

        // Рендерим второй слой невидимым
        rerender(<LayerUnitCase visible1 visible2={false} onClose1={onClose1} onClose2={onClose2} />);
        expect(manager.count()).toBe(1);

        fireEvent.mouseDown(document.body);
        fireEvent.baseClick(document.body);
        expect(onClose3).toHaveBeenCalledTimes(0);
        expect(onClose2).toHaveBeenCalledTimes(0);
        expect(onClose1).toHaveBeenCalledTimes(1);
    });

    test('должен корректно добавлять/удалять слои', () => {
        const onClose = jest.fn();

        // Рендерим все слои невидимыми.
        const { rerender, unmount } = render(
            <LayerUnitCase visible1={false} visible3={false} onClose1={onClose} onClose3={onClose} />,
        );

        expect(manager.count()).toBe(0);

        // Рендерим первый слой видимым.
        rerender(<LayerUnitCase visible1 visible3={false} onClose1={onClose} onClose3={onClose} />);
        const firstOverlayOptions = manager.getTopOverlayOptions();

        expect(manager.count()).toBe(1);

        // Рендерим предыдущий видимый слой невидимым, а второй слой видимым.
        rerender(<LayerUnitCase visible1={false} visible3 onClose1={onClose} onClose3={onClose} />);
        const secondOverlatOptions = manager.getTopOverlayOptions();

        expect(manager.count()).toBe(1);
        expect(firstOverlayOptions).not.toBe(secondOverlatOptions);

        act(() => {
            unmount();
        });

        expect(manager.count()).toBe(0);
    });
});
