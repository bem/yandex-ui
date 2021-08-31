import React, { FC, RefObject } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { withZIndex } from '../withZIndex';

type TestProps = {
    testId?: string;
    innerRef?: RefObject<HTMLDivElement>;
};

const Test: FC<TestProps> = ({ testId, innerRef }) => {
    return <div ref={innerRef} data-testid={testId} />;
};

const ZTest = withZIndex(Test);

describe('withZIndex', () => {
    const render = createClientRender();

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('должен выставлять z-index', async () => {
        render(<ZTest visible testId="element" />);
        jest.runAllTimers();

        expect(screen.getByTestId('element')).toHaveStyle({ zIndex: '1001' });
    });

    test('не должен менять z-index при visible: false', async () => {
        const { setProps } = render(<ZTest visible testId="element" />);
        jest.runAllTimers();

        setProps({ visible: false });
        jest.runAllTimers();

        expect(screen.getByTestId('element')).toHaveStyle({ zIndex: '1001' });
    });

    test('должен учитывать zIndexGroupLevel', () => {
        const { setProps } = render(<ZTest visible testId="element" zIndexGroupLevel={3} />);
        jest.runAllTimers();

        expect(screen.getByTestId('element')).toHaveStyle({ zIndex: '4001' });

        // проверяем что после повторного открытия z-index сохранился
        setProps({ visible: false });
        jest.runAllTimers();
        setProps({ visible: true });
        jest.runAllTimers();

        expect(screen.getByTestId('element')).toHaveStyle({ zIndex: '4001' });
    });

    test('должен устанавливать правильный z-index для нескольких блоков', async () => {
        render(
            <>
                <ZTest visible testId="element-1" />
                <ZTest visible testId="element-2" />
            </>,
        );
        jest.runAllTimers();

        expect(screen.getByTestId('element-1')).toHaveStyle({ zIndex: '1001' });
        expect(screen.getByTestId('element-2')).toHaveStyle({ zIndex: '1002' });
    });

    test('должен правильно менять z-index при повторном появлении блока', () => {
        const { rerender } = render(
            <>
                <ZTest visible testId="element-1" />
                <ZTest visible testId="element-2" />
            </>,
        );
        jest.runAllTimers();

        rerender(
            <>
                <ZTest testId="element-1" />
                <ZTest visible testId="element-2" />
            </>,
        );
        jest.runAllTimers();

        rerender(
            <>
                <ZTest visible testId="element-1" />
                <ZTest visible testId="element-2" />
            </>,
        );
        jest.runAllTimers();

        expect(screen.getByTestId('element-1')).toHaveStyle({ zIndex: '1003' });
        expect(screen.getByTestId('element-2')).toHaveStyle({ zIndex: '1002' });
    });

    test('не должен резервировать z-index при удалении из DOM', () => {
        const { unmount } = render(<ZTest visible testId="element-1" />);
        jest.runAllTimers();

        expect(screen.getByTestId('element-1')).toHaveStyle({ zIndex: '1001' });

        unmount();
        render(<ZTest visible testId="element-2" />);
        jest.runAllTimers();

        expect(screen.getByTestId('element-2')).toHaveStyle({ zIndex: '1001' });
    });
});
