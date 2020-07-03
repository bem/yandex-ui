import React, { FC } from 'react';
import { mount } from 'enzyme';

import { IWithControlProps, withControl as withControlCommon } from './withControl';
import { IWithControlProps as IWithControlPropsDesktop, withControl as withControlDesktop } from './withControl@desktop';

interface IComponentProps extends IWithControlProps, IWithControlPropsDesktop {
    className?: string;
}

const Component: FC<IComponentProps> = ({ focused, pressed, hovered, ...props }) => (
    <div
        {...props}
        data-hovered={hovered}
        data-focused={focused}
        data-pressed={pressed}
    />
);

const ComponentWithControl = withControlDesktop(withControlCommon(Component));

describe('ComponentWithControl', () => {
    describe('client environment', () => {
        test('должен быть установлен корректный displayName', () => {
            expect(ComponentWithControl.displayName).toBe('WithControl@desktop(WithControl(Component))');
        });

        test('должен вызывать событие onMouseEnter при наведении', () => {
            const onMouseEnter = jest.fn();

            const wrapper = mount(<ComponentWithControl onMouseEnter={onMouseEnter} />);
            wrapper.simulate('mouseenter');
            expect(onMouseEnter).toHaveBeenCalledTimes(1);
        });

        test('должен вызывать событие onMouseLeave при снятии наведения', () => {
            const onMouseLeave = jest.fn();

            const wrapper = mount(<ComponentWithControl onMouseLeave={onMouseLeave} />);
            wrapper.simulate('mouseleave');
            expect(onMouseLeave).toHaveBeenCalledTimes(1);
        });

        test('должен установить focused при фокусе', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .find('div')
                    .prop('data-focused'),
            ).toBe(undefined);
            expect(
                wrapper
                    .simulate('focus')
                    .update()
                    .find('div')
                    .prop('data-focused'),
            ).toBe(true);
        });

        test('должен убрать focused при потере фокуса', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .simulate('focus')
                    .update()
                    .find('div')
                    .prop('data-focused'),
            ).toBe(true);
            expect(
                wrapper
                    .simulate('blur')
                    .update()
                    .find('div')
                    .prop('data-focused'),
            ).toBe(false);
        });

        test('должен установить pressed при нажатии клавиши мыши', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .find('div')
                    .prop('data-pressed'),
            ).toBe(undefined);
            expect(
                wrapper
                    .simulate('mousedown')
                    .update()
                    .find('div')
                    .prop('data-pressed'),
            ).toBe(true);
        });

        test('должен убрать pressed при отпускании клавиши мыши', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .simulate('mousedown')
                    .update()
                    .find('div')
                    .prop('data-pressed'),
            ).toBe(true);
            expect(
                wrapper
                    .simulate('mouseup')
                    .update()
                    .find('div')
                    .prop('data-pressed'),
            ).toBe(false);
        });

        test('должен установить hovered при наведении', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .find('div')
                    .prop('data-hovered'),
            ).toBe(undefined);
            expect(
                wrapper
                    .simulate('mouseenter')
                    .update()
                    .find('div')
                    .prop('data-hovered'),
            ).toBe(true);
        });

        test('должен убрать hovered при снятии наведения', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .simulate('mouseenter')
                    .update()
                    .find('div')
                    .prop('data-hovered'),
            ).toBe(true);
            expect(
                wrapper
                    .simulate('mouseleave')
                    .update()
                    .find('div')
                    .prop('data-hovered'),
            ).toBe(false);
        });

        test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
            const wrapper = mount(<ComponentWithControl />);
            expect(
                wrapper
                    .find('div')
                    .prop('disabled'),
            ).toBe(undefined);
            wrapper.setProps({ disabled: true });
            expect(
                wrapper
                    .find('div')
                    .prop('disabled'),
            ).toBe(true);
            wrapper.setProps({ disabled: false });
            expect(
                wrapper
                    .find('div')
                    .prop('disabled'),
            ).toBe(false);
        });

        test('не должен вызывать события когда disabled', () => {
            const onBlur = jest.fn();
            const onFocus = jest.fn();
            const onMouseDown = jest.fn();
            const onMouseUp = jest.fn();
            const onMouseEnter = jest.fn();
            const onMouseLeave = jest.fn();
            const wrapper = mount(
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
            wrapper
                .simulate('blur')
                .simulate('focus')
                .simulate('mousedown')
                .simulate('mouseup')
                .simulate('mouseenter')
                .simulate('mouseleave');

            expect(onBlur).not.toHaveBeenCalled();
            expect(onFocus).not.toHaveBeenCalled();
            expect(onMouseDown).not.toHaveBeenCalled();
            expect(onMouseUp).not.toHaveBeenCalled();
            expect(onMouseEnter).not.toHaveBeenCalled();
            expect(onMouseLeave).not.toHaveBeenCalled();
        });

        test('должен вызывать события после снятия disabled', () => {
            const onBlur = jest.fn();
            const onFocus = jest.fn();
            const onMouseDown = jest.fn();
            const onMouseUp = jest.fn();
            const onMouseEnter = jest.fn();
            const onMouseLeave = jest.fn();
            const wrapper = mount(
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
            wrapper.setProps({ disabled: false });
            wrapper
                .simulate('blur')
                .simulate('focus')
                .simulate('mousedown')
                .simulate('mouseup')
                .simulate('mouseenter')
                .simulate('mouseleave');

            expect(onBlur).toHaveBeenCalledTimes(1);
            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onMouseDown).toHaveBeenCalledTimes(1);
            expect(onMouseUp).toHaveBeenCalledTimes(1);
            expect(onMouseEnter).toHaveBeenCalledTimes(1);
            expect(onMouseLeave).toHaveBeenCalledTimes(1);
        });

        test('не должен устанавливать флаги если disabled', () => {
            const wrapper = mount(
                <ComponentWithControl disabled />,
            );
            wrapper
                .simulate('focus')
                .simulate('mousedown')
                .simulate('mouseenter')
                .update();

            expect(wrapper.find('div').props()).toMatchObject({
                'data-focused': undefined,
                'data-pressed': undefined,
                'data-hovered': undefined,
            });
        });

        test('должен устанавливать флаги после снятия disabled', () => {
            const wrapper = mount(
                <ComponentWithControl disabled />,
            );
            wrapper.setProps({ disabled: false });
            wrapper
                .simulate('focus')
                .simulate('mousedown')
                .simulate('mouseenter')
                .update();

            expect(wrapper.find('div').props()).toMatchObject({
                'data-focused': true,
                'data-pressed': true,
                'data-hovered': true,
            });
        });
    });
});
