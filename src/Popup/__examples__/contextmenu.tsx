import React, { useCallback, useRef, useState } from 'react';

import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import { Item } from '@yandex-lego/components/Menu/desktop';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { useVirtualElementRef } from '@yandex-lego/components/usePopper';

const styles = `
    .contextmenu {
        background-color: #f2f2f2;
        text-align: center;
    }

    .contextmenu::before,
    .contextmenu::after {
        content: '';
        display: block;
        height: 100px;
    }
`;

type Position = {
    top: number;
    left: number;
};

export function useContextMenuState() {
    const [position, setPosition] = useState<Position | null>(null);
    const visible = position !== null;

    const openContextMenu = useCallback((pos: Position) => {
        setPosition(pos);
    }, []);

    const closeContextMenu = useCallback(() => {
        setPosition(null);
    }, []);

    return {
        visible,
        position,
        openContextMenu,
        closeContextMenu,
    } as const;
}

export const ContextMenu = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const { position, visible, openContextMenu, closeContextMenu } = useContextMenuState();
    const anchorRef = useVirtualElementRef({ rect: position });

    const onContextMenu = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();

            openContextMenu({ top: event.clientY, left: event.clientX });
        },
        [openContextMenu],
    );

    return (
        <>
            <style>{styles}</style>
            <div ref={scopeRef} className="contextmenu" onContextMenu={onContextMenu}>
                Кликните правой кнопкой, чтобы вызвать контекстное меню
            </div>
            <Popup
                view="default"
                target="anchor"
                direction={['bottom-start', 'bottom-end', 'top-start', 'top-end']}
                anchor={anchorRef}
                scope={scopeRef}
                visible={visible}
                nonvisual
                motionless
                onClose={() => closeContextMenu()}
            >
                <Menu view="default" size="m">
                    <Item>Копировать</Item>
                    <Item>Вырезать</Item>
                    <Item>Вставить</Item>
                </Menu>
            </Popup>
        </>
    );
};
