import React, { ComponentType, createRef } from 'react';
import { ReactWrapper, mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Popup as PopupCommon } from './Popup';
import { Popup as PopupDesktop } from './Popup@desktop';
import { Popup as PopupTouchPad } from './Popup@touch-phone';
import { Popup as PopupTouchPhone } from './Popup@touch-pad';
import { serverEnvironmentSetup, delay } from '../internal/utils';
import { Nullable } from '../typings/utility-types';

const platforms = [['desktop', PopupDesktop], ['touch-pad', PopupTouchPad], ['touch-phone', PopupTouchPhone]];

type PopupProps = ExtractProps<typeof PopupDesktop>;

describe.each<any>(platforms)('Popup@%s', (_platform, Popup: ComponentType<PopupProps>) => {
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
                    <Popup hasTail className="mix">
                        content
                    </Popup>,
                ),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            wrapper = mount(
                <Popup visible hasTail className="mix">
                    content
                </Popup>,
            );
            expect(wrapper).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(PopupCommon.displayName).toBe('Popup2');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup visible innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на хвостик при наличии hasTail', async () => {
            const tailRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup visible tailRef={tailRef} hasTail />);
            await delay(100);
            expect(tailRef.current).not.toBeNull();
        });

        test('должен рендерить контент в addonAfter и addonBefore', () => {
            wrapper = mount(
                <Popup visible addonAfter={<i className="after" />} addonBefore={<i className="before" />} />,
            );
            expect(wrapper.find('.after')).toHaveLength(1);
            expect(wrapper.find('.before')).toHaveLength(1);
        });

        test('должен устанавливать position', () => {
            wrapper = mount(<Popup visible position={{ top: 10, left: 10 }} />);
            expect(wrapper.find('.Popup2').prop('style')).toEqual({ top: 10, left: 10 });
        });

        test('не должен рендериться в body если visible и keepMounted не установлены', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup innerRef={innerRef} keepMounted={false} />);
            await delay(100);
            expect(document.body.lastElementChild).toBeNull();
        });

        test('Должен удаляться из DOM если keepMounted не установлен', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup innerRef={innerRef} keepMounted={false} />);
            await delay(100);
            wrapper.setProps({ visible: true });
            expect(document.body.lastElementChild).toBe(innerRef.current);
            wrapper.setProps({ visible: false });
            expect(document.body.lastElementChild).toBeNull();
        });

        test('должен рендериться в body scope', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup innerRef={innerRef} visible />);
            await delay(100);
            expect(document.body.lastElementChild).toBe(innerRef.current);
        });

        test('должен рендериться в пользовательский scope', async () => {
            const element = document.createElement('div');
            document.body.appendChild(element);

            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Popup scope={{ current: element }} innerRef={innerRef} visible />);
            await delay(100);
            expect(element.lastElementChild).toBe(innerRef.current);
            document.body.removeChild(element);
        });

        test('должен устанавливать модификатор visible если открыт при инициализации', () => {
            wrapper = mount(<Popup visible />);
            expect(wrapper.find('.Popup2').hasClass('Popup2_visible')).toEqual(true);
        });

        test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
            wrapper = mount(<Popup />);
            wrapper.setProps({ visible: true });
            wrapper.update();
            expect(wrapper.find('.Popup2').hasClass('Popup2_visible')).toEqual(true);
            wrapper.setProps({ visible: false });
            expect(wrapper.find('.Popup2').hasClass('Popup2_visible')).toEqual(false);
        });

        test('должен лениво рендериться в DOM', () => {
            wrapper = mount(<Popup />);
            expect(wrapper.find('.Popup2').length).toBe(0);
            wrapper.setProps({ visible: true });
            wrapper.update();
            expect(wrapper.find('.Popup2').length).not.toBe(0);
        });
    });
});
