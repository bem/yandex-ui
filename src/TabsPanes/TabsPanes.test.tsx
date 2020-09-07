import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { TabsPanes } from './TabsPanes';
import { delay, serverEnvironmentSetup } from '../internal/utils';

const pane1 = { id: 'tab1', content: 'Pane 1 Поиск' };
const pane2 = { id: 'tab2', content: 'Pane 2 Картинки' };
const pane3 = { id: 'tab3', content: <div>Pane 3 Маркет</div> };

const panes = [pane1, pane2, pane3];

describe('TabsPanes', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<TabsPanes activePane={pane1.id} panes={panes} className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<TabsPanes activePane={pane1.id} panes={panes} className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(TabsPanes.displayName).toBe('TabsPanes');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<TabsPanes activePane={pane1.id} panes={panes} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должно быть видно содержимое только активной панельки (snapshot)', () => {
            expect(mount(<TabsPanes activePane={pane1.id} panes={panes} />)).toMatchSnapshot();
        });

        test('должен показывать новый jsx контент при изменении activePane (snapshot)', () => {
            const wrapper = mount(<TabsPanes activePane={pane1.id} panes={panes} />);
            wrapper.setProps({ activePane: pane3.id });
            expect(wrapper).toMatchSnapshot();
        });

        test('должен рендерить пустую панель при отсутствии activePane', () => {
            const wrapper = mount(<TabsPanes panes={panes} />);
            wrapper.setProps({ activePane: undefined });
            expect(wrapper.find('.TabsPanes').children().length).toBe(0);
        });
    });
});
