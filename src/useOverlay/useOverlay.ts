import { RefObject, useEffect, useRef } from 'react';

import { OverlayOptions, OverlayManager, OnClose } from './OverlayManager';

export interface UseOverlayOptions {
    /**
     * Видимость слоя
     */
    visible?: boolean;

    /**
     * Обработчик, вызывающийся после нажатия на клавишу esc либо мышкой на область вне контейнера
     */
    onClose?: OnClose;

    /**
     * Список ссылок на DOM-узлы в рамках которых не нужно отслеживать нажатия
     */
    essentialRefs: RefObject<HTMLElement>[];
}

/**
 * Реакт-хук, реализующий закрытие всплывающих компонентов,
 * таких как `Popup`, `Modal`, `Tooltip` и `MessageBox` в нужном порядке,
 * по умолчанию используется внутри `Popup` и `Modal`.
 */
export function useOverlay(options: UseOverlayOptions) {
    const { visible, onClose, essentialRefs } = options;
    const optionsRef = useRef<OverlayOptions>({ onClose, refs: essentialRefs });

    useEffect(() => {
        if (optionsRef.current.onClose !== onClose) {
            optionsRef.current.onClose = onClose;
        }

        if (optionsRef.current.refs !== essentialRefs) {
            optionsRef.current.refs = essentialRefs;
        }
    }, [onClose, essentialRefs]);

    useEffect(() => {
        if (visible) {
            const options = optionsRef.current;
            // Возможно стоит вынести в параметры, но пока нет такой необходимости
            const manager = OverlayManager.getInstance();

            manager.addOverlay(options);

            return () => {
                manager.removeOverlay(options);
            };
        }

        return;
    }, [visible]);
}
