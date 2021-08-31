import React, { FC } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { IWithControlProps, withControl as withControlCommon } from '../withControl';
import {
    IWithControlProps as IWithControlPropsDesktop,
    withControl as withControlDesktop,
} from '../withControl@desktop';

interface IComponentProps extends IWithControlProps, IWithControlPropsDesktop {
    className?: string;
}

const Component: FC<IComponentProps> = ({ focused, pressed, hovered, ...props }) => (
    <div {...props} data-testid="element" data-hovered={hovered} data-focused={focused} data-pressed={pressed} />
);

const ComponentWithControl = withControlDesktop(withControlCommon(Component));

describe('withControl', () => {
    const render = createClientRender();

    test('должен быть установлен корректный displayName', () => {
        expect(ComponentWithControl.displayName).toBe('WithControl@desktop(WithControl(Component))');
    });

    test('должен вызывать событие onMouseEnter при наведении', () => {
        const onMouseEnter = jest.fn();

        render(<ComponentWithControl onMouseEnter={onMouseEnter} />);
        fireEvent.mouseEnter(screen.getByTestId('element'));
        expect(onMouseEnter).toHaveBeenCalledTimes(1);
    });

    test('должен вызывать событие onMouseLeave при снятии наведения', () => {
        const onMouseLeave = jest.fn();

        render(<ComponentWithControl onMouseLeave={onMouseLeave} />);
        fireEvent.mouseLeave(screen.getByTestId('element'));
        expect(onMouseLeave).toHaveBeenCalledTimes(1);
    });

    test('должен установить focused при фокусе', () => {
        render(<ComponentWithControl />);

        expect(screen.getByTestId('element')).not.toHaveAttribute('data-focused');

        fireEvent.focus(screen.getByTestId('element'));

        expect(screen.getByTestId('element')).toHaveAttribute('data-focused', 'true');
    });

    test('должен убрать focused при потере фокуса', () => {
        render(<ComponentWithControl />);

        fireEvent.focus(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-focused', 'true');

        fireEvent.blur(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-focused', 'false');
    });

    test('должен установить pressed при нажатии/отпускании клавиши мыши', () => {
        render(<ComponentWithControl />);
        expect(screen.getByTestId('element')).not.toHaveAttribute('data-pressed');

        fireEvent.mouseDown(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-pressed', 'true');

        fireEvent.mouseUp(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-pressed', 'false');
    });

    test('должен установить hovered при наведении', () => {
        render(<ComponentWithControl />);
        expect(screen.getByTestId('element')).not.toHaveAttribute('data-hovered');
        fireEvent.mouseEnter(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-hovered', 'true');
    });

    test('должен убрать hovered при снятии наведения', () => {
        render(<ComponentWithControl />);
        fireEvent.mouseEnter(screen.getByTestId('element'));
        fireEvent.mouseLeave(screen.getByTestId('element'));
        expect(screen.getByTestId('element')).toHaveAttribute('data-hovered', 'false');
    });

    test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
        const { setProps } = render(<ComponentWithControl />);
        expect(screen.getByTestId('element')).not.toHaveAttribute('disabled');
        setProps({ disabled: true });
        expect(screen.getByTestId('element')).toHaveAttribute('disabled');
        setProps({ disabled: false });
        expect(screen.getByTestId('element')).not.toHaveAttribute('disabled');
    });

    test('не должен вызывать события когда disabled', () => {
        const onEvent = jest.fn();

        render(
            <ComponentWithControl
                disabled
                onBlur={onEvent}
                onFocus={onEvent}
                onMouseDown={onEvent}
                onMouseUp={onEvent}
                onMouseEnter={onEvent}
                onMouseLeave={onEvent}
            />,
        );

        const element = screen.getByTestId('element');
        fireEvent.focusOut(element);
        fireEvent.focusIn(element);
        fireEvent.mouseDown(element);
        fireEvent.mouseUp(element);
        fireEvent.mouseEnter(element);
        fireEvent.mouseLeave(element);

        expect(onEvent).not.toHaveBeenCalled();
    });

    test('должен вызывать события после снятия disabled', () => {
        const onBlur = jest.fn();
        const onFocus = jest.fn();
        const onMouseDown = jest.fn();
        const onMouseUp = jest.fn();
        const onMouseEnter = jest.fn();
        const onMouseLeave = jest.fn();
        const { setProps } = render(
            <ComponentWithControl
                disabled
                onBlur={onBlur}
                onFocus={onFocus}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />,
        );

        setProps({ disabled: false });

        const element = screen.getByTestId('element');
        fireEvent.blur(element);
        fireEvent.focus(element);
        fireEvent.mouseDown(element);
        fireEvent.mouseUp(element);
        fireEvent.mouseEnter(element);
        fireEvent.mouseLeave(element);

        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onFocus).toHaveBeenCalledTimes(1);
        expect(onMouseDown).toHaveBeenCalledTimes(1);
        expect(onMouseUp).toHaveBeenCalledTimes(1);
        expect(onMouseEnter).toHaveBeenCalledTimes(1);
        expect(onMouseLeave).toHaveBeenCalledTimes(1);
    });

    test('не должен устанавливать флаги если disabled', () => {
        render(<ComponentWithControl disabled />);

        const element = screen.getByTestId('element');
        fireEvent.focusIn(element);
        fireEvent.mouseDown(element);
        fireEvent.mouseEnter(element);

        expect(screen.getByTestId('element')).not.toHaveAttribute('data-focused');
        expect(screen.getByTestId('element')).not.toHaveAttribute('data-pressed');
        expect(screen.getByTestId('element')).not.toHaveAttribute('data-hovered');
    });

    test('должен устанавливать флаги после снятия disabled', () => {
        const { setProps } = render(<ComponentWithControl disabled />);
        setProps({ disabled: false });

        const element = screen.getByTestId('element');
        fireEvent.focus(element);
        fireEvent.mouseDown(element);
        fireEvent.mouseEnter(element);

        expect(screen.getByTestId('element')).toHaveAttribute('data-focused', 'true');
        expect(screen.getByTestId('element')).toHaveAttribute('data-pressed', 'true');
        expect(screen.getByTestId('element')).toHaveAttribute('data-hovered', 'true');
    });
});
