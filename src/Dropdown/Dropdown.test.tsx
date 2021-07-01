import React from 'react';
import { mount, render, ReactWrapper } from 'enzyme';
import { Dropdown as DropdownDesktop } from './desktop';
import { Dropdown as DropdownTouchPhone } from './touch-phone';
import { Dropdown as DropdownTouchPad } from './touch-pad';
import { Popup } from '../Popup/Popup';
import { Button } from '../Button/desktop/bundle';

const platforms = [['desktop', DropdownDesktop], ['touch-phone', DropdownTouchPhone], ['touch-pad', DropdownTouchPad]];

describe.each<any>(platforms)('Dropdown@s', (_platform, Dropdown) => {
    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        expect(
            render(
                <Dropdown content={<div>Test</div>}>
                    <Button />
                </Dropdown>,
            ),
        ).toMatchSnapshot();
    });
});

describe.each<any>(platforms.slice(0, 1))('Dropdown@%s', (_platform, Dropdown) => {
    let wrapper: ReactWrapper | null;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
    });

    test('должен рендерить кнопку', () => {
        wrapper = mount(
            <Dropdown content={<div>Text</div>}>
                <Button />
            </Dropdown>,
        );
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    test('должен рендерить попап', () => {
        wrapper = mount(
            <Dropdown content={<div>Text</div>}>
                <Button />
            </Dropdown>,
        );
        expect(wrapper.find(Popup)).toHaveLength(1);
    });

    test('должен рендерить видимый попап', () => {
        wrapper = mount(
            <Dropdown visible content={<div>Text</div>}>
                <Button />
            </Dropdown>,
        );
        expect(wrapper.find(Popup).prop('visible')).toBeTruthy();
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по клику', () => {
        const visibleChangeHandler = jest.fn();
        wrapper = mount(
            <Dropdown onVisibleChange={visibleChangeHandler} trigger="click" content={<div>Text</div>}>
                <Button />
            </Dropdown>,
        );

        wrapper.find(Button).simulate('click');
        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        wrapper.find(Button).simulate('click');
        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);
        expect(visibleChangeHandler).toHaveBeenNthCalledWith(1, true);
        expect(visibleChangeHandler).toHaveBeenNthCalledWith(2, false);

        expect(visibleChangeHandler).toHaveBeenNthCalledWith(1, true);
        expect(visibleChangeHandler).toHaveBeenNthCalledWith(2, false);
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по наведению', () => {
        const visibleChangeHandler = jest.fn();
        jest.useFakeTimers();

        wrapper = mount(
            <Dropdown onVisibleChange={visibleChangeHandler} content={<div>Text</div>}>
                <Button />
            </Dropdown>,
        );

        wrapper.find(Button).simulate('mouseenter');
        jest.runOnlyPendingTimers();
        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        wrapper.find(Button).simulate('mouseleave');
        jest.runOnlyPendingTimers();
        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);

        expect(visibleChangeHandler).toHaveBeenNthCalledWith(1, true);
        expect(visibleChangeHandler).toHaveBeenNthCalledWith(2, false);
    });

    test('должен вызывать `onVisibleChange` c правильными аргументами по фокусу', () => {
        const visibleChangeHandler = jest.fn();
        jest.useFakeTimers();

        wrapper = mount(
            <Dropdown onVisibleChange={visibleChangeHandler} trigger="focus" content={<div>Text</div>}>
                <Button view="default" size="s">
                    Dropdown
                </Button>
            </Dropdown>,
        );

        wrapper.find(Button).simulate('focus');
        jest.runOnlyPendingTimers();
        expect(visibleChangeHandler).toHaveBeenCalledTimes(1);
        wrapper.find(Button).simulate('blur');
        jest.runOnlyPendingTimers();
        expect(visibleChangeHandler).toHaveBeenCalledTimes(2);

        expect(visibleChangeHandler).toHaveBeenNthCalledWith(1, true);
        expect(visibleChangeHandler).toHaveBeenNthCalledWith(2, false);
    });

    test('должен вызывать колбэк переданный в кнопке', () => {
        const handler = jest.fn();
        wrapper = mount(
            <Dropdown trigger={['click', 'hover']} content={<div>Text</div>}>
                <Button onMouseLeave={handler} onClick={handler} view="default" size="s">
                    Dropdown
                </Button>
            </Dropdown>,
        );

        wrapper.find(Button).simulate('click');
        expect(handler).toHaveBeenCalledTimes(1);
        wrapper.find(Button).simulate('mouseleave');
        expect(handler).toHaveBeenCalledTimes(2);
    });
});
