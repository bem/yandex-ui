import React from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Textinput as TextinputBase } from '../../Textinput/desktop';
import { withDebounceInput } from '../withDebounceInput';

describe('withDebounceInput', () => {
    const render = createClientRender();

    const Textinput = withDebounceInput(TextinputBase);
    let onChange: jest.Mock;

    beforeEach(() => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        onChange = jest.fn((e) => e.persist());
    });

    test('должен применять debounceTimeout к onChange', async () => {
        jest.useFakeTimers();
        render(<Textinput debounceTimeout={1} onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foo' } });
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'bar' } });

        expect(onChange).toHaveBeenCalledTimes(0);

        jest.runAllTimers();

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('bar');

        jest.useRealTimers();
    });

    test('должен вызывать onChange без задержек, если debounceTimeout=0', async () => {
        render(<Textinput debounceTimeout={0} onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foo' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('foo');

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'bar' } });

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange.mock.calls[1][0].target.value).toBe('bar');
    });

    test('должен форсировать onChange по нажатию Enter', () => {
        render(<Textinput debounceTimeout={1} onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foo' } });
        fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

        expect(onChange.mock.calls[0][0].target.value).toBe('foo');
    });

    test('должен форсировать onChange при потере фокуса', () => {
        render(<Textinput debounceTimeout={1} onChange={onChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foo' } });
        fireEvent.blur(screen.getByRole('textbox'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('foo');
    });

    test('должен учитывать minLength', async () => {
        render(<Textinput debounceTimeout={0} onChange={onChange} minLength={4} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foo' } });
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'foobar' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('foobar');
    });
});
