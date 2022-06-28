import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { MessageBox as MessageBoxCommon, Corner } from '../MessageBox';
import { MessageBox as MessageBoxDesktop } from '../desktop/bundle';
import { MessageBox as MessageBoxTouchPad } from '../touch-pad/bundle';
import { MessageBox as MessageBoxTouchPhone } from '../touch-phone/bundle';

const platforms = [
    ['desktop', MessageBoxDesktop],
    ['touch-pad', MessageBoxTouchPad],
    ['touch-phone', MessageBoxTouchPhone],
] as const;

describe.each(platforms)('MessageBox@%s', (_platform, MessageBox) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<MessageBox className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(MessageBoxCommon.displayName).toBe('MessageBox');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<MessageBox innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать/удалять модификаторы при обновлении через props', () => {
        const { container, setProps } = render(<MessageBox />);

        expect(container.firstChild).not.toHaveClass('MessageBox_opaque');

        setProps({ opaque: true });

        expect(container.firstChild).toHaveClass('MessageBox_opaque');

        setProps({ layout: 'tooltip' });

        expect(container.firstChild).toHaveClass('MessageBox_layout_tooltip');
    });

    test('должен рендерить Close элемент (snapshot)', () => {
        const { container } = render(<MessageBox onClose={() => {}} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить Background элемент (snapshot)', () => {
        const { container } = render(<MessageBox background={<div children="back" />} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить Corner элемент (snapshot)', () => {
        const { container } = render(
            <MessageBox corner={<Corner width={42} side="bottom-left" children={<img />} />} />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить actions элемент (snapshot)', () => {
        const { container } = render(<MessageBox actions={<button />} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен прокинуть все атрибуты (title, role, onMouseEnter)', () => {
        const onMouseEnter = jest.fn();

        render(<MessageBox role="alert" title="extra" onMouseEnter={onMouseEnter} data-testid="message-box" />);

        fireEvent.mouseEnter(screen.getByTestId('message-box'));
        expect(onMouseEnter).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId('message-box')).toHaveAttribute('title', 'extra');
        expect(screen.getByTestId('message-box')).toHaveAttribute('role', 'alert');
    });
});
