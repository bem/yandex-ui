import React, { createRef, FC } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Keys } from '../../lib/keyboard';
import { Button as ButtonCommon, ContainerElement } from '../Button';
import { Button as ButtonDesktop } from '../desktop';
import { Button as ButtonTouchPad } from '../touch-pad';
import { Button as ButtonTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', ButtonDesktop],
    ['touch-pad', ButtonTouchPad],
    ['touch-phone', ButtonTouchPhone],
] as const;

describe.each(platforms)('Button@%s', (_platform, Button) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Button
                id="clientTemplateId"
                className="mix"
                iconLeft={(className) => <i className={className + ' iconLeft'} />}
                iconRight={(className) => <i className={className + ' iconRight'} />}
            />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<Button innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM элемент', () => {
        const controlRef = createRef<ContainerElement>();
        render(<Button controlRef={controlRef} />);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен быть установлен корректный displayName', () => {
        expect(ButtonCommon.displayName).toBe('Button2');
    });

    test('должен рендерить контент в addonAfter и addonBefore', () => {
        render(<Button addonAfter={<i data-testid="after" />} addonBefore={<i data-testid="before" />} />);

        expect(screen.getByTestId('after')).toBeInTheDocument();
        expect(screen.getByTestId('before')).toBeInTheDocument();
    });

    test('при checked=true должен быть установлен класс Button2_checked и prop aria-pressed', () => {
        render(<Button checked autoComplete="off" />);

        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
        expect(screen.getByRole('button')).toHaveClass('Button2_checked');
    });

    test('autocomplete прокидывается в корневой элемент компонента', () => {
        render(<Button autoComplete="on" />);

        expect(screen.getByRole('button')).toHaveAttribute('autoComplete', 'on');
    });

    test('тег компонента зависит от prop tag', () => {
        render(<Button as="span" data-testid="element" />);

        expect(screen.getByTestId('element').tagName).toBe('SPAN');
    });

    test('children рендерится в DOM', () => {
        render(<Button>Привет</Button>);

        expect(screen.getByRole('button')).toHaveTextContent('Привет');
    });

    test('иконка рендерится', () => {
        render(<Button icon={() => <i data-testid="icon" />} />);

        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    test('при совместной установке icon и iconLeft рендерится только iconLeft', () => {
        render(<Button iconLeft={() => <i data-testid="icon-left" />} icon={() => <i data-testid="icon" />} />);

        expect(screen.getByTestId('icon-left')).toBeInTheDocument();
        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    test('при установке progress=true создается класс Button2_progress и значение aria-busy устанавливается в true', () => {
        render(<Button progress />);

        expect(screen.getByRole('button')).toHaveClass('Button2_progress');
        expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
        expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });

    test('при установке prop disapled в DOM-элементе должны быть props aria-disabled=true и disabled', () => {
        render(<Button disabled />);

        expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
        expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });

    test('className пробрасывается в корневой элемент', () => {
        render(<Button className="testClassName" />);

        expect(screen.getByRole('button')).toHaveClass('testClassName');
    });

    test('при совместной установке checked, progress, className стили корректны', () => {
        render(<Button checked progress className="testClassName" onClick={() => null} />);

        expect(screen.getByRole('button')).toHaveClass('testClassName');
        expect(screen.getByRole('button')).toHaveClass('Button2_checked');
        expect(screen.getByRole('button')).toHaveClass('Button2_progress');
    });

    test('при совместной установке props innerRef и controlRef они должны оба указывать на root DOM-элемент', async () => {
        const controlRef = createRef<ContainerElement>();
        const innerRef = createRef<ContainerElement>();
        render(<Button controlRef={controlRef} innerRef={innerRef} />);

        expect(controlRef.current).toBe(innerRef.current);
        expect(controlRef.current).not.toBe(null);
    });

    test('при нажатии на кнопку вызывается функция, переданная в prop onClick', () => {
        const onClickFn = jest.fn();
        render(<Button onClick={onClickFn} />);

        fireEvent.click(screen.getByRole('button'));
        expect(onClickFn).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByRole('button'));
        expect(onClickFn).toHaveBeenCalledTimes(2);
    });

    test('при нажатии на кнопку вызывается функция, переданная в prop onMouseDown', () => {
        const onMouseDownFn = jest.fn();
        render(<Button onMouseDown={onMouseDownFn} />);

        fireEvent.mouseDown(screen.getByRole('button'));
        expect(onMouseDownFn).toHaveBeenCalledTimes(1);

        fireEvent.mouseDown(screen.getByRole('button'));
        expect(onMouseDownFn).toHaveBeenCalledTimes(2);
    });

    test('при нажатии на кнопку вызывается функция, переданная в prop onKeyUp', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onKeyUpFn = jest.fn((e) => e.persist());
        render(<Button onKeyUp={onKeyUpFn} />);

        fireEvent.keyUp(screen.getByRole('button'), { keyCode: Keys.DELETE });

        expect(onKeyUpFn).toHaveBeenCalledTimes(1);
        expect(onKeyUpFn).toHaveBeenCalledWith(expect.objectContaining({ keyCode: Keys.DELETE }));

        fireEvent.keyUp(screen.getByRole('button'), { keyCode: Keys.BACKSPACE });

        expect(onKeyUpFn).toHaveBeenCalledTimes(2);
        expect(onKeyUpFn).toHaveBeenCalledWith(expect.objectContaining({ keyCode: Keys.BACKSPACE }));
    });

    test('при нажатии на кнопку вызывается функция, переданная в prop onKeyDown', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onKeyDownFn = jest.fn((e) => e.persist());
        render(<Button onKeyDown={onKeyDownFn} />);

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.DELETE });

        expect(onKeyDownFn).toHaveBeenCalledTimes(1);
        expect(onKeyDownFn).toHaveBeenCalledWith(expect.objectContaining({ keyCode: Keys.DELETE }));

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.BACKSPACE });

        expect(onKeyDownFn).toHaveBeenCalledTimes(2);
        expect(onKeyDownFn).toHaveBeenCalledWith(expect.objectContaining({ keyCode: Keys.BACKSPACE }));
    });

    test('при нажатии на кнопку, которая передана в pressKeys должен добавляться класс Button2_pressed', () => {
        render(<Button pressKeys={[Keys.ESC, Keys.TAB]} />);

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.ESC });

        expect(screen.getByRole('button')).toHaveClass('Button2_pressed');

        fireEvent.keyUp(screen.getByRole('button'), { keyCode: Keys.TAB });

        expect(screen.getByRole('button')).not.toHaveClass('Button2_pressed');
    });

    test('при нажатии на кнопку, которая передана в preventKeys должно предотвращаться default поведение', () => {
        const preventDefault = jest.spyOn(KeyboardEvent.prototype, 'preventDefault');
        render(<Button prvntKeys={[Keys.ESC, Keys.TAB]} pressKeys={[Keys.ESC, Keys.TAB]} />);

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.ESC });

        expect(preventDefault).toBeCalledTimes(1);

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.TAB });

        expect(preventDefault).toBeCalledTimes(2);

        preventDefault.mockReset();
    });

    test('должен устанавливать фокус в интерактивный элемент с различными компонентами', () => {
        const Link: FC<any> = ({ innerRef, ...props }) => <a href="#a" ref={innerRef} {...props} />;
        const { setProps } = render(<Button />);

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toHaveFocus();

        setProps({ as: Link });
        fireEvent.click(screen.getByRole('link'));

        expect(screen.getByRole('link')).toHaveFocus();
    });

    test('при потере фокуса кнопка должна терять класс Button2_pressed', () => {
        render(<Button />);

        fireEvent.keyDown(screen.getByRole('button'), { keyCode: Keys.SPACE });

        expect(screen.getByRole('button')).toHaveClass('Button2_pressed');

        fireEvent.blur(screen.getByRole('button'));

        expect(screen.getByRole('button')).not.toHaveClass('Button2_pressed');
    });

    test('при при потере фокуса вызывается функция, переданная в prop onBlur', () => {
        const onBlurFn = jest.fn();
        render(<Button onBlur={onBlurFn} />);

        fireEvent.blur(screen.getByRole('button'));

        expect(onBlurFn).toHaveBeenCalledTimes(1);
    });

    test('должен вернуть шаблон компонента c <Text/> при children={0}', () => {
        render(<Button children={0} />);

        expect(screen.getByRole('button')).toHaveTextContent('0');
    });

    test('должен вернуть шаблон компонента без <Text/> при children={true}', () => {
        render(<Button children />);

        expect(screen.getByRole('button')).toBeEmptyDOMElement();
    });

    test('должен вернуть шаблон компонента с иконками без класса стороны при children={true}', () => {
        render(
            <Button
                children
                iconLeft={(className) => <i data-testid="icon-left" className={className} />}
                iconRight={(className) => <i data-testid="icon-right" className={className} />}
            />,
        );

        expect(screen.getByTestId('icon-left')).not.toHaveClass('Button2-Icon_side_left');
        expect(screen.getByTestId('icon-left')).not.toHaveClass('Button2-Icon_side_right');
    });
});
