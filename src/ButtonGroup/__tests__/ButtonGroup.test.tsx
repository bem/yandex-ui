import React from 'react';

import { createClientRender, screen, fireEvent, getNodeText } from '../../internal/testing';
import { Button } from '../../Button/desktop/bundle';
import { ButtonGroup as ButtonGroupCommon, useButtonGroupState } from '..';
import { ButtonGroup } from '../desktop/bundle';

describe('ButtonGroup', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <ButtonGroup>
                <Button />
                <Button />
                <Button />
            </ButtonGroup>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(ButtonGroupCommon.displayName).toBe('ButtonGroup');
    });

    test('должен вызываться onClick при клике на ребенка', () => {
        const onClickFn = jest.fn();
        render(
            <ButtonGroup onClick={onClickFn}>
                <Button />
            </ButtonGroup>,
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClickFn).toBeCalledTimes(1);
    });

    test('должен вызываться onClick ребенка и onClick ButtonGroup при клике на ребенка', () => {
        const onClickFn1 = jest.fn();
        const onClickFn2 = jest.fn();
        render(
            <ButtonGroup onClick={onClickFn1}>
                <Button onClick={onClickFn2} />
            </ButtonGroup>,
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClickFn1).toBeCalledTimes(1);
        expect(onClickFn2).toBeCalledTimes(1);
    });

    test('при disabled=true не должен вызывать onClick родителя и ребенка', () => {
        const onClickFn1 = jest.fn();
        const onClickFn2 = jest.fn();
        render(
            <ButtonGroup onClick={onClickFn1} disabled>
                <Button onClick={onClickFn2} />
            </ButtonGroup>,
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClickFn1).toBeCalledTimes(0);
        expect(onClickFn2).toBeCalledTimes(0);
    });

    test('divider=Component должен вставлять Component между прямыми потомками ButtonGroup', () => {
        const divider = <>,</>;
        render(
            <ButtonGroup divider={divider}>
                <>button</>
                <>button</>
                <>button</>
            </ButtonGroup>,
        );

        expect(getNodeText(screen.getByRole('group'))).toBe('button,button,button');
    });

    test('ButtonGroup при useButtonState c type=`radio` только один Button может иметь состояние checked', () => {
        const ButtonGroupRadio = () => {
            const state = useButtonGroupState({ type: 'radio' });

            return (
                <ButtonGroup {...state}>
                    <Button />
                    <Button />
                    <Button />
                </ButtonGroup>
            );
        };

        render(<ButtonGroupRadio />);

        screen.getAllByRole('button').forEach((button, index) => {
            fireEvent.click(button);
            expect(button).toHaveClass('Button2_checked');

            screen
                .getAllByRole('button')
                .filter((_, i) => i !== index)
                .every((button) => expect(button).not.toHaveClass('Button2_checked'));
        });
    });

    test('ButtonGroup при useButtonState c type=`checkbox` любое количество Button могут иметь свойство checked', () => {
        const ButtonGroupRadio = () => {
            const state = useButtonGroupState({ type: 'checkbox' });

            return (
                <ButtonGroup {...state}>
                    <Button />
                    <Button />
                    <Button />
                </ButtonGroup>
            );
        };

        render(<ButtonGroupRadio />);

        screen.getAllByRole('button').forEach((button) => {
            fireEvent.click(button);
        });
        screen.getAllByRole('button').forEach((button) => {
            expect(button).toHaveClass('Button2_checked');
        });

        fireEvent.click(screen.getAllByRole('button')[0]);
        expect(screen.getAllByRole('button')[0]).not.toHaveClass('Button2_checked');

        screen.getAllByRole('button').forEach((button, index) => {
            if (index !== 0) {
                expect(button).toHaveClass('Button2_checked');
            }
        });
    });

    test('параметер value должен устанавливать изначально выбранные кнопки в `checked`', () => {
        const value = [1, 2];
        const ButtonGroupRadioMappings = () => {
            const state = useButtonGroupState({ type: 'radio', value });

            return (
                <ButtonGroup {...state}>
                    <Button />
                    <Button />
                    <Button />
                </ButtonGroup>
            );
        };

        render(<ButtonGroupRadioMappings />);

        screen.getAllByRole('button').forEach((button, index) => {
            if (value.includes(index)) {
                expect(button).toHaveClass('Button2_checked');
            } else {
                expect(button).not.toHaveClass('Button2_checked');
            }
        });
    });

    test('ButtonGroup при использовании useButtonGroupState с массивом mappings и type=`radio` должен возвращать помимо индекса выбранной кнопки элемент массива под этим индексом', () => {
        const ButtonGroupRadioMappings = () => {
            const state = useButtonGroupState({ type: 'radio', mappings: [1, 2, 3] });

            return (
                <ButtonGroup {...state}>
                    <Button />
                    <Button />
                    <Button />
                </ButtonGroup>
            );
        };

        render(<ButtonGroupRadioMappings />);

        screen.getAllByRole('button').forEach((button, index) => {
            fireEvent.click(button);
            expect(screen.getByRole('group')).toHaveAttribute('mapped', String(index + 1));
        });
    });

    test('ButtonGroup при использовании useButtonGroupState с массивом mappings и type=`checkbox` должен возвращать помимо массива индекса, массив элементов mappings под этими индексами', () => {
        const ButtonGroupRadioMappings = () => {
            const state = useButtonGroupState({ type: 'checkbox', mappings: [1, 2, 3] });

            return (
                <ButtonGroup {...state}>
                    <Button />
                    <Button />
                    <Button />
                </ButtonGroup>
            );
        };

        render(<ButtonGroupRadioMappings />);

        expect(screen.getByRole('group')).toHaveAttribute('mapped', '');

        const arr = [] as number[];
        screen.getAllByRole('button').forEach((button, index) => {
            fireEvent.click(button);
            arr.push(index + 1);
            expect(screen.getByRole('group')).toHaveAttribute('mapped', arr.join(','));
        });
    });
});
