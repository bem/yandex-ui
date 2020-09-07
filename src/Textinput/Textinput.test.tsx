import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Textinput as TextinputCommon } from './Textinput';
import { Textinput as TextinputDesktop } from './Textinput@desktop';
import { Textinput as TextinputTouchPad } from './Textinput@touch-pad';
import { Textinput as TextinputTouchPhone } from './Textinput@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';

const platforms = [
    ['desktop', TextinputDesktop],
    ['touch-pad', TextinputTouchPad],
    ['touch-phone', TextinputTouchPhone],
];

type TextinputProps = ExtractProps<typeof TextinputDesktop>;

describe.each<any>(platforms)('Textinput@%s', (_platform, Textinput: ComponentType<TextinputProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textinput className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textinput className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            //Так написано, потому что компонент сразу поставляется в обертке.
            expect(TextinputCommon.displayName).toBe('WithControl(Textinput)');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Textinput innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM инпут', async () => {
            const controlRef = createRef<HTMLInputElement>();
            mount(<Textinput controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен вызывать событие onChange с event при вводе текста в поле', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Textinput onChange={onChange} />);
            wrapper.find('input').simulate('change', { target: { value: 'next-value' } });
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('next-value');
        });

        test('должен обновлять value в input при обновлении через props', () => {
            const wrapper = mount(<Textinput value="" onChange={() => null} />);
            wrapper.setProps({ value: 'next' });
            expect(wrapper.find('input').prop('value')).toBe('next');
            wrapper.setProps({ value: 'next-value' });
            expect(wrapper.find('input').prop('value')).toBe('next-value');
        });

        test('должен рендерить контент в addonAfter и addonBefore', () => {
            const wrapper = mount(
                <Textinput addonAfter={<i className="after" />} addonBefore={<i className="before" />} />,
            );
            expect(wrapper.find('.after')).toHaveLength(1);
            expect(wrapper.find('.before')).toHaveLength(1);
        });

        test('должен добавлять iconLeft и iconRight', () => {
            const wrapper = mount(<Textinput iconLeft={<i className="left" />} iconRight={<i className="right" />} />);
            expect(wrapper.find('.left')).toHaveLength(1);
            expect(wrapper.find('.right')).toHaveLength(1);
        });

        test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
            const wrapper = mount(<Textinput />);
            wrapper.setProps({ disabled: true });
            expect(wrapper.find('input').prop('disabled')).toBe(true);
            wrapper.setProps({ disabled: false });
            expect(wrapper.find('input').prop('disabled')).toBe(false);
        });

        test('должен рендерить/удалять элеменет Hint при наличии свойства', () => {
            const wrapper = mount(<Textinput hint="error" />);
            expect(wrapper.find('.Textinput-Hint')).toHaveLength(1);
            wrapper.setProps({ hint: '' });
            wrapper.find('.Textinput-Hint').simulate('animationend');
            expect(wrapper.find('.Textinput-Hint')).toHaveLength(0);
        });
    });
});
