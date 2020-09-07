import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { Image } from './Image';
import { serverEnvironmentSetup } from '../internal/utils';

jest.useFakeTimers();

describe('Image', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Image src="url" className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Image src="url" className="mix" />)).toMatchSnapshot();
        });

        test('должен вернуть полный шаблон компонента со стабов (snapshot)', () => {
            expect(render(<Image src="url" stub={<div className="stub" />} className="mix" />)).toMatchSnapshot();
        });

        test('должен вернуть полный шаблон компонента с пустым изображением', () => {
            expect(render(<Image src="" className="mix" />)).toMatchSnapshot();
        });

        test('Должен быть установлен корректный displayName', () => {
            expect(Image.displayName).toBe('Image');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLImageElement>();

            act(() => {
                mount(<Image innerRef={innerRef} src="url" />);
            });

            expect(innerRef.current).not.toBe(null);
        });

        test('должен установить атрибут src при наличии свойства src', () => {
            const wrapper = mount(<Image src="path-to-image" />);
            expect(wrapper.find('img').prop('src')).toBe('path-to-image');
        });

        test('должен установить атрибут src при наличии свойства url (legacy)', () => {
            const wrapper = mount(<Image src="path-to-image" />);
            expect(wrapper.find('img').prop('src')).toBe('path-to-image');
        });

        test('должен установить атрибут alt при наличии свойства alt', () => {
            const wrapper = mount(<Image alt="Иконка Серпа" src="url" />);
            expect(wrapper.find('img').prop('alt')).toBe('Иконка Серпа');
        });

        test('должен установить атрибут width и height при наличии свойства width и height', () => {
            const wrapper = mount(<Image width={200} height={200} src="url" />);
            expect(wrapper.find('img').prop('style')).toStrictEqual({ height: 200, width: 200 });
        });

        test('должен установить атрибут srcset и sizes при наличии свойства srcset и sizes', () => {
            const wrapper = mount(<Image srcSet="path-to-image 2x" sizes="(max-width: 600px) 200px, 50vw" src="url" />);
            expect(wrapper.find('img').prop('srcSet')).toBe('path-to-image 2x');
            expect(wrapper.find('img').prop('sizes')).toBe('(max-width: 600px) 200px, 50vw');
        });

        test('подставляется fallback картинка', () => {
            // не используем enzyme, т.к. в нем не срабатывает событие error у тега
            const el = document.createElement('div');

            ReactDOM.render(<Image src="url" fallbackSrc="fallback" />, el);
            const img = el.querySelector('img');

            act(() => {
                img!.dispatchEvent(new Event('error'));
            });
            expect(img!.src.includes('fallback')).toBe(true);
        });

        test('должен появиться стаб', () => {
            // не используем enzyme, из за таймеров
            const el = document.createElement('div');

            act(() => {
                ReactDOM.render(<Image stub={<div className="stub" />} src="url" />, el);
                jest.runAllTimers();
            });
            expect(el.querySelectorAll('.stub').length).toBe(1);
        });
    });
});
