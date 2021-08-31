import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { delay } from '../../internal/utils';
import { Keys } from '../../lib/keyboard';
import { Menu as MenuCommon } from '../Menu';
import { Menu as MenuDesktop } from '../desktop';
import { Menu as MenuTouchPad } from '../touch-pad';
import { Menu as MenuTouchPhone } from '../touch-phone';
import { withJsxContent, Item, Group } from '../_jsxContent/Menu_jsxContent';

const platforms = [
    ['desktop', MenuDesktop],
    ['touch-pad', MenuTouchPad],
    ['touch-phone', MenuTouchPhone],
] as const;

describe.each(platforms)('Menu@%s', (platform, Menu) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const items = [
            {
                title: 'test1',
                items: [
                    { id: 'item-id-1', value: '1', content: 'Тест1' },
                    { id: 'item-id-2', value: '2', content: 'Тест2' },
                ],
            },
            { id: 'item-id-3', value: '3', content: 'test2' },
        ];
        const { container } = render(<Menu items={items} className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLElement>();
        render(<Menu items={[{ value: '1', content: 'Тест' }]} innerRef={innerRef} />);

        await delay(100);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен быть установлен корректный displayName', () => {
        expect(MenuCommon.displayName).toBe('Menu');
    });

    test('должен проставить className Menu-Item_disabled и aria-selected=false при disabled всего меню', () => {
        const items = [
            { value: '1', content: 'Тест' },
            { value: '2', content: 'Тест2' },
            {
                title: 'test1',
                items: [
                    { value: '3', content: 'Тест3' },
                    { value: '4', content: 'Тест4' },
                ],
            },
        ];
        render(<Menu items={items} disabled />);

        const menuItems = screen.getAllByRole('menuitem');

        expect(menuItems).toHaveLength(4);

        menuItems.forEach((item) => {
            expect(item).toHaveClass('Menu-Item_disabled');
            expect(item).toHaveAttribute('aria-selected', 'false');
        });
    });

    test('должен проставляться className Menu-Item_disabled у item c disabled: true', () => {
        const items = [
            { value: '1', content: 'Тест' },
            { value: '2', content: 'Тест2' },
            {
                title: 'test1',
                items: [
                    { value: '3', content: 'Тест3', disabled: true },
                    { value: '4', content: 'Тест4' },
                ],
            },
        ];
        render(<Menu items={items} />);

        expect(screen.getByRole('menuitem', { name: 'Тест3' })).toHaveClass('Menu-Item_disabled');
    });

    test('должен вызывать onChange при нажатии на пункт меню', () => {
        const onChangeFn = jest.fn();
        const items = [
            { value: '1', content: 'Тест1' },
            { value: '2', content: 'Тест2' },
            {
                title: 'test1',
                items: [
                    { value: '3', content: 'Тест3' },
                    { value: '4', content: 'Тест4' },
                ],
            },
        ];
        render(<Menu items={items} onChange={onChangeFn} />);

        fireEvent.click(screen.getByText('Тест1'));

        expect(onChangeFn).toHaveBeenCalledTimes(1);
        expect(onChangeFn.mock.calls[0][0].target.value).toEqual('1');
    });

    test('должен при нажатии на пункт меню с multiselect вызывать onChange и в него передавать массив', () => {
        const onChangeFn = jest.fn();
        const items = [
            { value: '1', content: 'Тест1' },
            { value: '2', content: 'Тест2' },
            {
                title: 'test1',
                items: [
                    { value: '3', content: 'Тест3' },
                    { value: '4', content: 'Тест4' },
                ],
            },
        ];
        render(<Menu items={items} onChange={onChangeFn} value={[]} />);

        fireEvent.click(screen.getByText('Тест1'));

        expect(onChangeFn.mock.calls[0][0].target.value).toEqual(['1']);
    });

    test('должен корректно работать со строками, числами и объектами переданными по ссылке', () => {
        const onChangeFn = jest.fn();
        const refValue = { k: 1 };
        const items = [
            { value: 'str', content: 'Тест1' },
            { value: 2, content: 'Тест2' },
            { value: refValue, content: 'Тест3' },
        ];
        render(<Menu items={items} onChange={onChangeFn} />);

        fireEvent.click(screen.getByText('Тест1'));

        expect(onChangeFn.mock.calls[0][0].target.value).toBe('str');

        onChangeFn.mockReset();
        fireEvent.click(screen.getByText('Тест2'));

        expect(onChangeFn.mock.calls[0][0].target.value).toBe(2);

        onChangeFn.mockReset();
        fireEvent.click(screen.getByText('Тест3'));

        expect(onChangeFn.mock.calls[0][0].target.value).toBe(refValue);
    });

    test('должен переопределить элемент меню с помощью renderItem', () => {
        const items = [
            { value: 'testVal1', content: 'Тест1' },
            { value: 'testVal2', content: 'Тест2' },
        ];

        render(<Menu items={items} renderItem={(props) => <div data-testid="test-menuitem">{props.children}</div>} />);

        expect(screen.getAllByTestId('test-menuitem')).toHaveLength(2);
    });

    describe('_withJsxContent', () => {
        const MenuWithJsxContent = withJsxContent(Menu);

        test('должен проставляться дополнительный className у item', () => {
            render(
                <MenuWithJsxContent>
                    <Item className="TestMenuItem" value="1">
                        Тест1
                    </Item>
                </MenuWithJsxContent>,
            );

            expect(screen.getByRole('menuitem')).toHaveClass('TestMenuItem');
        });

        test('должен проставляться дополнительный className у group', () => {
            render(
                <MenuWithJsxContent>
                    <Group className="TestMenuGroup">
                        <Item value="testVal1">Тест1</Item>
                    </Group>
                </MenuWithJsxContent>,
            );

            expect(screen.getByRole('group')).toHaveClass('TestMenuGroup');
        });
    });

    test('должен прокидывать value в renderItem', () => {
        const renderItem = jest.fn(() => null);
        render(<Menu items={[{ value: 'test1', content: 'Тест1' }]} renderItem={renderItem} />);

        expect(renderItem).toHaveBeenCalledWith(expect.objectContaining({ value: 'test1' }), expect.anything());
    });

    if (platform === 'desktop') {
        test('должен перемещаться по активным пунктам меню при навигации клавиатурой', () => {
            const items = [
                { value: 'testVal1', content: 'Тест1', disabled: true },
                { value: 'testVal2', content: 'Тест2' },
                { value: 'testVal3', content: 'Тест3', disabled: true },
                { value: 'testVal4', content: 'Тест4' },
            ];
            render(<Menu items={items} onChange={() => null} value="" focused />);

            fireEvent.keyDown(document, { keyCode: Keys.UP });

            expect(screen.getByRole('option', { name: 'Тест4' })).toHaveClass('Menu-Item_hovered');

            fireEvent.keyDown(document, { keyCode: Keys.UP });

            expect(screen.getByRole('option', { name: 'Тест2' })).toHaveClass('Menu-Item_hovered');

            fireEvent.keyDown(document, { keyCode: Keys.DOWN });

            expect(screen.getByRole('option', { name: 'Тест4' })).toHaveClass('Menu-Item_hovered');

            fireEvent.keyDown(document, { keyCode: Keys.DOWN });

            expect(screen.getByRole('option', { name: 'Тест2' })).toHaveClass('Menu-Item_hovered');
        });
    }
});
