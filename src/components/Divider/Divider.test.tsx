import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Divider as ProgressCommon } from './Divider';
import { serverEnvironmentSetup, delay } from '../../internal/utils';

const platforms = [['desktop', ProgressCommon], ['touch-pad', ProgressCommon], ['touch-phone', ProgressCommon]];

type ProgressProps = ExtractProps<typeof ProgressCommon>;

describe.each<any>(platforms)('Divider@%s', (_platform, Divider: ComponentType<ProgressProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Divider className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Divider className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Divider.displayName).toBe('Divider');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<Divider innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать и изменять size через props', () => {
            const wrapper = mount(<Divider size={2} />);
            expect(wrapper.prop('size')).toBe(2);
            wrapper.setProps({ size: 10 });
            expect(wrapper.prop('size')).toBe(10);
        });

        test('должен устанавливать и изменять color через props', () => {
            const wrapper = mount(<Divider />);
            wrapper.setProps({ color: '#fc0' });
            expect(wrapper.prop('color')).toBe('#fc0');
        });

        test('должен изменять тег компонента через props as', () => {
            const wrapper = mount(<Divider as="span" />);
            expect(wrapper.find('span')).toHaveLength(2);
        });
    });
});
