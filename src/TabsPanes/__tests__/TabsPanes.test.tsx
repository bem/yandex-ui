import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { TabsPanes } from '../TabsPanes';

const pane1 = { id: 'tab1', content: 'Pane 1 Поиск' };
const pane2 = { id: 'tab2', content: 'Pane 2 Картинки' };
const pane3 = { id: 'tab3', content: <div>Pane 3 Маркет</div> };
const panes = [pane1, pane2, pane3];

describe('TabsPanes', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<TabsPanes activePane={pane1.id} panes={panes} className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(TabsPanes.displayName).toBe('TabsPanes');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<TabsPanes activePane={pane1.id} panes={panes} innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должно быть видно содержимое только активной панельки (snapshot)', () => {
        const { container } = render(<TabsPanes activePane={pane1.id} panes={panes} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен показывать новый jsx контент при изменении activePane (snapshot)', () => {
        const { setProps, container } = render(<TabsPanes activePane={pane1.id} panes={panes} />);

        setProps({ activePane: pane3.id });

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить пустую панель при отсутствии activePane', () => {
        const warnMock = jest.spyOn(console, 'warn');
        warnMock.mockImplementation(() => null);
        const { setProps } = render(<TabsPanes panes={panes} />);

        setProps({ activePane: undefined });

        expect(screen.getByRole('tabpanel')).toBeEmptyDOMElement();

        warnMock.mockReset();
    });
});
