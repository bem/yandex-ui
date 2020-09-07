import React, { ComponentType, createRef } from 'react';
import { ReactWrapper, mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { Tooltip as TooltipCommon } from '../Tooltip';
import { Tooltip as TooltipDesktop } from '../Tooltip@desktop';
import { Tooltip as TooltipTouchPad } from '../Tooltip@touch-phone';
import { Tooltip as TooltipTouchPhone } from '../Tooltip@touch-pad';
import { serverEnvironmentSetup, delay } from '../../internal/utils';
import { Nullable } from '../../typings/utility-types';

// prettier-ignore
const platforms = [
    ['desktop', TooltipDesktop],
    ['touch-pad', TooltipTouchPad],
    ['touch-phone', TooltipTouchPhone],
];

type TooltipProps = ExtractProps<typeof TooltipDesktop>;

describe.each<any>(platforms)('Tooltip@%s', (_platform, Tooltip: ComponentType<TooltipProps>) => {
    let wrapper: Nullable<ReactWrapper> = null;

    afterEach(() => {
        if (wrapper !== null && wrapper.length > 0) {
            wrapper.unmount();
        }
    });

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Tooltip className="mix" anchor={createRef()}>content</Tooltip>)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            wrapper = mount(<Tooltip visible anchor={createRef()}>Добавить в избранное</Tooltip>);
            expect(wrapper).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(TooltipCommon.displayName).toBe('Tooltip');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            wrapper = mount(<Tooltip visible innerRef={innerRef} anchor={createRef()} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать модификатор visible если открыт при инициализации', () => {
            wrapper = mount(<Tooltip visible anchor={createRef()} />);
            expect(
                wrapper
                    .find('.Tooltip')
                    .at(0)
                    .hasClass('Tooltip_visible'),
            ).toEqual(true);
        });

        test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
            wrapper = mount(<Tooltip anchor={createRef()} />);
            wrapper.setProps({ visible: true });
            expect(
                wrapper
                    .find('.Tooltip')
                    .at(0)
                    .hasClass('Tooltip_visible'),
            ).toEqual(true);
            wrapper.setProps({ visible: false });
            expect(
                wrapper
                    .find('.Tooltip')
                    .at(0)
                    .hasClass('Tooltip_visible'),
            ).toEqual(false);
        });
    });
});
