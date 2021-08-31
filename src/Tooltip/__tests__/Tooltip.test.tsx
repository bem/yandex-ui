import React, { createRef, FC, RefObject } from 'react';

import { createClientRender, screen, fireEvent, act } from '../../internal/testing';
import { Tooltip as TooltipCommon } from '../Tooltip';
import { Tooltip as TooltipDesktop, TooltipStateful as TooltipStatefulDesktop } from '../desktop';
import { Tooltip as TooltipTouchPad, TooltipStateful as TooltipStatefulTouchPad } from '../touch-phone';
import { Tooltip as TooltipTouchPhone, TooltipStateful as TooltipStatefulTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', TooltipDesktop, TooltipStatefulDesktop],
    ['touch-pad', TooltipTouchPad, TooltipStatefulTouchPad],
    ['touch-phone', TooltipTouchPhone, TooltipStatefulTouchPhone],
] as const;

describe.each(platforms)('Tooltip@%s', (_platform, Tooltip, TooltipStatefull) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        render(
            <Tooltip visible anchor={createRef()}>
                Добавить в избранное
            </Tooltip>,
        );

        expect(document.body).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(TooltipCommon.displayName).toBe('Tooltip');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Tooltip visible innerRef={innerRef} anchor={createRef()} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать модификатор visible если открыт при инициализации', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Tooltip innerRef={innerRef} visible anchor={createRef()} />);

        expect(innerRef.current).toHaveClass('Tooltip_visible');
    });

    test('должен устанавливать/удалять модификатор visible при открытии/закрытии', () => {
        const innerRef = createRef<HTMLDivElement>();
        const { setProps } = render(<Tooltip innerRef={innerRef} anchor={createRef()} />);

        setProps({ visible: true });
        expect(innerRef.current).toHaveClass('Tooltip_visible');

        setProps({ visible: false });
        expect(innerRef.current).not.toHaveClass('Tooltip_visible');
    });

    describe('stateful', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('должен установить innerRef', () => {
            const Anchor: FC<{ innerRef: RefObject<HTMLButtonElement> }> = ({ innerRef }) => {
                return (
                    <button ref={innerRef} data-testid="trigger">
                        trigger
                    </button>
                );
            };
            const ref = createRef<HTMLButtonElement>();

            render(
                <TooltipStatefull defaultVisible content={<span data-testid="tooltip">content</span>}>
                    <Anchor innerRef={ref}>trigger</Anchor>
                </TooltipStatefull>,
            );

            expect(ref.current).not.toBe(null);
        });

        it('должен открыть tooltip с задержкой', () => {
            render(
                <TooltipStatefull
                    content={<span data-testid="tooltip">content</span>}
                    trigger="click"
                    openDelay={1000}
                    keepMounted={false}
                >
                    <span data-testid="trigger">trigger</span>
                </TooltipStatefull>,
            );

            fireEvent.click(screen.getByTestId('trigger'));
            expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();

            act(() => {
                jest.runOnlyPendingTimers();
            });

            expect(screen.getByTestId('tooltip')).toBeInTheDocument();
        });

        it('должен закрыть tooltip с задержкой', () => {
            render(
                <TooltipStatefull
                    defaultVisible
                    content={<span data-testid="tooltip">content</span>}
                    trigger="click"
                    closeDelay={1000}
                    keepMounted={false}
                >
                    <span data-testid="trigger">trigger</span>
                </TooltipStatefull>,
            );

            fireEvent.click(screen.getByTestId('trigger'));
            expect(screen.getByTestId('tooltip')).toBeInTheDocument();

            act(() => {
                jest.runOnlyPendingTimers();
            });

            expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
        });
    });
});
