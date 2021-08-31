import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Popup as PopupCommon } from '../Popup';
import { Popup as PopupDesktop } from '../desktop';
import { Popup as PopupTouchPad } from '../touch-phone';
import { Popup as PopupTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', PopupDesktop],
    ['touch-pad', PopupTouchPad],
    ['touch-phone', PopupTouchPhone],
] as const;

describe.each(platforms)('Popup@%s', (_platform, Popup) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Popup visible hasTail className="mix" scope="inplace">
                content
            </Popup>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(PopupCommon.displayName).toBe('Popup2');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Popup visible innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на хвостик при наличии hasTail', () => {
        const tailRef = createRef<HTMLDivElement>();
        render(<Popup visible tailRef={tailRef} hasTail />);

        expect(tailRef.current).not.toBeNull();
    });

    test('должен рендерить контент в addonAfter и addonBefore', () => {
        render(<Popup visible addonAfter={<i data-testid="after" />} addonBefore={<i data-testid="before" />} />);

        expect(screen.getByTestId('before')).toBeInTheDocument();
        expect(screen.getByTestId('after')).toBeInTheDocument();
    });

    test('не должен рендериться в body если visible и keepMounted не установлены', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Popup innerRef={innerRef} keepMounted={false} data-testid="element" />);

        expect(screen.queryByTestId('element')).not.toBeInTheDocument();
    });

    test('Должен удаляться из DOM если keepMounted не установлен', () => {
        const innerRef = createRef<HTMLDivElement>();
        const { setProps } = render(<Popup innerRef={innerRef} keepMounted={false} data-testid="element" />);

        setProps({ visible: true });

        expect(screen.getByTestId('element')).toBeInTheDocument();

        setProps({ visible: false });

        expect(screen.queryByTestId('element')).not.toBeInTheDocument();
    });

    test('должен рендериться в body scope', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Popup innerRef={innerRef} visible />);

        expect(document.body.lastElementChild).toBe(innerRef.current);
    });

    test('должен рендериться в пользовательский scope', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const innerRef = createRef<HTMLDivElement>();
        render(<Popup scope={{ current: element }} innerRef={innerRef} visible />);

        expect(element.lastElementChild).toBe(innerRef.current);

        document.body.removeChild(element);
    });

    test('должен устанавливать модификатор visible если открыт при инициализации', () => {
        render(<Popup visible data-testid="element" />);

        expect(screen.getByTestId('element')).toHaveClass('Popup2_visible');
    });

    test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
        const { setProps } = render(<Popup data-testid="element" />);
        setProps({ visible: true });

        expect(screen.getByTestId('element')).toHaveClass('Popup2_visible');

        setProps({ visible: false });

        expect(screen.getByTestId('element')).not.toHaveClass('Popup2_visible');
    });

    test('должен лениво рендериться в DOM', () => {
        const { setProps } = render(<Popup data-testid="element" />);

        expect(screen.queryByTestId('element')).not.toBeInTheDocument();

        setProps({ visible: true });

        expect(screen.queryByTestId('element')).toBeInTheDocument();
    });
});
