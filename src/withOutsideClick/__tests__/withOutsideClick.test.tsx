import React, { FC, RefObject, useRef, useState } from 'react';

import { createClientRender, fireEvent, screen } from '../../internal/testing';
import { Keys } from '../../lib/keyboard';
import { IWithOutsideClickProps, withOutsideClick } from '../withOutsideClick';

interface IComponentProps extends IWithOutsideClickProps {
    className?: string;
}

const Component: FC<IComponentProps> = ({ visible, targetRef }) => {
    return (
        <div ref={targetRef as RefObject<HTMLDivElement>}>
            {visible && <div data-testid="wrapped">Wrapped Component</div>}
        </div>
    );
};

const ComponentWithOutsideClick = withOutsideClick(Component);

const ExampleEnvironment: FC<any> = (props) => {
    const [visible, setVisible] = useState(false);
    const toggleBtnRef = useRef<HTMLButtonElement>(null);
    const ignoreBtnRef = useRef<HTMLButtonElement>(null);
    const uselessBtnRef = useRef<HTMLButtonElement>(null);
    const componentRef = useRef<HTMLDivElement>(null);

    return (
        <div {...props}>
            <button ref={toggleBtnRef} data-testid="toggle-btn" onClick={() => setVisible(!visible)}>
                Anchor
            </button>
            <button ref={ignoreBtnRef} data-testid="ignore-btn">
                IgnoreElement
            </button>
            <button ref={uselessBtnRef} data-testid="useless-btn">
                UselessButton
            </button>
            <ComponentWithOutsideClick
                targetRef={componentRef}
                visible={visible}
                ignoreRefs={[toggleBtnRef, ignoreBtnRef]}
                onOutsideClick={() => setVisible(false)}
                onEscapeKeyDown={() => setVisible(false)}
            />
        </div>
    );
};

describe('ComponentWithOutsideClick', () => {
    const render = createClientRender();

    describe('client environment', () => {
        test('должен быть установлен корректный displayName', () => {
            expect(ComponentWithOutsideClick.displayName).toBe('withOutsideClick(Component)');
        });

        test('должен скрывать компонент onOutsideClick', async () => {
            render(<ExampleEnvironment />);

            fireEvent.click(screen.getByTestId('toggle-btn'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();

            fireEvent.click(screen.getByTestId('useless-btn'));
            expect(screen.queryByTestId('wrapped')).not.toBeInTheDocument();
        });

        test('должен скрывать компонент onEscKeyDown', async () => {
            render(<ExampleEnvironment />);

            fireEvent.click(screen.getByTestId('toggle-btn'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();

            fireEvent.keyDown(document, { keyCode: Keys.ESC });
            expect(screen.queryByTestId('wrapped')).not.toBeInTheDocument();
        });

        test('не должен скрывать компонент onOutsideClick по элементу в ignoreRefs', () => {
            render(<ExampleEnvironment />);

            fireEvent.click(screen.getByTestId('toggle-btn'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();

            fireEvent.click(screen.getByTestId('ignore-btn'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();
        });

        test('не должен скрывать компонент по клику в targetRef', async () => {
            render(<ExampleEnvironment />);

            fireEvent.click(screen.getByTestId('toggle-btn'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();

            fireEvent.click(screen.getByTestId('wrapped'));
            expect(screen.getByTestId('wrapped')).toBeInTheDocument();
        });
    });
});
