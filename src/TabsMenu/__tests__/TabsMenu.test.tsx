import React, { createRef } from 'react';

import { Keys } from '../../lib/keyboard';
import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { ITabsMenuTabProps } from '../Tab/TabsMenu-Tab';
import { TabsMenu as TabsMenuCommon } from '../TabsMenu';
import { TabsMenu as TabsMenuDesktop } from '../desktop';
import { TabsMenu as TabsMenuTouchPad } from '../touch-pad';
import { TabsMenu as TabsMenuTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TabsMenuDesktop],
    ['touch-pad', TabsMenuTouchPad],
    ['touch-phone', TabsMenuTouchPhone],
] as const;

// TODO: при переходе на 17 реакт `e.persist` убрать
const tab1: ITabsMenuTabProps = { id: 'tab1', onClick: jest.fn((e) => e.persist()), content: 'Поиск' };
const tab2: ITabsMenuTabProps = { id: 'tab2', onClick: jest.fn((e) => e.persist()), content: <div>Картинки</div> };
const tab3: ITabsMenuTabProps = { id: 'tab3', onClick: jest.fn((e) => e.persist()), disabled: true, content: 'Видео' };
const tab4: ITabsMenuTabProps = { id: 'tab4', onClick: jest.fn((e) => e.persist()), content: 'Карты' };

const tabs: ITabsMenuTabProps[] = [tab1, tab2, tab3, tab4];

describe.each(platforms)('TabsMenu@%s', (_platfrom, TabsMenu) => {
    const render = createClientRender();

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<TabsMenu activeTab={tab1.id} tabs={tabs} className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(TabsMenuCommon.displayName).toBe('TabsMenu');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLUListElement>();
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('активный таб должен иметь модификатор active', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        expect(screen.getAllByRole('tab')[0]).toHaveClass('TabsMenu-Tab_active');
    });

    test('первый таб должен иметь модификатор first', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        expect(screen.getAllByRole('tab')[0]).toHaveClass('TabsMenu-Tab_first');
    });

    test('disabled таб должен иметь модификатор disabled', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        expect(screen.getAllByRole('tab')[2]).toHaveClass('TabsMenu-Tab_disabled');
    });

    test('должен менять активный таб при изменении свойства activeTab', () => {
        const { setProps } = render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);
        setProps({ activeTab: tab2.id });

        expect(screen.getAllByRole('tab')[1]).toHaveClass('TabsMenu-Tab_active');
    });

    test('должен вызывать onClick, если обработчик задан и таб не disabled', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        fireEvent.click(screen.getAllByRole('tab')[1]);

        expect(tab2.onClick).toBeCalledTimes(1);
    });

    test('должен вызывать onClick с правильными аргументами', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        fireEvent.click(screen.getAllByRole('tab')[3]);

        const onClickMock = tab4.onClick as jest.Mock;
        expect(onClickMock.mock.calls[0][0].target.innerHTML).toEqual(tab4.content);
    });

    test('не должен вызывать onClick, если tab disabled', () => {
        render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        fireEvent.click(screen.getAllByRole('tab')[1]);

        expect(tab3.onClick).toBeCalledTimes(0);
    });

    test('должен вызывать onClick и выставлять фокус на следующий доступный пункт меню через клавиатурное управление', () => {
        const { setProps } = render(<TabsMenu activeTab={tab1.id} tabs={tabs} />);

        fireEvent.keyDown(screen.getAllByRole('tab')[0], { keyCode: Keys.RIGHT });

        expect(tab2.onClick).toBeCalledTimes(1);
        expect(screen.getAllByRole('tab')[1]).toHaveFocus();

        setProps({ activeTab: tab2.id });

        fireEvent.keyDown(screen.getAllByRole('tab')[1], { keyCode: Keys.DOWN });

        expect(tab4.onClick).toBeCalledTimes(1);
        expect(screen.getAllByRole('tab')[3]).toHaveFocus();

        setProps({ activeTab: tab4.id });

        fireEvent.keyDown(screen.getAllByRole('tab')[3], { keyCode: Keys.LEFT });

        expect(tab2.onClick).toBeCalledTimes(2);
        expect(screen.getAllByRole('tab')[1]).toHaveFocus();

        setProps({ activeTab: tab2.id });

        fireEvent.keyDown(screen.getAllByRole('tab')[1], { keyCode: Keys.UP });

        expect(tab1.onClick).toBeCalledTimes(1);
        expect(screen.getAllByRole('tab')[0]).toHaveFocus();
    });
});
