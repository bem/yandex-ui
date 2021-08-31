import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Logoaas, YandexLogo, InlineLogo } from '../desktop';

const render = createClientRender();

describe('Logoaas', () => {
    test('should render Яндекс by default', () => {
        const { container } = render(<Logoaas />);

        expect(container).toMatchSnapshot();
    });

    test('should set props', () => {
        const innerRef = createRef<HTMLDivElement>();
        const { container } = render(
            <Logoaas circle size={12} color="fff" first="00f" href="//ya.ru" innerRef={innerRef} />,
        );

        expect(container).toMatchSnapshot();
    });

    test('should set tld', () => {
        render(<Logoaas tld="com" />);

        expect(screen.getByRole('link')).toHaveAttribute('href', '//yandex.com');
    });
});

describe('YandexLogo', () => {
    test('should render Яндекс by default', () => {
        const { container } = render(<YandexLogo />);

        expect(container).toMatchSnapshot();
    });

    test('should set props', () => {
        const { container } = render(<YandexLogo circle lang="en" href="//ya.ru" />);

        expect(container).toMatchSnapshot();
    });
});

describe('InlineLogo', () => {
    test('should render src', () => {
        const { container } = render(<InlineLogo src="ya.svg" />);

        expect(container).toMatchSnapshot();
    });

    test('should set props', () => {
        const { container } = render(<InlineLogo height={2} width={1} src="//ya.ru" />);

        expect(container).toMatchSnapshot();
    });
});
