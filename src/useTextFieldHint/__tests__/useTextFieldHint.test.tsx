import React, { FC } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { useTextFieldHint, UseTextFieldHintProps } from '../useTextFieldHint';

const Fixture: FC<UseTextFieldHintProps> = (props) => {
    const {
        hint,
        hintProps: { leave, onAnimationEnd },
    } = useTextFieldHint(props);

    return (
        <span data-testid="element" data-leave={leave} onAnimationEnd={onAnimationEnd}>
            {hint}
        </span>
    );
};

describe('useTextFieldHint', () => {
    const render = createClientRender();

    test('should add/remove hint', () => {
        const { setProps } = render(<Fixture />);

        expect(screen.getByTestId('element')).toBeEmptyDOMElement();

        setProps({ hint: 'error' });
        fireEvent.animationEnd(screen.getByTestId('element'));

        expect(screen.getByTestId('element')).toHaveTextContent('error');

        setProps({ hint: '' });
        fireEvent.animationEnd(screen.getByTestId('element'));

        expect(screen.getByTestId('element')).toBeEmptyDOMElement();
    });

    test('should hide hint after animation end', () => {
        const { setProps } = render(<Fixture hint="error" />);

        expect(screen.getByTestId('element')).toHaveTextContent('error');

        setProps({ hint: '' });

        expect(screen.getByTestId('element')).toHaveTextContent('error');
        expect(screen.getByTestId('element')).toHaveAttribute('data-leave', 'true');

        fireEvent.animationEnd(screen.getByTestId('element'));

        expect(screen.getByTestId('element')).toBeEmptyDOMElement();
        expect(screen.getByTestId('element')).toHaveAttribute('data-leave', 'false');
    });

    test('should show next hint on animated hiding of previous hint', () => {
        const { setProps } = render(<Fixture hint="error" />);

        expect(screen.getByTestId('element')).toHaveTextContent('error');

        setProps({ hint: '' });

        expect(screen.getByTestId('element')).toHaveTextContent('error');
        expect(screen.getByTestId('element')).toHaveAttribute('data-leave', 'true');

        setProps({ hint: 'error' });

        expect(screen.getByTestId('element')).toHaveTextContent('error');
        expect(screen.getByTestId('element')).toHaveAttribute('data-leave', 'false');
    });
});
