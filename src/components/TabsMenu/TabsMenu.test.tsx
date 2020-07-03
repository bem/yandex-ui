import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { delay, serverEnvironmentSetup } from '../../internal/utils';
import { jestEnvironmentSetup, getRoot } from '../../internal/utils/jestEnvironmentSetup';

import { TabsMenu } from './TabsMenu';
import { Keys } from '../../lib/keyboard';
import { ITabsMenuTabProps } from './Tab/TabsMenu-Tab';

const tab1: ITabsMenuTabProps = { id: 'tab1', onClick: jest.fn(), content: 'Поиск' };
const tab2: ITabsMenuTabProps = { id: 'tab2', onClick: jest.fn(), content: <div>Картинки</div> };
const tab3: ITabsMenuTabProps = { id: 'tab3', onClick: jest.fn(), disabled: true, content: 'Видео' };
const tab4: ITabsMenuTabProps = { id: 'tab4', onClick: jest.fn(), content: 'Карты' };

const tabs: ITabsMenuTabProps[] = [tab1, tab2, tab3, tab4];

describe('TabsMenu', () => {
    jestEnvironmentSetup();

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<TabsMenu activeTab={tab1.id} tabs={tabs} className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<TabsMenu activeTab={tab1.id} tabs={tabs} className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(TabsMenu.displayName).toBe('TabsMenu');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLUListElement>();
            mount(<TabsMenu activeTab={tab1.id} tabs={tabs} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('активный таб должен иметь модификатор active', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(0)
                    .hasClass('TabsMenu-Tab_active'),
            ).toBe(true);
        });

        test('первый таб должен иметь модификатор first', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(0)
                    .hasClass('TabsMenu-Tab_first'),
            ).toBe(true);
        });

        test('disabled таб должен иметь модификатор disabled', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(2)
                    .hasClass('TabsMenu-Tab_disabled'),
            ).toBe(true);
        });

        test('должен менять активный таб при изменении свойства activeTab', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            wrapper.setProps({ activeTab: tab2.id });
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(1)
                    .hasClass('TabsMenu-Tab_active'),
            ).toBe(true);
        });

        test('должен вызывать onClick, если обработчик задан и таб не disabled', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            wrapper
                .find('.TabsMenu-Tab')
                .at(1)
                .simulate('click');
            expect(tab2.onClick).toBeCalledTimes(1);
        });

        test('должен вызывать onClick с правильными аргументами', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            wrapper
                .find('.TabsMenu-Tab')
                .at(3)
                .simulate('click');
            const onClickMock = tab4.onClick as jest.Mock;
            expect(onClickMock.mock.calls[0][0].target.innerHTML).toEqual(tab4.content);
        });

        test('не должен вызывать onClick, если tab disabled', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
            wrapper
                .find('.TabsMenu-Tab')
                .at(1)
                .simulate('click');
            expect(tab3.onClick).toBeCalledTimes(0);
        });

        test('должен вызывать onClick и выставлять фокус на следующий доступный пункт меню через клавиатурное управление', () => {
            const wrapper = mount(<TabsMenu activeTab={tab1.id} tabs={tabs} />, { attachTo: getRoot() });

            wrapper
                .find('.TabsMenu-Tab')
                .at(0)
                .simulate('keydown', { keyCode: Keys.RIGHT });
            expect(tab2.onClick).toBeCalledTimes(1);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(1)
                    .getDOMNode(),
            ).toBe(document.activeElement);

            wrapper.setProps({ activeTab: tab2.id });

            wrapper
                .find('.TabsMenu-Tab')
                .at(1)
                .simulate('keydown', { keyCode: Keys.DOWN });
            expect(tab4.onClick).toBeCalledTimes(1);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(3)
                    .getDOMNode(),
            ).toBe(document.activeElement);

            wrapper.setProps({ activeTab: tab4.id });

            wrapper
                .find('.TabsMenu-Tab')
                .at(3)
                .simulate('keydown', { keyCode: Keys.LEFT });
            expect(tab2.onClick).toBeCalledTimes(2);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(1)
                    .getDOMNode(),
            ).toBe(document.activeElement);

            wrapper.setProps({ activeTab: tab2.id });

            wrapper
                .find('.TabsMenu-Tab')
                .at(1)
                .simulate('keydown', { keyCode: Keys.UP });
            expect(tab1.onClick).toBeCalledTimes(1);
            expect(
                wrapper
                    .find('.TabsMenu-Tab')
                    .at(0)
                    .getDOMNode(),
            ).toBe(document.activeElement);
        });
    });
});
