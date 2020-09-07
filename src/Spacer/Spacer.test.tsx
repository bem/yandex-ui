import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { Spacer } from './Spacer';
import { serverEnvironmentSetup, delay } from '../internal/utils';

describe('Spacer', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Spacer className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Spacer className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Spacer.displayName).toBe('Spacer');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<Spacer innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать и изменять all через props', () => {
            const wrapper = mount(<Spacer all={20} />);
            expect(wrapper.find('div').prop('style')).toEqual({ padding: 20 });
            wrapper.setProps({ all: '10rem' });
            expect(wrapper.find('div').prop('style')).toEqual({ padding: '10rem' });
        });

        test('должен устанавливать vertical и horizontal через props', () => {
            const wrapper = mount(<Spacer vertical={10} horizontal={20} />);
            expect(wrapper.find('div').prop('style')).toEqual({
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
            });
        });

        test('должен устанавливать top bottom left и right через props', () => {
            const wrapper = mount(<Spacer top={10} bottom="10px" left="20rem" right={20} />);
            expect(wrapper.find('div').prop('style')).toEqual({
                paddingBottom: '10px',
                paddingLeft: '20rem',
                paddingRight: 20,
                paddingTop: 10,
            });
        });

        test('должен изменять тег компонента через props as', () => {
            const wrapper = mount(<Spacer as="span" />);
            expect(wrapper.find('span')).toHaveLength(1);
        });
    });
});
