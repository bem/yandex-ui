import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Textinput as TextinputCommon } from '../Textinput';
import { Textinput as TextinputDesktop } from '../desktop';
import { Textinput as TextinputTouchPad } from '../touch-pad';
import { Textinput as TextinputTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TextinputDesktop],
    ['touch-pad', TextinputTouchPad],
    ['touch-phone', TextinputTouchPhone],
] as const;

describe.each(platforms)('Textinput@%s', (_platform, Textinput) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Textinput className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        //Так написано, потому что компонент сразу поставляется в обертке.
        expect(TextinputCommon.displayName).toBe('WithControl(Textinput)');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLElement>();
        render(<Textinput innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM инпут', async () => {
        const controlRef = createRef<HTMLInputElement>();
        render(<Textinput controlRef={controlRef} />);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен вызывать событие onChange с event при вводе текста в поле', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onChange = jest.fn((e) => e.persist());
        render(<Textinput onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'next-value' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('next-value');
    });

    test('должен обновлять value в input при обновлении через props', () => {
        const { setProps } = render(<Textinput value="" onChange={() => null} />);
        setProps({ value: 'next' });

        expect(screen.getByRole('textbox')).toHaveValue('next');

        setProps({ value: 'next-value' });

        expect(screen.getByRole('textbox')).toHaveValue('next-value');
    });

    test('должен рендерить контент в addonAfter и addonBefore', () => {
        render(<Textinput addonAfter={<i data-testid="after" />} addonBefore={<i data-testid="before" />} />);

        expect(screen.getByTestId('after')).toBeInTheDocument();
        expect(screen.getByTestId('before')).toBeInTheDocument();
    });

    test('должен добавлять iconLeft и iconRight', () => {
        render(<Textinput iconLeft={<i data-testid="left" />} iconRight={<i data-testid="right" />} />);

        expect(screen.getByTestId('left')).toBeInTheDocument();
        expect(screen.getByTestId('right')).toBeInTheDocument();
    });

    test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
        const { setProps } = render(<Textinput />);
        setProps({ disabled: true });

        expect(screen.getByRole('textbox')).toBeDisabled();

        setProps({ disabled: false });

        expect(screen.getByRole('textbox')).not.toBeDisabled();
    });

    test('должен рендерить/удалять элемент Hint при наличии свойства', () => {
        const { container, setProps } = render(<Textinput hint="error" />);

        expect(container.querySelector('.Textinput-Hint')).toBeInTheDocument();

        setProps({ hint: '' });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.animationEnd(container.querySelector('.Textinput-Hint')!);

        expect(container.querySelector('.Textinput-Hint')).not.toBeInTheDocument();
    });

    test('renderControl рисует div и туда прорастают свойства', () => {
        render(
            <Textinput
                renderControl={({ controlRef, ...props }) => <div data-testid="control" {...(props as any)} />}
                name="textinputName"
            />,
        );

        expect(screen.getByTestId('control')).toBeInTheDocument();
        expect(screen.getByTestId('control')).toHaveAttribute('name', 'textinputName');
    });

    test('should show next hint on animated hiding of previous hint', () => {
        const { container, setProps } = render(<Textinput hint="error" />);

        setProps({ hint: '' });

        expect(container.querySelector('.Textinput-Hint')).toHaveClass('Textinput-Hint_leave');

        setProps({ hint: 'error' });

        expect(container.querySelector('.Textinput-Hint')).not.toHaveClass('Textinput-Hint_leave');
    });
});
