import React, { useCallback, useState } from 'react';

import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';
import { useVirtualElementRef } from '@yandex-lego/components/usePopper';

export const ContextMenu = () => {
    const { position, visible, openContextMenu, closeContextMenu } = useContextMenuState();
    const anchorRef = useVirtualElementRef({ rect: position });

    const onContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        openContextMenu({ top: event.clientY, left: event.clientX });
    };

    return (
        <>
            <style>{styles}</style>
            <div className="container-15pu7ua">
                <Text typography="headline-m">Контекстное меню</Text>
                <Text typography="caption-xl" color="ghost">
                    Кликните правой кнопкой, чтобы вызвать контекстное меню
                </Text>
                <div onContextMenu={onContextMenu} className="inner-15pu7ua">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Folder key={idx} />
                    ))}
                </div>
            </div>
            <Popup
                view="default"
                target="anchor"
                direction={['bottom-start', 'bottom-end', 'top-start', 'top-end']}
                anchor={anchorRef}
                scope="inplace"
                visible={visible}
                nonvisual
                motionless
                onClose={() => closeContextMenu()}
            >
                <div className="menu-15pu7ua">
                    <div className="list-item-15pu7ua">Новая папка</div>
                    <div className="list-item-15pu7ua">Текстовый документ</div>
                    <div className="list-item-15pu7ua">Таблица</div>
                    <div className="list-item-15pu7ua">Презентация</div>
                    <div className="list-item-15pu7ua">Альбом</div>
                </div>
            </Popup>
        </>
    );
};

const styles = `
    .container-15pu7ua {
        display: flex;
        flex-direction: column;
    }

    .inner-15pu7ua {
        margin-top: 38px;
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(4, min-content);
    }

    .menu-15pu7ua {
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0px 0px 1px rgba(0, 20, 51, 0.3), 0px 4px 12px rgba(0, 20, 51, 0.15);
        display: flex;
        flex-direction: column;
        font-family: 'YS Text';
        fonst-size: 13px;
        overflow: hidden;
        padding: 12px 0;
        white-space: nowrap;
    }

    .list-item-15pu7ua {
        height: 32px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }

    .list-item-15pu7ua:hover {
        background-color: #F7F8FA;
    }
`;

type Position = {
    top: number;
    left: number;
};

function useContextMenuState() {
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

const Folder = () => {
    return (
        <svg className="folder" width="120" height="120" viewBox="0 0 120 120">
            <path
                d="M56.6203 13.9382L56.7701 14.1443H57.0248H119.5V91.2197H0.5V0.5H46.8527L56.6203 13.9382Z"
                fill="#E6E9F0"
                stroke="#D8DCE6"
            />
            <rect y="104.714" width="100" height="6.11465" rx="3.05732" fill="#A4A9BD" />
            <rect y="113.886" width="50" height="6.11465" rx="3.05733" fill="#A4A9BD" />
        </svg>
    );
};
