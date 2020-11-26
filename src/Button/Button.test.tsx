import React, { createRef, ComponentType, FC } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { jestEnvironmentSetup, getRoot } from '../internal/utils/jestEnvironmentSetup';

import { Button as ButtonCommon } from './Button';
import { Button as ButtonDesktop } from './Button@desktop';
import { Button as ButtonTouchPad } from './Button@touch-pad';
import { Button as ButtonTouchPhone } from './Button@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';
import { ContainerElement } from './Button';
import { Icon } from '../Icon/Icon';

import { Keys } from '../lib/keyboard';

const platforms = [['desktop', ButtonDesktop], ['touch-pad', ButtonTouchPad], ['touch-phone', ButtonTouchPhone]];

type ButtonProps = ExtractProps<typeof ButtonDesktop>;

describe.each<any>(platforms)('Button@%s', (_platform, Button: ComponentType<ButtonProps>) => {
    jestEnvironmentSetup();

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Button id="serverTemplateId" className="mix" />)).toMatchSnapshot();
        });
    });
    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Button
                        id="clientTemplateId"
                        className="mix"
                        iconLeft={(className) => <Icon className={className + ' iconLeft'} />}
                        iconRight={(className) => <Icon className={className + ' iconRight'} />}
                    />,
                ),
            ).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Button innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM элемент', async () => {
            const controlRef = createRef<ContainerElement>();
            mount(<Button controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен быть установлен корректный displayName', () => {
            expect(ButtonCommon.displayName).toBe('Button2');
        });

        test('должен рендерить контент в addonAfter и addonBefore', () => {
            const wrapper = mount(
                <Button addonAfter={<i className="after" />} addonBefore={<i className="before" />} />,
            );
            expect(wrapper.find('.after')).toHaveLength(1);
            expect(wrapper.find('.before')).toHaveLength(1);
        });

        test('при checked=true должен быть установлен класс Button2_checked и prop aria-pressed', () => {
            const wrapper = mount(<Button checked autoComplete="off" />);
            expect(wrapper.find('button').prop('aria-pressed')).toBe(true);
            expect(wrapper.find('button').hasClass('Button2_checked'));
        });

        test('autocomplete прокидывается в корневой элемент компонента', () => {
            const wrapper = mount(<Button autoComplete="on" />);
            expect(wrapper.find('button').prop('autoComplete')).toBe('on');
        });

        test('тег компонента зависит от prop tag', () => {
            const wrapper = mount(<Button as="span" />);
            expect(wrapper.find('span')).toHaveLength(1);
        });

        test('children рендерится в DOM', () => {
            const wrapper = mount(<Button>Привет</Button>);
            expect(wrapper.text()).toBe('Привет');
        });

        test('иконка рендерится', () => {
            const wrapper = mount(<Button icon={(className) => <Icon className={className + ' testClass'} />} />);
            expect(wrapper.find('span').hasClass('testClass'));
        });

        test('при совместной установке icon и iconLeft рендерится только iconLeft', () => {
            const wrapper = mount(
                <Button
                    iconLeft={() => <Icon className="testIconLeft" />}
                    icon={() => <Icon className="testIcon" />}
                />,
            );
            expect(wrapper.find('span')).toHaveLength(1);
            expect(wrapper.find('span').hasClass('testIconLeft'));
        });

        test('при установке progress=true создается класс Button2_progress и значение aria-busy устанавливается в true', () => {
            const wrapper = mount(<Button progress />);
            expect(wrapper.find('button').hasClass('Button_progress'));
            expect(wrapper.find('button').prop('aria-busy')).toBe(true);
            expect(wrapper.find('button').prop('disabled')).toBe(true);
        });

        test('при установке prop disapled в DOM-элементе должны быть props aria-disabled=true и disabled', () => {
            const wrapper = mount(<Button disabled />);
            expect(wrapper.find('button').prop('aria-disabled')).toBe(true);
            expect(wrapper.find('button').prop('disabled')).toBe(true);
        });

        test('className пробрасывается в корневой элемент', () => {
            const wrapper = mount(<Button className="testClassName" />);
            expect(wrapper.find('button').hasClass('testClassName'));
        });

        test('при совместной установке checked, progress, className стили корректны', () => {
            const wrapper = mount(<Button checked progress className="testClassName" onClick={() => null} />);
            expect(wrapper.find('button').hasClass('testClassName')).toBe(true);
            expect(wrapper.find('button').hasClass('Button2_checked')).toBe(true);
            expect(wrapper.find('button').hasClass('Button2_progress')).toBe(true);
        });

        test('при совместной установке props innerRef и controlRef они должны оба указывать на root DOM-элемент', async () => {
            const controlRef = createRef<ContainerElement>();
            const innerRef = createRef<ContainerElement>();
            mount(<Button controlRef={controlRef} innerRef={innerRef} />);
            await delay(100);
            expect(controlRef.current).toBe(innerRef.current);
            expect(controlRef.current).not.toBe(null);
        });

        test('при нажатии на кнопку вызывается функция, переданная в prop onClick', () => {
            const onClickFn = jest.fn();
            const wrapper = mount(<Button onClick={onClickFn} />);
            wrapper.simulate('click');
            wrapper.simulate('click');
            expect(onClickFn.mock.calls.length).toBe(2);
        });

        test('при нажатии на кнопку вызывается функция, переданная в prop onMouseDown', () => {
            const onMouseDownFn = jest.fn();
            const wrapper = mount(<Button onMouseDown={onMouseDownFn} />);
            wrapper.simulate('mousedown', { keycode: Keys.DELETE });
            wrapper.simulate('mousedown', { keycode: Keys.BACKSPACE });
            expect(onMouseDownFn.mock.calls.length).toBe(2);
            expect(onMouseDownFn.mock.calls[0].keycode === Keys.DELETE);
            expect(onMouseDownFn.mock.calls[1].keycode === Keys.BACKSPACE);
        });

        test('при нажатии на кнопку вызывается функция, переданная в prop onKeyUp', () => {
            const onKeyUpFn = jest.fn();
            const wrapper = mount(<Button onKeyUp={onKeyUpFn} />);
            wrapper.simulate('keyup', { keycode: Keys.DELETE });
            wrapper.simulate('keyup', { keycode: Keys.BACKSPACE });
            expect(onKeyUpFn.mock.calls.length).toBe(2);
            expect(onKeyUpFn.mock.calls[0].keycode === Keys.DELETE);
            expect(onKeyUpFn.mock.calls[1].keycode === Keys.BACKSPACE);
        });

        test('при нажатии на кнопку вызывается функция, переданная в prop onKeyDown', () => {
            const onKeyDownFn = jest.fn();
            const wrapper = mount(<Button onKeyDown={onKeyDownFn} />);
            wrapper.simulate('keydown', { keycode: Keys.DELETE });
            wrapper.simulate('keydown', { keycode: Keys.BACKSPACE });
            expect(onKeyDownFn.mock.calls.length).toBe(2);
            expect(onKeyDownFn.mock.calls[0].keycode === Keys.DELETE);
            expect(onKeyDownFn.mock.calls[1].keycode === Keys.BACKSPACE);
        });

        test('при нажатии на кнопку, которая передана в pressKeys должен добавляться класс Button2_pressed', () => {
            const wrapper = mount(<Button pressKeys={[Keys.ESC, Keys.TAB]} />);
            wrapper.simulate('keydown', { keycode: Keys.ESC });
            expect(wrapper.find('button').hasClass('Button2_pressed')).toBe(true);
            wrapper.simulate('keyup', { keycode: Keys.TAB });
            expect(wrapper.find('button').hasClass('Button2_pressed')).toBe(false);
        });

        test('при нажатии на кнопку, которая передана в preventKeys должно предотвращаться default поведение', () => {
            const testPreventDefault = jest.fn();
            const wrapper = mount(<Button prvntKeys={[Keys.ESC, Keys.TAB]} />);
            wrapper.simulate('keydown', { keycode: Keys.ESC, preventDefault: testPreventDefault });
            wrapper.simulate('keyup', { keycode: Keys.TAB, preventDefault: testPreventDefault });
            expect(testPreventDefault.mock.calls.length).toBe(2);
        });

        test('должен устанавливать фокус в интерактивный элемент с различными компонентами', async () => {
            const Link: FC<any> = ({ innerRef, ...props }) => <a href={'a'} ref={innerRef} {...props} />;
            const buttonRef = createRef<any>();

            const wrapper = mount(<Button innerRef={buttonRef} />, { attachTo: getRoot() });
            await delay(100);
            wrapper.simulate('click');
            expect(document.activeElement).toBe(buttonRef.current);

            wrapper.setProps({ as: Link });
            await delay(100);
            wrapper.simulate('click');
            expect(document.activeElement).toBe(buttonRef.current);
        });

        test('при потере фокуса кнопка должна терять класс Button2_pressed', () => {
            const wrapper = mount(<Button />);
            wrapper.simulate('keydown', { keycode: Keys.SPACE });
            expect(wrapper.find('button').hasClass('Button2_pressed')).toBe(true);
            wrapper.simulate('blur');
            expect(wrapper.find('button').hasClass('Button2_pressed')).toBe(false);
        });

        test('при при потере фокуса вызывается функция, переданная в prop onBlur', () => {
            const onBlurFn = jest.fn();
            const wrapper = mount(<Button onBlur={onBlurFn} />);
            wrapper.simulate('blur');
            expect(onBlurFn.mock.calls.length).toBe(1);
        });
    });
});
