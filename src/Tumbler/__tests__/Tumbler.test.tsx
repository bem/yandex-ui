import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Tumbler as TumblerCommon } from '../Tumbler';
import { Tumbler as TumblerDesktop } from '../desktop';
import { Tumbler as TumblerTouchPad } from '../touch-pad';
import { Tumbler as TumblerTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TumblerDesktop],
    ['touch-pad', TumblerTouchPad],
    ['touch-phone', TumblerTouchPhone],
] as const;

const noop = () => null;

describe.each(platforms)('Tumbler@%s', (_platform, Tumbler) => {
    const render = createClientRender();

    afterEach(() => {
        jest.useRealTimers();
    });

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Tumbler
                checked={false}
                onChange={noop}
                tabIndex={1}
                name="switch"
                id="static-id"
                className="unit-mixin"
                labelBefore="labelBefore"
                labelAfter="labelAfter"
            />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        // NOTE: mergeRefs использует raf
        jest.useFakeTimers();
        const innerRef = createRef<HTMLSpanElement>();
        render(<Tumbler checked={false} onChange={noop} innerRef={innerRef} />);

        jest.runAllTimers();

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM элемент', () => {
        // NOTE: mergeRefs использует raf
        jest.useFakeTimers();
        const controlRef = createRef<HTMLInputElement>();
        render(<Tumbler checked={false} onChange={noop} controlRef={controlRef} />);

        jest.runAllTimers();

        expect(controlRef.current).not.toBe(null);
    });

    test('должен быть установлен корректный displayName', () => {
        expect(TumblerCommon.displayName).toBe('Tumbler');
    });

    test('должен устанавливать aria-pressed при изменении свойства checked', () => {
        const { setProps } = render(<Tumbler checked={false} onChange={noop} />);

        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');

        setProps({ checked: true });

        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');

        setProps({ checked: false });

        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });

    test('должен устанавливать aria-disabled при изменении свойства disabled', () => {
        const { setProps } = render(<Tumbler title="element" disabled={false} checked={false} onChange={noop} />);

        expect(screen.getByTitle('element')).toHaveAttribute('aria-disabled', 'false');

        setProps({ disabled: true });

        expect(screen.getByTitle('element')).toHaveAttribute('aria-disabled', 'true');

        setProps({ disabled: false });

        expect(screen.getByTitle('element')).toHaveAttribute('aria-disabled', 'false');
    });

    test('должен устанавливать tabIndex=-1 при изменении свойства disabled', () => {
        const { setProps } = render(<Tumbler disabled={false} checked={false} onChange={noop} tabIndex={0} />);

        expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');

        setProps({ disabled: true });

        expect(screen.getByRole('button')).toHaveAttribute('tabindex', '-1');

        setProps({ disabled: false });

        expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
    });

    test('должен вызывать обработчик onClick при нажатии на мышку', () => {
        const onClick = jest.fn();
        render(<Tumbler onClick={onClick} checked={false} onChange={noop} />);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('должен вызывать обработчик onKeyDown при нажатии на клавиатуру', () => {
        const onKeyDown = jest.fn();
        render(<Tumbler onKeyDown={onKeyDown} checked={false} onChange={noop} />);

        fireEvent.keyDown(screen.getByRole('button'));

        expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    test('должен устанавливать фокус в кнопку после нажатия на лейбл либо кнопку', () => {
        render(
            <Tumbler checked={false} onChange={noop} labelBefore={<span>right</span>} labelAfter={<span>left</span>} />,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toHaveFocus();

        // NOTE: Не используем click, так как react-testing-library
        // при клике на лейбл фокусирует инпут
        fireEvent.baseClick(screen.getByText('right'));

        expect(screen.getByRole('button')).toHaveFocus();

        fireEvent.baseClick(screen.getByText('left'));

        expect(screen.getByRole('button')).toHaveFocus();
    });
});
