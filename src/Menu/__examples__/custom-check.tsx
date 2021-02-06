import React, { useState } from 'react';
import { RenderOverride } from '@yandex-lego/components/lib/render-override';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import { MenuItemProps, Item, useMenuItem } from '@yandex-lego/components/Menu/desktop';
import { Radio, Radiobox } from '@yandex-lego/components/Radiobox/desktop/bundle';

const RenderItem: RenderOverride<MenuItemProps> = ({ needIconGlyph, children, innerRef, value, ...props }) => {
    const itemProps = useMenuItem(props);
    const { checked } = props;

    return (
        <div {...itemProps}>
            <Radiobox view="default" size="m">
                <Radio value={value} checked={checked}>
                    {children}
                </Radio>
            </Radiobox>
        </div>
    );
};

export const CustomCheck = () => {
    const [value, setValue] = useState('wow');

    return (
        <>
            <style>{'.RadioMenu { --menu-size-m-titleSibling-indentLeft: 0 }'}</style>
            <Menu
                className="RadioMenu"
                value={value}
                size="m"
                view="default"
                onChange={(e) => setValue(e.target.value)}
                renderItem={RenderItem}
            >
                <Item value="wow">Умная плитка</Item>
                <Item value="tile">Крупная плитка</Item>
                <Item value="icons">Плитка</Item>
                <Item value="list">Список</Item>
            </Menu>
        </>
    );
};
