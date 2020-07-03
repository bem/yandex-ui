import React, { ComponentType, createRef } from 'react';
import { render, mount } from 'enzyme';

import { delay } from '../../../internal/utils/delay';
import { serverEnvironmentSetup } from '../../../internal/utils/serverEnvironmentSetup';
import { jestEnvironmentSetup, getRoot } from '../../../internal/utils/jestEnvironmentSetup';

import { TumblerProps } from '../Tumbler';
import { Tumbler as TumblerDesktop } from '../Tumbler@desktop';
import { Tumbler as TumblerTouchPad } from '../Tumbler@touch-pad';
import { Tumbler as TumblerTouchPhone } from '../Tumbler@touch-phone';

// prettier-ignore
const platforms = [
    ['desktop', TumblerDesktop],
    ['touch-pad', TumblerTouchPad],
    ['touch-phone', TumblerTouchPhone],
];

const noop = () => null;

describe.each<any>(platforms)('Tumbler@%s', (_platform, Tumbler: ComponentType<TumblerProps>) => {
    jestEnvironmentSetup();

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
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
                ),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
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
                ),
            ).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLSpanElement>();
            mount(<Tumbler checked={false} onChange={noop} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM элемент', async () => {
            const controlRef = createRef<HTMLInputElement>();
            mount(<Tumbler checked={false} onChange={noop} controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Tumbler.displayName).toBe('Tumbler');
        });

        test('должен устанавливать aria-pressed при изменении свойства checked', () => {
            const wrapper = mount(<Tumbler checked={false} onChange={noop} />);
            expect(wrapper.find('.Tumbler-Button').prop('aria-pressed')).toBe(false);
            wrapper.setProps({ checked: true });
            expect(wrapper.find('.Tumbler-Button').prop('aria-pressed')).toBe(true);
            wrapper.setProps({ checked: false });
            expect(wrapper.find('.Tumbler-Button').prop('aria-pressed')).toBe(false);
        });

        test('должен устанавливать aria-disabled при изменении свойства disabled', () => {
            const wrapper = mount(<Tumbler disabled={false} checked={false} onChange={noop} />);
            expect(wrapper.find('.Tumbler').prop('aria-disabled')).toBe(false);
            wrapper.setProps({ disabled: true });
            expect(wrapper.find('.Tumbler').prop('aria-disabled')).toBe(true);
            wrapper.setProps({ disabled: false });
            expect(wrapper.find('.Tumbler').prop('aria-disabled')).toBe(false);
        });

        test('должен устанавливать tabIndex=-1 при изменении свойства disabled', () => {
            const wrapper = mount(<Tumbler disabled={false} checked={false} onChange={noop} tabIndex={0} />);
            expect(wrapper.find('.Tumbler-Button').prop('tabIndex')).toBe(0);
            wrapper.setProps({ disabled: true });
            expect(wrapper.find('.Tumbler-Button').prop('tabIndex')).toBe(-1);
            wrapper.setProps({ disabled: false });
            expect(wrapper.find('.Tumbler-Button').prop('tabIndex')).toBe(0);
        });

        test('должен вызывать обработчик onClick при нажатии на мышку', () => {
            const onClick = jest.fn();
            const wrapper = mount(<Tumbler onClick={onClick} checked={false} onChange={noop} />);
            wrapper.find('.Tumbler-Button').simulate('click');
            expect(onClick.mock.calls.length).toBe(1);
        });

        test('должен вызывать обработчик onKeyDown при нажатии на клавиатуру', () => {
            const onKeyDown = jest.fn();
            const wrapper = mount(<Tumbler onKeyDown={onKeyDown} checked={false} onChange={noop} />);
            wrapper.find('.Tumbler-Button').simulate('keydown');
            expect(onKeyDown.mock.calls.length).toBe(1);
        });

        test('должен устанавливать фокус в кнопку после нажатия на лейбл либо кнопку', () => {
            const wrapper = mount(<Tumbler checked={false} onChange={noop} labelBefore="l" labelAfter="r" />, {
                attachTo: getRoot(),
            });
            const buttonRef = wrapper.find('.Tumbler-Button');
            const labelBeforeRef = wrapper.find('.Tumbler-Label').at(0);
            const labelAfterRef = wrapper.find('.Tumbler-Label').at(0);
            buttonRef.simulate('click');
            expect(document.activeElement).toBe(buttonRef.instance());
            labelBeforeRef.simulate('click');
            expect(document.activeElement).toBe(buttonRef.instance());
            labelAfterRef.simulate('click');
            expect(document.activeElement).toBe(buttonRef.instance());
        });
    });
});
