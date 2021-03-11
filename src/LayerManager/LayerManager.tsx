import React, { FC, useEffect, RefObject, ReactNode, useCallback, useRef } from 'react';

import { usePreviousValue } from '../usePreviousValue';
import { useUniqId } from '../useUniqId';

export type LayerManagerProps = {
    /**
     * Видимость слоя
     */
    visible?: boolean;

    /**
     * Обработчик, вызывающийся после нажатия на клавишу esc либо мышкой на область вне контейнера
     */
    onClose?: OnClose;

    /**
     * Содержимое слоя
     */
    children: ReactNode;

    /**
     * Список ссылок на DOM-узлы в рамках которых не нужно отслеживать нажатия
     */
    essentialRefs: RefObject<HTMLElement>[];
};

export type LayerManagerExtendableProps = Pick<LayerManagerProps, 'onClose'>;

export type OnClose = (event: KeyboardEvent | MouseEvent, source: 'esc' | 'click') => void;

type LayerId = string;
type LayerTuple = [LayerId, OnClose, RefObject<HTMLElement>[]];
type EFC<T> = FC<T> & { stack: LayerTuple[] };

/**
 * Компонент реализующий закрытие всплывающих компонентов,
 * таких как `Popup`, `Modal`, `Tooltip` и `MessageBox` в нужном порядке,
 * по умолчанию используется внутри `Popup`.
 *
 * @param {LayerManagerProps}
 */
export const LayerManager: EFC<LayerManagerProps> = ({ visible, onClose, children, essentialRefs }) => {
    const id = useUniqId('layer');
    const prevVisible = usePreviousValue(visible);
    const prevOnClose = usePreviousValue(onClose);
    const mouseDownRef = useRef<EventTarget | null>(null);

    const onDocumentKeyUp = useCallback((event: KeyboardEvent) => {
        const key = event.key;
        // @fixme: ISL-9529: keyboard.ts: использовать библиотеку для клавиатурных событий
        if (key === 'Escape' || key === 'Esc') {
            const [layerId, layerOnClose] = LayerManager.stack[LayerManager.stack.length - 1] || [];
            // Дополнительно проверяем id слоя, чтобы не вызывать layerOnClose n-раз.
            if (layerId === id && layerOnClose !== undefined) {
                layerOnClose(event, 'esc');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDocumentMouseDown = useCallback((event: MouseEvent) => {
        mouseDownRef.current = event.target;
    }, []);

    const onDocumentClick = useCallback((event: MouseEvent) => {
        const [layerId, layerOnClose, refs] = LayerManager.stack[LayerManager.stack.length - 1] || [];

        // Убеждаемся, что элемент, который был нажат, совпадает с последним
        // при срабатывании события mousedown. Это предотвращает закрытие диалогового окна
        // перетаскиванием курсора (например, выделением текста внутри диалогового окна
        // и отпусканием мыши за его пределами).
        if (mouseDownRef.current !== event.target) {
            return;
        }

        // Дополнительно проверяем id слоя, чтобы не вызывать layerOnClose n-раз.
        if (layerId === id && layerOnClose !== undefined && refs !== undefined) {
            const isEssentionalClick = refs
                .filter((ref) => ref.current !== null)
                .some((ref) => (ref.current as HTMLElement).contains(event.target as HTMLHtmlElement));
            if (!isEssentionalClick) {
                layerOnClose(event, 'click');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (onClose !== prevOnClose && onClose !== undefined) {
            LayerManager.stack.forEach(([, layerOnClose], i) => {
                if (layerOnClose === prevOnClose) {
                    LayerManager.stack[i][1] = onClose;
                }
            });
        }

        if (visible === prevVisible || onClose === undefined) {
            return;
        }

        if (visible) {
            LayerManager.stack.push([id, onClose, essentialRefs]);

            document.addEventListener('keyup', onDocumentKeyUp);
            document.addEventListener('mousedown', onDocumentMouseDown, true);
            document.addEventListener('click', onDocumentClick, true);
        } else {
            // Т.к. onCloseHandlers у нас не является стейтом компонента,
            // то удаление обработчика может произойти раньше, чем его вызов,
            // поэтому используем raf для удаления в следующем тике.
            requestAnimationFrame(() => removeLayerById(id));

            document.removeEventListener('keyup', onDocumentKeyUp);
            document.removeEventListener('mousedown', onDocumentMouseDown, true);
            document.removeEventListener('click', onDocumentClick, true);
        }
        // Не добавляем essentialRefs в зависимости,
        // т.к. они нужны единожды при добавлении в стек.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevVisible, visible, onClose, prevOnClose]);

    useEffect(() => {
        return () => {
            requestAnimationFrame(() => removeLayerById(id));

            document.removeEventListener('keyup', onDocumentKeyUp);
            document.removeEventListener('mousedown', onDocumentMouseDown, true);
            document.removeEventListener('click', onDocumentClick, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};

LayerManager.stack = [];
LayerManager.displayName = 'LayerManager';

function removeLayerById(id: string) {
    LayerManager.stack = LayerManager.stack.filter(([layerId]) => layerId !== id);
}
