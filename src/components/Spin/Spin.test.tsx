import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { Spin } from './Spin';
import { serverEnvironmentSetup, delay } from '../../internal/utils';

describe('Spin', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Spin className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Spin className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Spin.displayName).toBe('Spin2');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<Spin innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать/удалять модификатор progress при обновлении через props', () => {
            const wrapper = mount(<Spin />);
            expect(wrapper.find('div').prop('className')).not.toMatch('_progress');
            wrapper.setProps({ progress: true });
            expect(wrapper.find('div').prop('className')).toMatch('_progress');
        });
    });
});
