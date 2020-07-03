import React, { ComponentType, createRef } from 'react';
import { ReactWrapper, mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Modal as ModalCommon } from './Modal';
import { Modal as ModalDesktop } from './Modal@desktop';
import { Modal as ModalTouchPad } from './Modal@touch-phone';
import { Modal as ModalTouchPhone } from './Modal@touch-pad';
import { serverEnvironmentSetup, delay } from '../../internal/utils';
import { Nullable } from '../../typings/utility-types';

const platforms = [['desktop', ModalDesktop], ['touch-pad', ModalTouchPad], ['touch-phone', ModalTouchPhone]];

type ModalProps = ExtractProps<typeof ModalDesktop>;

describe.each<any>(platforms)('Modal@%s', (_platform, Modal: ComponentType<ModalProps>) => {
    let wrapper: Nullable<ReactWrapper> = null;

    afterEach(() => {
        if (wrapper !== null && wrapper.length > 0) {
            wrapper.unmount();
        }
    });

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Modal className="mix">content</Modal>)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            wrapper = mount(<Modal visible className="mix">content</Modal>);
            expect(wrapper).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Modal visible innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен быть установлен корректный displayName', () => {
            expect(ModalCommon.displayName).toBe('Modal');
        });

        test('должен устанавливать модификатор visible если открыт при инициализации', () => {
            wrapper = mount(<Modal visible />);
            expect(
                wrapper
                    .find('.Modal')
                    .last()
                    .hasClass('Modal_visible'),
            ).toEqual(true);
        });

        test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
            wrapper = mount(<Modal />);
            wrapper.setProps({ visible: true });
            expect(
                wrapper
                    .find('.Modal')
                    .last()
                    .hasClass('Modal_visible'),
            ).toEqual(true);
            wrapper.setProps({ visible: false });
            expect(
                wrapper
                    .find('.Modal')
                    .last()
                    .hasClass('Modal_visible'),
            ).toEqual(false);
        });

        test('должен вызывать onClose при закрытии', () => {
            const onClose = jest.fn();
            wrapper = mount(<Modal visible onClose={onClose} />);
            wrapper.find('.Modal-Content').simulate('click');
            expect(onClose).toHaveBeenCalledTimes(0);
            wrapper.find('.Modal-Overlay').simulate('click');
            expect(onClose).toHaveBeenCalledTimes(1);
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' } as any));
            expect(onClose).toHaveBeenCalledTimes(2);
        });
    });
});
