import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { serverEnvironmentSetup, delay } from '../internal/utils';
import { RadioButton as RadioButtonCommon } from './RadioButton';
import { RadioButton as RadioButtonDesktop } from './RadioButton@desktop';
import { RadioButton as RadioButtonTouchPad } from './RadioButton@touch-pad';
import { RadioButton as RadioButtonTouchPhone } from './RadioButton@touch-phone';

const platforms = [
    ['desktop', RadioButtonDesktop],
    ['touch-pad', RadioButtonTouchPad],
    ['touch-phone', RadioButtonTouchPhone],
];

type RadioButtonProps = ExtractProps<typeof RadioButtonDesktop>;

const options = [{ value: 'a', children: 'Option A' }, { value: 'b', children: <>Option B</> }];

describe.each<any>(platforms)('RadioButton@%s', (_platform, RadioButton: ComponentType<RadioButtonProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(<RadioButton name="rb" value="b" options={options} className="mix" onChange={() => null} />),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(<RadioButton name="rb" value="b" options={options} className="mix" onChange={() => null} />),
            ).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(RadioButtonCommon.displayName).toBe('RadioButton');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();

            mount(<RadioButton value="" options={[]} innerRef={innerRef} onChange={() => null} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен вызывать событие onChange с event при клике на контрол', async () => {
            const onChange = jest.fn();
            const wrapper = mount(<RadioButton value="b" options={options} onChange={onChange} />);

            wrapper
                .find('input')
                .at(0)
                .simulate('change', { target: { checked: true } });

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.checked).toBe(true);
        });

        test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
            const wrapper = mount(<RadioButton value="b" options={options} onChange={() => null} />);

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
            const wrapper = mount(<RadioButton value="b" options={options} onChange={() => null} />);

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
                { value: 'a', label: 'Option A' },
                { value: 'b', label: 'Option B', disabled: true },
            ];

            wrapper.setProps({ options: optionsWithBDisabled });

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
