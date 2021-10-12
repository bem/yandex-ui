import React, { createRef } from 'react';

import { screen, createClientRender, fireEvent } from '../../../internal/testing';
import { Button } from '../Button';

describe('Button', () => {
    const render = createClientRender();

    test('should return correct displayName', () => {
        expect(Button.displayName).toBe('Button');
    });

    test('should pass additional className for root element', () => {
        render(<Button className="test" data-testid="button" />);
        expect(screen.getByTestId('button')).toHaveClass('test');
    });

    test('should set ref with root element', () => {
        const ref = createRef<HTMLButtonElement>();
        render(<Button innerRef={ref} data-testid="button" />);
        expect(screen.getByTestId('button')).toEqual(ref.current);
    });

    test('should set ref with root element and custom container', () => {
        const ref = createRef<HTMLButtonElement>();
        const Custom = (props: any) => <span ref={props.innerRef} data-testid="custom" />;
        render(<Button as={Custom} innerRef={ref} data-testid="button" />);
        expect(screen.getByTestId('custom')).toEqual(ref.current);
    });

    test('should render as link', () => {
        // @ts-expect-error (TODO: Расширить тип в базовой кнопке)
        render(<Button as="a" href="#" data-testid="button" />);
        expect(screen.getByTestId('button')).toHaveAttribute('href', '#');
    });

    test('should call onKeyUp and onKeyDown handlers', () => {
        const onKeyDown = jest.fn();
        const onKeyUp = jest.fn();

        render(<Button onKeyDown={onKeyDown} onKeyUp={onKeyUp} data-testid="button" />);
        const button = screen.getByTestId('button');

        fireEvent.keyDown(button, { key: 'ArrowDown' });
        fireEvent.keyUp(button, { key: 'ArrowDown' });
        expect(onKeyDown).toHaveBeenCalled();
        expect(onKeyUp).toHaveBeenCalled();
    });

    // eslint-disable-next-line mocha/no-skipped-tests
    test.skip('should call onPress handler after click', () => {
        const onPress = jest.fn();

        render(<Button onPress={onPress} data-testid="button" />);
        const button = screen.getByTestId('button');

        fireEvent.click(button, { button: 0 });
        expect(onPress).toHaveBeenCalled();
    });

    test('should set aria-pressed with checked prop (a11y)', () => {
        render(<Button checked data-testid="button" />);
        expect(screen.getByTestId('button')).toHaveAttribute('aria-pressed', 'true');
    });

    test('should set aria-busy with progress prop (a11y)', () => {
        render(<Button progress data-testid="button" />);
        expect(screen.getByTestId('button')).toHaveAttribute('aria-busy', 'true');
    });

    test('should render with <Text/> when children={0}', () => {
        render(<Button children={0} />);

        expect(screen.getByRole('button')).toHaveTextContent('0');
    });

    test('should render without <Text/> when children={true}', () => {
        render(<Button children />);

        expect(screen.getByRole('button')).toBeEmptyDOMElement();
    });

    test('should render icons without side classes when children={true}', () => {
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
