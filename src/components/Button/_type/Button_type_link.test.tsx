import React, { ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps, compose } from '@bem-react/core';

import { Button as ButtonDesktop } from '../Button@desktop';
import { Button as ButtonTouchPad } from '../Button@touch-pad';
import { Button as ButtonTouchPhone } from '../Button@touch-phone';
import { withTypeLink } from './Button_type_link';
import { serverEnvironmentSetup } from '../../../internal/utils';

const platforms = [
    ['desktop', compose(withTypeLink)(ButtonDesktop)],
    ['touch-pad', compose(withTypeLink)(ButtonTouchPad)],
    ['touch-phone', compose(withTypeLink)(ButtonTouchPhone)],
];

const ButtonForType = compose(withTypeLink)(ButtonDesktop);
type ButtonProps = ExtractProps<typeof ButtonForType>;

describe.each<any>(platforms)('Button_hasControl@%s', (_platform, Button: ComponentType<ButtonProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Button />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Button />)).toMatchSnapshot();
        });

        test('должен при передаче props type=link и url устанавливать href равным url и рендерить тег a', () => {
            const wrapper = mount(<Button type="link" url="https://yandex.ru" />);
            expect(wrapper.find('a').prop('href')).toBe('https://yandex.ru');
        });

        test('должен при передаче props targer=_blank и rel устанавливать rel пользователя первым приоритетом', () => {
            const wrapper = mount(<Button type="link" target="_blank" rel="author" />);
            expect(wrapper.find('a').prop('target')).toBe('_blank');
            expect((wrapper.find('a').prop('rel') || '').startsWith('author')).toBe(true);
        });

        test('должен устанавливать tabIndex', () => {
            const wrapper = mount(<Button type="link" tabIndex={3} />);
            expect(wrapper.find('a').prop('tabIndex')).toBe(3);
        });

        test('должен при передаче props disabled не устанавливать tabIndex и url', () => {
            const wrapper = mount(<Button type="link" url="https://yandex.ru" disabled tabIndex={3} />);
            expect(wrapper.find('a').prop('disabled')).toBe(true);
            expect(wrapper.find('a').prop('href')).toBe(undefined);
            expect(wrapper.find('a').prop('tabIndex')).toBe(-1);
        });
    });
});
