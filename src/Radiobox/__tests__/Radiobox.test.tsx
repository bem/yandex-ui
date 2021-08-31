import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Radiobox as RadioboxCommon } from '../Radiobox';
import { Radiobox as RadioboxDesktop } from '../desktop';
import { Radiobox as RadioboxTouchPad } from '../touch-pad';
import { Radiobox as RadioboxTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', RadioboxDesktop],
    ['touch-pad', RadioboxTouchPad],
    ['touch-phone', RadioboxTouchPhone],
] as const;

const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
];

describe.each(platforms)('Radiobox@%s', (_platform, Radiobox) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Radiobox onChange={() => null} value="a" options={options} className="mix" name="radio" />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(RadioboxCommon.displayName).toBe('Radiobox');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<Radiobox onChange={() => null} value="" options={[]} innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен вызывать событие onChange с event при клике на контрол', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onChange = jest.fn((e) => e.persist());

        render(<Radiobox value="a" options={options} onChange={onChange} />);

        fireEvent.click(screen.getAllByRole('radio')[1]);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('b');
    });

    test('должен устанавливать checked/aria-checked при обновлении свойства value', () => {
        const { setProps } = render(<Radiobox onChange={() => null} options={options} value="a" />);

        const [a1, b1] = screen.getAllByRole('radio');
        expect(a1).toBeChecked();
        expect(a1).toHaveAttribute('aria-checked', 'true');
        expect(b1).not.toBeChecked();
        expect(b1).toHaveAttribute('aria-checked', 'false');

        setProps({ value: 'b' });

        const [a2, b2] = screen.getAllByRole('radio');
        expect(a2).not.toBeChecked();
        expect(a2).toHaveAttribute('aria-checked', 'false');
        expect(b2).toBeChecked();
        expect(b2).toHaveAttribute('aria-checked', 'true');
    });

    test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
        const { setProps } = render(<Radiobox onChange={() => null} value="a" options={options} />);

        const [a1, b1] = screen.getAllByRole('radio');
        expect(a1).not.toBeDisabled();
        expect(b1).not.toBeDisabled();

        setProps({ disabled: true });

        const [a2, b2] = screen.getAllByRole('radio');
        expect(a2).toBeDisabled();
        expect(b2).toBeDisabled();
    });

    test('должен позволять блокировать и разблокировать отдельные опции через props', () => {
        const { setProps } = render(<Radiobox onChange={() => null} value="a" options={options} />);

        const [a1, b1] = screen.getAllByRole('radio');
        expect(a1).not.toBeDisabled();
        expect(b1).not.toBeDisabled();

        setProps({
            options: [
                { label: 'Option A', value: 'a' },
                { label: 'Option B', value: 'b', disabled: true },
            ],
        });

        const [a2, b2] = screen.getAllByRole('radio');
        expect(a2).not.toBeDisabled();
        expect(b2).toBeDisabled();
    });
});
