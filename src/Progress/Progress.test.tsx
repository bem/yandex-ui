import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Progress as ProgressCommon } from './Progress';
import { serverEnvironmentSetup, delay } from '../internal/utils';

const platforms = [['desktop', ProgressCommon], ['touch-pad', ProgressCommon], ['touch-phone', ProgressCommon]];

type ProgressProps = ExtractProps<typeof ProgressCommon>;

describe.each<any>(platforms)('Progress@%s', (_platform, Progress: ComponentType<ProgressProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Progress className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Progress className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Progress.displayName).toBe('Progress');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<Progress innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать и изменять value через props', () => {
            const wrapper = mount(<Progress value={50} />);
            expect(wrapper.prop('value')).toBe(50);
            wrapper.setProps({ value: 100 });
            expect(wrapper.prop('value')).toBe(100);
            expect(wrapper.find('.Progress-Inner').prop('style')).toStrictEqual({ width: '100%' });
        });

        test('должен устанавливать value учитывая maxValue', () => {
            const wrapper = mount(<Progress value={50} maxValue={150} />);
            expect(wrapper.prop('value')).toBe(50);
            expect(wrapper.find('.Progress-Inner').prop('style')).toStrictEqual({ width: '33.33%' });
        });

        test('должен устанавливать и изменять timing через props', () => {
            const wrapper = mount(<Progress />);
            wrapper.setProps({ timing: 'linear' });
            expect(wrapper.prop('timing')).toBe('linear');
            expect(wrapper.find('.Progress').hasClass('Progress_timing_linear'));
        });
    });
});
