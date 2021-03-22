import React, { FC, useRef } from 'react';

import { screen, createClientRender } from '../../internal/testing';
import { useFocusTrap, UseFocusTrapOptions } from '../useFocusTrap';

type FixtureProps = Partial<UseFocusTrapOptions>;

const FocusTrapFixture: FC<FixtureProps> = (props) => {
    const { children, scopeRef, enabled = false, ...options } = props;
    const innerScope = useRef<HTMLDivElement>(null);

    useFocusTrap({ ...options, enabled, scopeRef: scopeRef || innerScope });

    return (
        <div data-testid="wrapper">
            <div ref={innerScope} data-testid="container">
                {children}
            </div>
        </div>
    );
};

describe('useFocusTrap', () => {
    const render = createClientRender();

    test('должен создать элементы-ловушки для контейнера только при включенном состоянии', () => {
        const { setProps } = render<FixtureProps>(<FocusTrapFixture enabled={false} />);

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();

        setProps({ enabled: true });

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();

        setProps({ enabled: false });

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();
    });

    test('должен обновить DOM если поменялась ссылка на контейнер', () => {
        const scopeRef1 = { current: null };
        const scopeRef2 = { current: null };

        const { setProps, unmount } = render<FixtureProps>(
            <FocusTrapFixture enabled scopeRef={scopeRef1}>
                <div ref={scopeRef1} data-testid="container-1" />
                <div ref={scopeRef2} data-testid="container-2" />
            </FocusTrapFixture>,
        );

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();

        setProps({ enabled: true, scopeRef: scopeRef2 });

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();

        setProps({ enabled: true, scopeRef: { current: null } });

        expect(screen.getByTestId('wrapper')).toMatchSnapshot();

        unmount();
    });
});
