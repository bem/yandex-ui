import React from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Dropdown as DropdownDesktop } from '../desktop';
import { Dropdown as DropdownTouchPhone } from '../touch-phone';
import { Dropdown as DropdownTouchPad } from '../touch-pad';

const platforms = [
    ['desktop', DropdownDesktop],
    ['touch-phone', DropdownTouchPhone],
    ['touch-pad', DropdownTouchPad],
] as const;

describe.each(platforms)('Dropdown@%s', (_platform, Dropdown) => {
    const render = createClientRender();

    afterEach(() => {
        jest.useRealTimers();
    });

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Dropdown content={<div>Test</div>}>
                <button />
            </Dropdown>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить содержимое', () => {
        render(
            <Dropdown content={<div>Text</div>}>
                <button />
            </Dropdown>,
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('не должен рендерить невидимый попап', () => {
        render(
            <Dropdown content={<div>Text</div>} data-testid="popup">
                <button />
            </Dropdown>,
        );

        expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
    });

    test('должен рендерить видимый попап', () => {
        render(
            <Dropdown visible content={<div>Text</div>} data-testid="popup">
                <button />
            </Dropdown>,
        );

        expect(screen.getByTestId('popup')).toBeInTheDocument();
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по клику', () => {
        const visibleChangeHandler = jest.fn();
        render(
            <Dropdown onVisibleChange={visibleChangeHandler} trigger="click" content={<div>Text</div>}>
                <button />
            </Dropdown>,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        expect(visibleChangeHandler).toHaveBeenCalledWith(true);

        fireEvent.click(screen.getByRole('button'));

        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);
        expect(visibleChangeHandler).toHaveBeenCalledWith(false);
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по наведению', () => {
        const visibleChangeHandler = jest.fn();
        jest.useFakeTimers();

        render(
            <Dropdown onVisibleChange={visibleChangeHandler} content={<div>Text</div>}>
                <button />
            </Dropdown>,
        );

        fireEvent.mouseEnter(screen.getByRole('button'));
        jest.runOnlyPendingTimers();

        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        expect(visibleChangeHandler).toHaveBeenCalledWith(true);

        fireEvent.mouseLeave(screen.getByRole('button'));
        jest.runOnlyPendingTimers();

        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);
        expect(visibleChangeHandler).toHaveBeenCalledWith(false);
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по фокусу', () => {
        const visibleChangeHandler = jest.fn();
        jest.useFakeTimers();

        render(
            <Dropdown onVisibleChange={visibleChangeHandler} trigger="focus" content={<div>Text</div>}>
                <button>Dropdown</button>
            </Dropdown>,
        );

        fireEvent.focus(screen.getByRole('button'));
        jest.runOnlyPendingTimers();

        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        expect(visibleChangeHandler).toHaveBeenCalledWith(true);

        fireEvent.blur(screen.getByRole('button'));
        jest.runOnlyPendingTimers();

        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);
        expect(visibleChangeHandler).toHaveBeenCalledWith(false);
    });

    test('должен вызывать колбэк переданный в кнопке', () => {
        const handler = jest.fn();
        render(
            <Dropdown trigger={['click', 'hover']} content={<div>Text</div>}>
                <button onMouseLeave={handler} onClick={handler}>
                    Dropdown
                </button>
            </Dropdown>,
        );

        fireEvent.click(screen.getByRole('button'));
        expect(handler).toHaveBeenCalledTimes(1);

        fireEvent.mouseLeave(screen.getByRole('button'));
        expect(handler).toHaveBeenCalledTimes(2);
    });
});
