import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Radiobox as RadioboxCommon } from './Radiobox';
import { Radiobox as RadioboxDesktop } from './Radiobox@desktop';
import { Radiobox as RadioboxTouchPad } from './Radiobox@touch-pad';
import { Radiobox as RadioboxTouchPhone } from './Radiobox@touch-phone';
import { serverEnvironmentSetup, delay } from '../internal/utils';

// prettier-ignore
const platforms = [
    ['desktop', RadioboxDesktop],
    ['touch-pad', RadioboxTouchPad],
    ['touch-phone', RadioboxTouchPhone],
];

type RadioboxProps = ExtractProps<typeof RadioboxDesktop>;

// prettier-ignore
const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
];

describe.each<any>(platforms)('Radiobox@%s', (_platform, Radiobox: ComponentType<RadioboxProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(<Radiobox onChange={() => null} value="a" options={options} className="mix" name="radio" />),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(<Radiobox onChange={() => null} value="a" options={options} className="mix" name="radio" />),
            ).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(RadioboxCommon.displayName).toBe('Radiobox');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Radiobox onChange={() => null} value="" options={[]} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен вызывать событие onChange с event при клике на контрол', async () => {
            const onChange = jest.fn();

            const wrapper = mount(<Radiobox value="a" options={options} onChange={onChange} />);
            wrapper
                .find('input')
                .at(1)
                .simulate('change', { target: { checked: true } });
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.checked).toBe(true);
        });

        test('должен устанавливать checked/aria-checked при обновлении свойства value', () => {
            const wrapper = mount(<Radiobox onChange={() => null} options={options} value="a" />);
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('checked'),
            ).toBe(true);
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('aria-checked'),
            ).toBe(true);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('checked'),
            ).toBe(false);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('aria-checked'),
            ).toBe(false);
            wrapper.setProps({ value: 'b' });
            wrapper.update();
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('checked'),
            ).toBe(false);
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('aria-checked'),
            ).toBe(false);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('checked'),
            ).toBe(true);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('aria-checked'),
            ).toBe(true);
        });

        test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
            const wrapper = mount(<Radiobox onChange={() => null} value="a" options={options} />);
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('disabled'),
            ).toBe(undefined);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('disabled'),
            ).toBe(undefined);
            wrapper.setProps({ disabled: true });
            wrapper.update();
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('disabled'),
            ).toBe(true);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('disabled'),
            ).toBe(true);
        });

        test('должен позволять блокировать и разблокировать отдельные опции через props', () => {
            const wrapper = mount(<Radiobox onChange={() => null} value="a" options={options} />);
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('disabled'),
            ).toBe(undefined);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('disabled'),
            ).toBe(undefined);
            const optionsWithBDisabled = [
                { label: 'Option A', value: 'a' },
                { label: 'Option B', value: 'b', disabled: true },
            ];
            wrapper.setProps({ options: optionsWithBDisabled });
            wrapper.update();
            expect(
                wrapper
                    .find('input')
                    .at(0)
                    .prop('disabled'),
            ).toBe(undefined);
            expect(
                wrapper
                    .find('input')
                    .at(1)
                    .prop('disabled'),
            ).toBe(true);
        });
    });
});
