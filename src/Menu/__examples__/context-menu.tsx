import React from 'react';
import { RenderOverride } from '@yandex-lego/components/lib/render-override';
import { ListTile } from '@yandex-lego/components/ListTile/desktop';
import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import { Group, Item, MenuItemProps, useMenuItem } from '@yandex-lego/components/Menu/desktop';

import { CopyIcon, DownloadIcon, PasteIcon, ShareIcon } from './icons';

const styles = `
    .ContextMenu {
        --menu-size-m-fontSize: 13px;
        --menu-size-m-titleSibling-indentLeft: 0;
        --menu-size-m-item-icon-indentRight: 5px;
        --menu-size-m-spaceVert: 0;
        --menu-size-m-spaceVert: 0;
        --menu-size-m-group-indentBottom: 8px;
        --menu-size-m-group-spaceVert: 0;

        --menu-view-default-border-color-base: rgba(0, 0, 0, .07);
        --menu-view-default-fill-color-base: #fff;
        --menu-view-default-fill-color-hovered: #555;
        --menu-view-default-typo-color-base: #000;
        --menu-view-default-typo-color-secondary: #999;
        --menu-view-default-typo-color-disabled: #999;
        --menu-view-default-typo-color-hovered: #fff;

        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .4);
    }

    .ContextMenu .ContextMenu-Item_hightlight {
        background: rgba(0, 0, 0, .07);
    }

    .ContextMenu .Text {
        color: inherit;
    }

    .ContextMenu .Text ~ .Icon {
        margin-right: 8px;
    }

    .ContextMenu .Icon + .Text {
        margin-left: 8px;
    }
`;

const KEYBOARD_MAP: Record<string, string> = {
    cut: '⌘X',
    copy: '⌘C',
    paste: '⌘V',
};

const RenderItem: RenderOverride<MenuItemProps> = ({ needIconGlyph, children, innerRef, value, ...props }) => {
    const itemProps = useMenuItem(props);

    const keyboard = KEYBOARD_MAP[value];
    const trailing = keyboard ? (
        <Text as="kbd" typography="control-s" color="secondary">
            {keyboard}
        </Text>
    ) : undefined;

    return (
        <div {...itemProps}>
            <ListTile
                rightSpace={trailing ? 's' : undefined}
                leading={needIconGlyph && <Icon glyph="type-check" />}
                trailing={trailing}
            >
                {children}
            </ListTile>
        </div>
    );
};

export const ContextMenu = () => {
    return (
        <>
            <style>{styles}</style>
            <Menu
                className="ContextMenu"
                size="m"
                view="default"
                onChange={(e) => alert(e.target.value)}
                renderItem={RenderItem}
            >
                <Group>
                    <Item value="share">
                        <ShareIcon />
                        <Text>Поделиться</Text>
                    </Item>
                </Group>

                <Group>
                    <Item value="cut">
                        <Text>Вырезать</Text>
                    </Item>
                    <Item value="copy">
                        <CopyIcon />
                        <Text>Копировать</Text>
                    </Item>
                    <Item value="paste" disabled>
                        <PasteIcon />
                        <Text>Вставить</Text>
                    </Item>
                </Group>

                <Group>
                    <Item value="download" className="ContextMenu-Item_hightlight">
                        <DownloadIcon />
                        <Text>Скачать</Text>
                    </Item>
                </Group>
            </Menu>
        </>
    );
};
