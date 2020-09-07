import React from 'react';
import { mount } from 'enzyme';

import { Textinput as TextinputBase } from '../Textinput/Textinput@desktop';
import { delay } from '../internal/utils';
import { withDebounceInput } from './withDebounceInput';

describe('withDebounceInput', () => {
    const Textinput = withDebounceInput(TextinputBase);
    let onChange: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
    });

    test('должен применять debounceTimeout к onChange', async () => {
        const wrapper = mount(<Textinput debounceTimeout={1} onChange={onChange} />);
        wrapper.find('input').simulate('change', { target: { value: 'foo' } });
        wrapper.find('input').simulate('change', { target: { value: 'bar' } });
        expect(onChange).toHaveBeenCalledTimes(0);
        await delay(1);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('bar');
    });

    test('должен вызывать onChange без задержек, если debounceTimeout=0', async () => {
        const wrapper = mount(<Textinput debounceTimeout={0} onChange={onChange} />);
        wrapper.find('input').simulate('change', { target: { value: 'foo' } });
        wrapper.find('input').simulate('change', { target: { value: 'bar' } });
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange.mock.calls[0][0].target.value).toBe('foo');
        expect(onChange.mock.calls[1][0].target.value).toBe('bar');
    });

    test('должен форсировать onChange по нажатию Enter', () => {
        const wrapper = mount(<Textinput debounceTimeout={1} onChange={onChange} />);
        wrapper.find('input').simulate('change', { target: { value: 'foo' } });
        wrapper.find('input').simulate('keydown', { key: 'Enter' });
        expect(onChange.mock.calls[0][0].target.value).toBe('foo');
    });

    test('должен форсировать onChange при потере фокуса', () => {
        const wrapper = mount(<Textinput debounceTimeout={1} onChange={onChange} />);
        wrapper.find('input').simulate('change', { target: { value: 'foo' } });
        wrapper.find('input').simulate('blur');
        expect(onChange.mock.calls[0][0].target.value).toBe('foo');
    });

    test('должен учитывать minLength', async () => {
        const wrapper = mount(<Textinput debounceTimeout={0} onChange={onChange} minLength={4} />);
        wrapper.find('input').simulate('change', { target: { value: 'foo' } });
        wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('foobar');
    });
});
