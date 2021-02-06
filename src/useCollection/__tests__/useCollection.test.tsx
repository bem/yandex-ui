import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { CollectionComponent, useCollection } from '../useCollection';

const InvalidComponent = () => null;

describe('useCollection', () => {
    test('должен вернуть пустой массив при отсутствии `children`', () => {
        const { result } = renderHook((props) => useCollection(props), {
            initialProps: {},
        });

        expect(result.current).toEqual([]);
    });

    test.each([
        ['true', true],
        ['false', false],
        ['null', null],
        ['пустую строку', ''],
        ['0', 0],
        ['undefined', undefined],
        ['react фрагменты', <></>],
    ])('должен корректно обрабатывать %s внутри `children`', (_, value) => {
        const { result } = renderHook((props) => useCollection(props), {
            initialProps: { children: [value] },
        });

        expect(result.current).toEqual([]);
    });

    test.each([
        ['не нулевое число', 4],
        ['не пустую строку', 'test'],
        ['html элемент', <div key="div" />],
        ['обычный компонент', <InvalidComponent key="custom" />],
    ])('должен выбросить ошибку если передать в `children` %s', (_, value) => {
        const { result } = renderHook((props) => useCollection(props), {
            initialProps: { children: [value] },
        });

        expect(() => result.current).toThrow('Unknown element of the children');
    });

    test('должен вызвать `getCollectionNode` у компонента коллекции', () => {
        const mockFn = jest.fn(() => 'test-value');
        const Item = () => null;
        Item.getCollectionNode = mockFn;

        const { result } = renderHook((props) => useCollection(props), {
            initialProps: { children: <Item /> },
        });

        expect(result.current).toEqual(['test-value']);
        expect(mockFn).toBeCalledTimes(1);
    });

    test('должен передавать пропсы первым аргументом в `getCollectionNode`', () => {
        const mockFn = jest.fn(() => 'test-value');
        const Item: any = () => null;
        Item.getCollectionNode = mockFn;
        const itemProps = { a: 1, b: '2', c: true };

        renderHook((props) => useCollection(props), {
            initialProps: { children: <Item {...itemProps} /> },
        }).result.current;

        expect(mockFn).toBeCalledWith(expect.objectContaining(itemProps), expect.anything());
    });

    test('должен передавать контекст вторым аргументом в `getCollectionNode`', () => {
        const mockFn = jest.fn(() => 'test-value');
        const Item: any = () => null;
        Item.getCollectionNode = mockFn;

        renderHook((props) => useCollection(props), {
            initialProps: { children: <Item /> },
        }).result.current;

        expect(mockFn).toBeCalledWith(
            expect.anything(),
            expect.objectContaining({
                createCollection: expect.any(Function),
            }),
        );
    });

    test('должен корректно обрабатывать элементы внутри фрагмента', () => {
        const Item: CollectionComponent<any, any> = () => null;
        Item.getCollectionNode = ({ value, children }, context) => {
            return children ? context.createCollection(children) : value;
        };

        const { result } = renderHook((props) => useCollection(props), {
            initialProps: {
                children: (
                    <>
                        <Item value={1} />
                        <>
                            <Item value={2} />
                            <Item>
                                <Item value={3} />
                                <Item value={4} />
                            </Item>
                        </>
                        <Item value={5} />
                    </>
                ),
            },
        });

        expect(result.current).toEqual([1, 2, [3, 4], 5]);
    });
});
