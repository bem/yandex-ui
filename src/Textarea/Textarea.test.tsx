import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Textarea as TextareaCommon } from './Textarea';
import { Textarea as TextareaDesktop } from './Textarea@desktop';
import { Textarea as TextareaTouchPad } from './Textarea@touch-pad';
import { Textarea as TextareaTouchPhone } from './Textarea@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';

const platforms = [['desktop', TextareaDesktop], ['touch-pad', TextareaTouchPad], ['touch-phone', TextareaTouchPhone]];

type TextareaProps = ExtractProps<typeof TextareaDesktop>;

describe.each<any>(platforms)('Textarea@%s', (_platform, Textarea: ComponentType<TextareaProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textarea className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textarea className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            //Так написано, потому что компонент сразу поставляется в обертке.
            expect(TextareaCommon.displayName).toBe('WithControl(Textarea)');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Textarea innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM инпут', async () => {
            const controlRef = createRef<HTMLTextAreaElement>();
            mount(<Textarea controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен вызывать событие onChange с event при вводе текста в поле', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Textarea onChange={onChange} />);
            wrapper.find('textarea').simulate('change', { target: { value: 'next-value' } });
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('next-value');
        });

        test('должен обновлять value в textarea при обновлении через props', () => {
            const wrapper = mount(<Textarea value="" onChange={() => null} />);
            wrapper.setProps({ value: 'next' });
            expect(wrapper.find('textarea').prop('value')).toBe('next');
            wrapper.setProps({ value: 'next-value' });
            expect(wrapper.find('textarea').prop('value')).toBe('next-value');
        });

        test('должен рендерить контент в addonAfter и addonBefore', () => {
            const wrapper = mount(
                <Textarea addonAfter={<i className="after" />} addonBefore={<i className="before" />} />,
            );
            expect(wrapper.find('.after')).toHaveLength(1);
            expect(wrapper.find('.before')).toHaveLength(1);
        });

        test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
            const wrapper = mount(<Textarea />);
            wrapper.setProps({ disabled: true });
            expect(wrapper.find('textarea').prop('disabled')).toBe(true);
            wrapper.setProps({ disabled: false });
            expect(wrapper.find('textarea').prop('disabled')).toBe(false);
        });

        test('должен рендерить/удалять элемент Hint при наличии свойства', () => {
            const wrapper = mount(<Textarea hint="error" />);
            expect(wrapper.find('.Textarea-Hint')).toHaveLength(1);
            wrapper.setProps({ hint: '' });
            wrapper.find('.Textarea-Hint').simulate('animationend');
            expect(wrapper.find('.Textarea-Hint')).toHaveLength(0);
        });

        test('renderControl рисует div и туда прорастают свойства', () => {
            const wrapper = mount(
                <Textarea renderControl={(props:any) => <div className="Textarea-Control" {...props} />} name="textareaName" />,
            );

            expect(wrapper.find('.Textarea-Control').getDOMNode().tagName).toBe('DIV');
            expect(wrapper.find('.Textarea-Control').prop('name')).toBe('textareaName');
        });
    });
});
