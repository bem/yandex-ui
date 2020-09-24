import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { Menu as MenuCommon, ChangeEvent } from './Menu';
import { Menu as MenuDesktop } from './Menu@desktop';
import { Menu as MenuTouchPad } from './Menu@touch-pad';
import { Menu as MenuTouchPhone } from './Menu@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';
import { menuRegistry as menuRegistryDesktop } from './Menu.registry/desktop';
import { menuRegistry as menuRegistryTouchPad } from './Menu.registry/touch-pad';
import { menuRegistry as menuRegistryTouchPhone } from './Menu.registry/touch-phone';
import { Keys } from '../lib/keyboard';

const platforms = [
    ['desktop', withRegistry(menuRegistryDesktop)(MenuDesktop)],
    ['touch-pad', withRegistry(menuRegistryTouchPad)(MenuTouchPad)],
    ['touch-phone', withRegistry(menuRegistryTouchPhone)(MenuTouchPhone)],
];

type MenuProps = ExtractProps<typeof MenuDesktop>;

const testItems = [
    {
        title: 'test1',
        items: [{ id: 'item-id-1', value: '1', content: 'Тест1' }, { id: 'item-id-2', value: '2', content: 'Тест2' }],
    },
    { id: 'item-id-3', value: '3', content: 'test2' },
];

describe.each<any>(platforms)('Menu@%s', (platform, Menu: ComponentType<MenuProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Menu items={testItems} className="mix" />)).toMatchSnapshot();
        });
    });
    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Menu items={testItems} className="mix" />)).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Menu items={[{ value: '1', content: 'Тест' }]} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен быть установлен корректный displayName', () => {
            expect(MenuCommon.displayName).toBe('Menu');
        });

        test('должен проставить className Menu-Item_disabled и aria-selected=false при disabled всего меню', () => {
            const wrapper = mount(
                <Menu
                    items={[
                        { value: '1', content: 'Тест' },
                        { value: '2', content: 'Тест2' },
                        { title: 'test1', items: [{ value: '3', content: 'Тест3' }, { value: '4', content: 'Тест4' }] },
                    ]}
                    disabled
                />,
            );
            const items = wrapper.find('.Menu-Item_disabled');
            expect(items).toHaveLength(4);
            items.forEach((item) => expect(item.prop('aria-selected')).toBe(false));
        });

        test('должен проставляться className Menu-Item_disabled у item c disabled: true', () => {
            const wrapper = mount(
                <Menu
                    items={[
                        { value: '1', content: 'Тест' },
                        { value: '2', content: 'Тест2' },
                        {
                            title: 'test1',
                            items: [{ value: '3', content: 'Тест3', disabled: true }, { value: '4', content: 'Тест4' }],
                        },
                    ]}
                />,
            );
            expect(wrapper.find('.Menu-Item_disabled').text()).toBe('Тест3');
        });

        test('должен вызывать onChange при нажатии на пункт меню', () => {
            const onChangeFn = jest.fn();
            const wrapper = mount(
                <Menu
                    items={[
                        { value: '1', content: 'Тест' },
                        { value: '2', content: 'Тест2' },
                        {
                            title: 'test1',
                            items: [{ value: '3', content: 'Тест3' }, { value: '4', content: 'Тест4' }],
                        },
                    ]}
                    onChange={onChangeFn}
                />,
            );
            wrapper
                .find('.Menu-Item')
                .at(0)
                .simulate('click');
            expect(onChangeFn.mock.calls.length).toBe(1);
        });

        test('должен при нажатии на пункт меню с multiselect вызывать onChange и в него передавать массив', () => {
            const onChangeFn = jest.fn();
            const wrapper = mount(
                <Menu
                    items={[
                        { value: '1', content: 'Тест' },
                        { value: '2', content: 'Тест2' },
                        {
                            title: 'test1',
                            items: [{ value: '3', content: 'Тест3' }, { value: '4', content: 'Тест4' }],
                        },
                    ]}
                    onChange={onChangeFn}
                    value={[]}
                />,
            );
            wrapper
                .find('.Menu-Item')
                .at(0)
                .simulate('click');

            expect(Array.isArray(onChangeFn.mock.calls[0][0].target.value)).toBe(true);
        });

        test('Должен корректно работать со строками, числами и объектами переданными по ссылке', () => {
            const onChangeFn = jest.fn();
            const refValue = { k: 1 };
            const wrapper = mount(
                <Menu
                    items={[
                        { value: 'str', content: 'Тест' },
                        { value: 2, content: 'Тест2' },
                        { value: refValue, content: 'Тест3' },
                    ]}
                    onChange={onChangeFn}
                />,
            );

            wrapper
                .find('.Menu-Item')
                .at(0)
                .simulate('mouseenter')
                .simulate('click');
            expect(onChangeFn.mock.calls[0][0].target.value).toBe('str');
            onChangeFn.mockReset();

            wrapper
                .find('.Menu-Item')
                .at(1)
                .simulate('mouseenter')
                .simulate('click');
            expect(onChangeFn.mock.calls[0][0].target.value).toBe(2);
            onChangeFn.mockReset();

            wrapper
                .find('.Menu-Item')
                .at(2)
                .simulate('mouseenter')
                .simulate('click');
            expect(onChangeFn.mock.calls[0][0].target.value).toBe(refValue);
        });

        if (platform === 'desktop') {
            test('должен перемещаться по активным пунктам меню при навигации клавиатурой', () => {
                const state = { value: '' };
                const onChange = (event: ChangeEvent<HTMLElement>) => {
                    state.value = event.target.value;
                };
                const wrapper = mount(
                    <Menu
                        items={[
                            { value: 'testVal1', content: 'Тест', disabled: true },
                            { value: 'testVal2', content: 'Тест2' },
                            { value: 'testVal3', content: 'Тест3', disabled: true },
                            { value: 'testVal4', content: 'Тест4' },
                        ]}
                        onChange={onChange}
                        value={state.value}
                        focused
                    />,
                );

                document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: Keys.UP } as KeyboardEventInit));
                document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: Keys.UP } as KeyboardEventInit));
                expect(
                    wrapper
                        .find('.Menu-Item')
                        .at(1)
                        .getDOMNode()
                        .className.includes('Menu-Item_hovered'),
                ).toBe(true);

                document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: Keys.DOWN } as KeyboardEventInit));
                document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: Keys.DOWN } as KeyboardEventInit));
                expect(
                    wrapper
                        .find('.Menu-Item')
                        .at(1)
                        .getDOMNode()
                        .className.includes('Menu-Item_hovered'),
                ).toBe(true);
            });
        }
    });
});
