import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Checkbox as CheckboxCommon } from './Checkbox';
import { Checkbox as CheckboxDesktop } from './Checkbox@desktop';
import { Checkbox as CheckboxTouchPad } from './Checkbox@touch-pad';
import { Checkbox as CheckboxTouchPhone } from './Checkbox@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';

const platforms = [['desktop', CheckboxDesktop], ['touch-pad', CheckboxTouchPad], ['touch-phone', CheckboxTouchPhone]];

type CheckboxProps = ExtractProps<typeof CheckboxDesktop>;

describe.each<any>(platforms)('Checkbox@%s', (_platform, Checkbox: ComponentType<CheckboxProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Checkbox id="serverTemplateId" className="mix" view="default" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Checkbox id="clientTemplateId" className="mix" view="default" />)).toMatchSnapshot();
        });

        test('должен проставить в label произвольный tsx (snapshot)', () => {
            expect(render(<Checkbox label={<div className="custom">content</div>} view="default" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            //Так написано, потому что компонент сразу поставляется в обертке.
            expect(CheckboxCommon.displayName).toBe('WithControl(Checkbox)');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Checkbox innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM элемент', async () => {
            const controlRef = createRef<HTMLInputElement>();
            mount(<Checkbox controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен вызывать событие onChange', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Checkbox onChange={onChange} />);
            wrapper.find('.Checkbox-Control').simulate('change');
            expect(onChange).toHaveBeenCalledTimes(1);
        });

        test('должен рендерить label для checkbox', () => {
            const wrapper = mount(<Checkbox label="label" />);
            expect(wrapper.find('.Checkbox-Label')).toHaveLength(1);
        });

        test('должен устанавливать aria-checked/checked при обновлении свойства checked/indeterminate', () => {
            const wrapper = mount(<Checkbox checked={false} onChange={() => null} />);

            wrapper.setProps({ checked: true });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe(true);
            expect(wrapper.find('.Checkbox-Control').prop('checked')).toBe(true);

            wrapper.setProps({ checked: false });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe(false);
            expect(wrapper.find('.Checkbox-Control').prop('checked')).toBe(false);

            wrapper.setProps({ indeterminate: true });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe('mixed');
            expect(wrapper.find('.Checkbox-Control').prop('checked')).toBe(true);

            wrapper.setProps({ indeterminate: false });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe(false);
            expect(wrapper.find('.Checkbox-Control').prop('checked')).toBe(false);
        });

        test('должен устанавливать свойство indeterminate у control при обновлении свойства indeterminate', async () => {
            const controlRef = createRef<HTMLInputElement>();
            const wrapper = mount(<Checkbox checked={false} controlRef={controlRef} onChange={() => null} />);
            await delay(100);

            wrapper.setProps({ indeterminate: true });
            expect(controlRef.current).toHaveProperty('indeterminate', true);
            wrapper.setProps({ indeterminate: false });
            expect(controlRef.current).toHaveProperty('indeterminate', false);
        });

        test('должен возвращать aria-checked/checked после обновления indeterminate если свойство checked установлено', () => {
            const wrapper = mount(<Checkbox checked={false} onChange={() => null} />);

            wrapper.setProps({ checked: true });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe(true);

            wrapper.setProps({ indeterminate: true });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe('mixed');

            wrapper.setProps({ indeterminate: false });
            expect(wrapper.find('.Checkbox-Control').prop('aria-checked')).toBe(true);
        });
    });
});
