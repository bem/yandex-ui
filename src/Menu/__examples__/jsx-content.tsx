import React, { useState } from 'react';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import { Item, Group } from '@yandex-lego/components/Menu/desktop';

export const JsxContent = () => {
    const [value, setValue] = useState('a');

    return (
        <Menu size="m" view="default" value={value} onChange={(event) => setValue(event.target.value)}>
            <Group label="Фрукты">
                <Item value="y">Яблоко</Item>
                <Item value="a">Нектарин</Item>
            </Group>

            <Group label="Овощи">
                <Item value="n">Дайкон</Item>
            </Group>

            <Group label="Ягоды">
                <Item value="d">Ежевика</Item>
                <Item value="e">Клубника</Item>
                <Item value="x">Слива</Item>
            </Group>
        </Menu>
    );
};
