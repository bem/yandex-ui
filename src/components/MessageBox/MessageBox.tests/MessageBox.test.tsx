import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { MessageBox as MessageBoxBase } from '../MessageBox';
import { MessageBox, Corner } from '../MessageBox.bundle/desktop';
import { serverEnvironmentSetup, delay } from '../../../internal/utils';

describe('MessageBox', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<MessageBox className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<MessageBox className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(MessageBoxBase.displayName).toBe('MessageBox');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<MessageBox innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать/удалять модификаторы при обновлении через props', () => {
            const wrapper = mount(<MessageBox />);
            expect(wrapper.find('.MessageBox').prop('className')).not.toMatch('_opaque');
            wrapper.setProps({ opaque: true });
            expect(wrapper.find('.MessageBox').prop('className')).toMatch('_opaque');

            wrapper.setProps({ layout: 'tooltip' });
            expect(wrapper.find('.MessageBox').prop('className')).toMatch('_layout_tooltip');
        });

        test('должен рендерить Close элемент (snapshot)', () => {
            expect(render(<MessageBox onClose={() => {}} />)).toMatchSnapshot();
        });
        test('должен рендерить Background элемент (snapshot)', () => {
            expect(render(<MessageBox background={<div children="back" />} />)).toMatchSnapshot();
        });
        test('должен рендерить Corner элемент (snapshot)', () => {
            expect(render(
                <MessageBox
                    corner={
                        <Corner
                            width={42}
                            side="bottom-left"
                            children={<img />}
                        />}
                />,
            )).toMatchSnapshot();
        });
        test('должен рендерить actions элемент (snapshot)', () => {
            expect(render(<MessageBox actions={ <button />} />)).toMatchSnapshot();
        });
    });
});
