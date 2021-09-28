import React, { createRef } from 'react';
import {
    createClientRender,
    screen,
    fireEvent,
    act,
    createServerRender,
    createContainer,
} from '../../internal/testing';
import { Image } from '../Image';

const EMPTY_IMAGE_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const SECOND_EMPTY_IMAGE_SRC =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=';

describe('Image', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Image src={EMPTY_IMAGE_SRC} className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен вернуть полный шаблон компонента со стабов (snapshot)', () => {
        const { container } = render(<Image src={EMPTY_IMAGE_SRC} stub={<div className="stub" />} className="mix" />);

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
        render(<Image innerRef={innerRef} src={EMPTY_IMAGE_SRC} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен установить атрибут src при наличии свойства src', () => {
        render(<Image src={EMPTY_IMAGE_SRC} />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', EMPTY_IMAGE_SRC);
    });

    test('должен установить атрибут alt при наличии свойства alt', () => {
        render(<Image alt="Иконка Серпа" src={EMPTY_IMAGE_SRC} />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('alt', 'Иконка Серпа');
    });

    test('должен установить атрибут width и height при наличии свойства width и height', () => {
        render(<Image width={200} height={200} src={EMPTY_IMAGE_SRC} />);

        expect(screen.getByRole('img', { hidden: true })).toHaveStyle({ height: '200px', width: '200px' });
    });

    test('должен установить атрибут srcset и sizes при наличии свойства srcset и sizes', () => {
        render(<Image srcSet={`${EMPTY_IMAGE_SRC} 2x`} sizes="(max-width: 600px) 200px, 50vw" src={EMPTY_IMAGE_SRC} />);

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('srcSet', `${EMPTY_IMAGE_SRC} 2x`);
        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('sizes', '(max-width: 600px) 200px, 50vw');
    });

    test('подставляется fallback картинка', () => {
        render(<Image src={EMPTY_IMAGE_SRC} fallbackSrc={SECOND_EMPTY_IMAGE_SRC} />);

        fireEvent.error(screen.getByRole('img', { hidden: true }));

        expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', SECOND_EMPTY_IMAGE_SRC);
    });

    test('должен появиться стаб', () => {
        jest.useFakeTimers();

        render(<Image stub={<div data-testid="stub" />} src={EMPTY_IMAGE_SRC} />);

        act(() => {
            jest.runAllTimers();
        });

        expect(screen.getByTestId('stub')).toBeInTheDocument();

        jest.useRealTimers();
    });

    test('должен исчезнуть стаб после окончания анимации', () => {
        jest.useFakeTimers();

        render(<Image stub={<div data-testid="stub" />} src={EMPTY_IMAGE_SRC} />);

        act(() => {
            jest.runAllTimers();
        });

        fireEvent.animationEnd(screen.getByRole('img', { hidden: true }));

        expect(() => screen.getByTestId('stub')).toThrow();

        jest.useRealTimers();
    });

    test('стаб не должен появиться если изображение загружено', () => {
        jest.useFakeTimers();

        render(<Image stub={<div data-testid="stub" />} src={EMPTY_IMAGE_SRC} />);

        fireEvent.load(screen.getByRole('img', { hidden: true }));

        act(() => {
            jest.runAllTimers();
        });

        expect(() => screen.getByTestId('stub')).toThrow();

        jest.useRealTimers();
    });

    test('должен отображаться после гидрации', async () => {
        const Fixture = () => <Image />;

        const { html } = createServerRender()(<Fixture />);
        const container = createContainer(html);
        document.body.appendChild(container);

        await new Promise((resolve) => setTimeout(resolve, 50));

        // проверяем что изображение загружено до гидрации
        expect(document.body.getElementsByTagName('img')[0].complete).toBe(true);

        render(<Fixture />, { container, hydrate: true });

        expect(screen.getByRole('img', { hidden: true })).toHaveClass('Image_loaded');
    });
});
