import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';
import { withRegistry, Registry } from '@bem-react/di';

import { cnAttach, Attach as AttachCommon } from './Attach';
import { Attach as AttachDesktop } from './Attach@desktop';
import { Attach as AttachTouchPad } from './Attach@touch-pad';
import { Attach as AttachTouchPhone } from './Attach@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';

import { Button as ButtonDesktop } from '../Button/Button@desktop';
import { Button as ButtonTouchPad } from '../Button/Button@touch-pad';
import { Button as ButtonTouchPhone } from '../Button/Button@touch-phone';

const attachDesktopRegistry = new Registry({ id: cnAttach() });
const attachTouchPadRegistry = new Registry({ id: cnAttach() });
const attachTouchPhoneRegistry = new Registry({ id: cnAttach() });

attachDesktopRegistry.set('Button', ButtonDesktop);
attachTouchPadRegistry.set('Button', ButtonTouchPad);
attachTouchPhoneRegistry.set('Button', ButtonTouchPhone);

const platforms = [
    ['desktop', withRegistry(attachDesktopRegistry)(AttachDesktop)],
    ['touch-pad', withRegistry(attachTouchPadRegistry)(AttachTouchPad)],
    ['touch-phone', withRegistry(attachTouchPhoneRegistry)(AttachTouchPhone)],
];

const EnhancedAttach = withRegistry(attachDesktopRegistry)(AttachDesktop);
type AttachProps = ExtractProps<typeof EnhancedAttach>;

describe.each<any>(platforms)('Attach@%s', (_platform, Attach: ComponentType<AttachProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Attach hasHolder holderText="файл не выбран" id="100500" className="mix">
                        Выбрать файл
                    </Attach>,
                ),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Attach hasHolder holderText="файл не выбран" id="100500" className="mix">
                        Выбрать файл
                    </Attach>,
                ),
            ).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(AttachCommon.displayName).toBe('Attach');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Attach innerRef={innerRef}>Выбрать файл</Attach>);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM инпут', async () => {
            const controlRef = createRef<HTMLInputElement>();
            mount(<Attach controlRef={controlRef}>Выбрать файл</Attach>);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен устанавливать текст в элементах Button-Text и Attach-Text', () => {
            const wrapper = mount(
                <Attach hasHolder holderText="Holder text">
                    Button text
                </Attach>,
            );
            expect(wrapper.find('.Button2-Text').text()).toBe('Button text');
            expect(wrapper.find('.Attach-Text').text()).toBe('Holder text');
        });

        test('должен устанавливать ширину текста в элементе Attach-Text', () => {
            const wrapper = mount(
                <Attach hasHolder holderText="файл не выбран" holderTextWidth={40}>
                    Выбрать файл
                </Attach>,
            );
            wrapper.find('input').simulate('change', { target: { value: 'file.png' } });
            expect(wrapper.find('.Attach-Text').prop('style')).toMatchObject({ width: '40px' });
        });

        test('должен вызывать событие onChange с event при выборе файла', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Attach onChange={onChange}>Выбрать файл</Attach>);
            wrapper.find('input').simulate('change', { target: { value: 'file.png' } });
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('file.png');
        });

        test('должен вызывать событие onClearClick & onChange при клике в reset', () => {
            const onChange = jest.fn();
            const onClearClick = jest.fn();
            const wrapper = mount(
                <Attach hasHolder holderText="файл не выбран" onClearClick={onClearClick}>
                    Выбрать файл
                </Attach>,
            );
            wrapper.find('input').simulate('change', { target: { value: 'file.png' } });
            wrapper.setProps({ onChange });
            wrapper.find('.Attach-Reset').simulate('click');
            expect(onClearClick).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('');
        });

        test('должен устанавливать свойство accept', () => {
            const acceptType = 'image/*';
            const wrapper = mount(<Attach accept={acceptType}>Выбрать файл</Attach>);
            expect(wrapper.find('input').props().accept).toBe(acceptType);
        });
    });
});
