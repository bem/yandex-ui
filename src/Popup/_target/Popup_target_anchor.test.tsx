import React, { ComponentType } from 'react';
import { ReactWrapper, mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Popup as PopupDesktop } from '../Popup@desktop';
import { Popup as PopupTouchPad } from '../Popup@touch-phone';
import { Popup as PopupTouchPhone } from '../Popup@touch-pad';
import { withTargetAnchor } from './Popup_target_anchor';
import { serverEnvironmentSetup } from '../../internal/utils';
import { Nullable } from '../../typings/utility-types';

const platforms = [
    ['desktop', withTargetAnchor(PopupDesktop)],
    ['touch-pad', withTargetAnchor(PopupTouchPad)],
    ['touch-phone', withTargetAnchor(PopupTouchPhone)],
];

const PopupForType = withTargetAnchor(PopupDesktop);
type PopupProps = ExtractProps<typeof PopupForType>;

describe.each<any>(platforms)('Popup_target_anchor@%s', (_platform, Popup: ComponentType<PopupProps>) => {
    let wrapper: Nullable<ReactWrapper> = null;

    afterEach(() => {
        if (wrapper !== null) {
            wrapper.unmount();
        }
    });

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            const wrapper = render(
                <Popup hasTail anchor={{ current: null }} getPossibleDrawingParams={() => null} target="anchor">
                    content
                </Popup>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            wrapper = mount(
                <Popup visible hasTail anchor={{ current: null }} getPossibleDrawingParams={() => null} target="anchor">
                    content
                </Popup>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
});
