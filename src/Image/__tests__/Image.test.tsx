import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent, act } from '../../internal/testing';
import { Image } from '../Image';

describe('Image', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Image src="url" className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен вернуть полный шаблон компонента со стабов (snapshot)', () => {
        const { container } = render(<Image src="url" stub={<div className="stub" />} className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен вернуть полный шаблон компонента с пустым изображением', () => {
        const { container } = render(<Image src="" className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('Должен быть установлен корректный displayName', () => {
        expect(Image.displayName).toBe('Image');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLImageElement>();
        render(<Image innerRef={innerRef} src="url" />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен установить атрибут src при наличии свойства src', () => {
        render(<Image src="path-to-image" />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', 'path-to-image');
    });

    test('должен установить атрибут alt при наличии свойства alt', () => {
        render(<Image alt="Иконка Серпа" src="url" />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('alt', 'Иконка Серпа');
    });

    test('должен установить атрибут width и height при наличии свойства width и height', () => {
        render(<Image width={200} height={200} src="url" />);

        expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ height: '200px', width: '200px' });
    });

    test('должен установить атрибут srcset и sizes при наличии свойства srcset и sizes', () => {
        render(<Image srcSet="path-to-image 2x" sizes="(max-width: 600px) 200px, 50vw" src="url" />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('srcSet', 'path-to-image 2x');
        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('sizes', '(max-width: 600px) 200px, 50vw');
    });

    test('подставляется fallback картинка', () => {
        render(<Image src="url" fallbackSrc="fallback" />);

        fireEvent.error(screen.getByRole('img', { hidden: true }));

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', 'fallback');
    });

    test('должен появиться стаб', () => {
        jest.useFakeTimers();

        render(<Image stub={<div data-testid="stub" />} src="url" />);

        act(() => {
            jest.runAllTimers();
        });

        expect(screen.getByTestId('stub')).toBeInTheDocument();

        jest.useRealTimers();
    });
});
