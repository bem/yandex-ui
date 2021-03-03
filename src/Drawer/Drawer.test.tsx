import React, { createRef } from 'react';
import { ReactWrapper, mount, render } from 'enzyme';

import { Drawer } from './touch-phone/bundle';

import { serverEnvironmentSetup, delay } from '../internal/utils';
import { Nullable } from '../typings/utility-types';

describe('Drawer', () => {
    let wrapper: Nullable<ReactWrapper> = null;

    afterEach(() => {
        if (wrapper !== null && wrapper.length > 0) {
            wrapper.unmount();
        }
    });

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Drawer animation={{ tension: 230, friction: 24 }}>
                        <p>Phasellus sollicitudin in pellentesque cras sagittis platea mat</p>
                    </Drawer>,
                ),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            wrapper = mount(
                <Drawer animation={{ tension: 230, friction: 24 }}>
                    <p>Phasellus sollicitudin in pellentesque cras sagittis platea mat</p>
                </Drawer>,
            );
            expect(wrapper).toMatchSnapshot();
        });

        // eslint-disable-next-line mocha/no-skipped-tests
        test.skip('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Drawer visible innerRef={innerRef} animation={{ tension: 230, friction: 24 }} />);

            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });
    });
});
