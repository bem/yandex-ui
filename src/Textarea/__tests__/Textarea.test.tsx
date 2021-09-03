import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Textarea as TextareaCommon } from '../Textarea';
import { Textarea as TextareaDesktop } from '../desktop';
import { Textarea as TextareaTouchPad } from '../touch-pad';
import { Textarea as TextareaTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TextareaDesktop],
    ['touch-pad', TextareaTouchPad],
    ['touch-phone', TextareaTouchPhone],
] as const;

describe.each(platforms)('Textarea@%s', (_platform, Textarea) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Textarea className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        //Так написано, потому что компонент сразу поставляется в обертке.
        expect(TextareaCommon.displayName).toBe('WithControl(Textarea)');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<Textarea innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM инпут', () => {
        const controlRef = createRef<HTMLTextAreaElement>();
        render(<Textarea controlRef={controlRef} />);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен вызывать событие onChange с event при вводе текста в поле', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onChange = jest.fn((e) => e.persist());
        render(<Textarea onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'next-value' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('next-value');
    });

    test('должен обновлять value в textarea при обновлении через props', () => {
        const { setProps } = render(<Textarea value="" onChange={() => null} />);

        setProps({ value: 'next' });

        expect(screen.getByRole('textbox')).toHaveValue('next');

        setProps({ value: 'next-value' });

        expect(screen.getByRole('textbox')).toHaveValue('next-value');
    });

    test('должен рендерить контент в addonAfter и addonBefore', () => {
        render(<Textarea addonAfter={<i data-testid="after" />} addonBefore={<i data-testid="before" />} />);

        expect(screen.getByTestId('before')).toBeInTheDocument();
        expect(screen.getByTestId('after')).toBeInTheDocument();
    });

    test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
        const { setProps } = render(<Textarea />);
        setProps({ disabled: true });

        expect(screen.getByRole('textbox')).toBeDisabled();

        setProps({ disabled: false });

        expect(screen.getByRole('textbox')).not.toBeDisabled();
    });

    test('должен рендерить/удалять элемент Hint при наличии свойства', () => {
        const { container, setProps } = render(<Textarea hint="error" />);

        expect(container.querySelector('.Textarea-Hint')).toBeInTheDocument();

        setProps({ hint: '' });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.animationEnd(container.querySelector('.Textarea-Hint')!);

        expect(container.querySelector('.Textarea-Hint')).not.toBeInTheDocument();
    });

    test('renderControl рисует div и туда прорастают свойства', () => {
        render(
            <Textarea
                renderControl={({ controlRef, ...props }) => <div data-testid="control" {...(props as any)} />}
                name="textareaName"
            />,
        );

        expect(screen.getByTestId('control')).toBeInTheDocument();
        expect(screen.getByTestId('control')).toHaveAttribute('name', 'textareaName');
    });

    test('should show next hint on animated hiding of previous hint', () => {
        const { container, setProps } = render(<Textarea hint="error" />);

        setProps({ hint: '' });

        expect(container.querySelector('.Textarea-Hint')).toHaveClass('Textarea-Hint_leave');

        setProps({ hint: 'error' });

        expect(container.querySelector('.Textarea-Hint')).not.toHaveClass('Textarea-Hint_leave');
    });
});
