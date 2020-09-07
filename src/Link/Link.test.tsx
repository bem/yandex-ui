import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps, compose } from '@bem-react/core';

import { Link as LinkCommon } from './Link';
import { Link as LinkDesktop } from './Link@desktop';
import { withPseudo } from './_pseudo/Link_pseudo';
import { serverEnvironmentSetup, delay } from '../internal/utils';

const platforms = [['desktop', withPseudo(LinkDesktop)]];

const LinkForType = compose(withPseudo)(LinkDesktop);
type LinkProps = ExtractProps<typeof LinkForType>;

describe.each<any>(platforms)('Link@%s', (_platform, Link: ComponentType<LinkProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Link href="www.test.ru" className="mix">
                        Content
                    </Link>,
                ),
            ).toMatchSnapshot();
        });

        test('должен рендерить псевдо ссылку', () => {
            expect(
                render(
                    <Link href="www.test.ru" pseudo>
                        Content
                    </Link>,
                ),
            ).toMatchSnapshot();
        });

        test('должен добавлять в ссылку с target="_blank" атрибут rel="noopener"', () => {
            expect(
                render(
                    <Link href="www.test.ru" target="_blank" rel="nofollow">
                        Content
                    </Link>,
                ),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(
                    <Link href="www.test.ru" className="mix">
                        Content
                    </Link>,
                ),
            ).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(LinkCommon.displayName).toBe('Link');
        });

        test('должен рендерить псевдо ссылку', () => {
            expect(
                render(
                    <Link href="www.test.ru" pseudo>
                        Content
                    </Link>,
                ),
            ).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Link innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен устанавливать ссылку на нативный DOM инпут', async () => {
            const controlRef = createRef<HTMLInputElement>();
            mount(<Link controlRef={controlRef} />);
            await delay(100);
            expect(controlRef.current).not.toBe(null);
        });

        test('должен вызывать событие onClick с event при клике', () => {
            const onClick = jest.fn();
            const wrapper = mount(<Link onClick={onClick} />);
            wrapper.find('.Link').simulate('click', { type: 'click' });
            expect(onClick).toHaveBeenCalledTimes(1);
            expect(onClick.mock.calls[0][0].type).toBe('click');
        });

        test('должен рендерить Link с вложенным content', () => {
            const wrapper = mount(
                <Link>
                    <i className="link-content" />
                </Link>,
            );
            expect(wrapper.find('.link-content')).toHaveLength(1);
        });

        test('должен обновлять text в input при обновлении через props', () => {
            const wrapper = mount(<Link />);
            wrapper.setProps({ text: 'someText' });
            expect(wrapper.find('.Link').prop('text')).toBe('someText');
        });

        test('должен установить tabIndex', () => {
            const wrapper = mount(<Link tabIndex={1} />);
            expect(wrapper.find('.Link').prop('tabIndex')).toBe(1);
            wrapper.setProps({ disabled: true });
            expect(wrapper.find('.Link').prop('tabIndex')).toBe(-1);
        });
    });
});
