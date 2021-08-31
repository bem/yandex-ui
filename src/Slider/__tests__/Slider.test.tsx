import React, { createRef } from 'react';

import { createClientRender, fireEvent } from '../../internal/testing';
import { Slider } from '../Slider';

describe('Slider', () => {
    const render = createClientRender();

    beforeAll(() => {
        const consoleMock = jest.spyOn(console, 'error');
        consoleMock.mockImplementation(() => {});
    });

    test('should render correctly', () => {
        const { container } = render(
            <Slider filled showTicks showTickValues value={[0]} step={25} onInput={() => null} />,
        );
        expect(container).toMatchSnapshot();
    });

    test('should return correct displayName', () => {
        expect(Slider.displayName).toBe('Slider');
    });

    test('should return correct ref with host-node', () => {
        const ref = createRef<HTMLDivElement>();
        const { getByTestId } = render(<Slider value={[1]} onInput={() => null} ref={ref} testId="slider" />);
        expect(ref.current).toEqual(getByTestId('slider-host'));
    });

    test('should call onInput after mouseDown on container', () => {
        const onInput = jest.fn();
        const { getByTestId } = render(<Slider value={[5]} min={0} max={10} onInput={onInput} testId="slider" />);
        const container = getByTestId('slider-container');

        // prettier-ignore
        getByTestId('slider-track').getBoundingClientRect = () => ({
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            height: 32,
            width: 180,
        } as DOMRect);

        fireEvent.mouseDown(container, { button: 0, clientX: 0, clientY: 0 });
        expect(onInput.mock.calls[0][1]).toEqual([0]);
        fireEvent.mouseDown(container, { button: 0, clientX: 180, clientY: 0 });
        expect(onInput.mock.calls[1][1]).toEqual([10]);
    });

    test('should call onInput after keyDown', () => {
        const onInput = jest.fn();
        const { getByTestId } = render(<Slider value={[5]} max={10} onInput={onInput} testId="slider" />);
        const thumb = getByTestId('slider-thumb');
        // increase
        fireEvent.keyDown(thumb, { key: 'ArrowRight' });
        expect(onInput.mock.calls[0][1]).toEqual([6]);
        fireEvent.keyDown(thumb, { key: 'ArrowUp' });
        expect(onInput.mock.calls[1][1]).toEqual([6]);
        fireEvent.keyDown(thumb, { key: 'PageUp' });
        expect(onInput.mock.calls[2][1]).toEqual([10]);
        // decrease
        fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
        expect(onInput.mock.calls[3][1]).toEqual([4]);
        fireEvent.keyDown(thumb, { key: 'ArrowDown' });
        expect(onInput.mock.calls[4][1]).toEqual([4]);
        fireEvent.keyDown(thumb, { key: 'PageDown' });
        expect(onInput.mock.calls[5][1]).toEqual([0]);
        // total
        expect(onInput).toHaveBeenCalledTimes(6);
    });

    test('should call onChange after keyUp', () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<Slider value={[5]} onChange={onChange} onInput={() => null} testId="slider" />);
        const thumb = getByTestId('slider-thumb');
        fireEvent.keyDown(thumb, { key: 'ArrowRight' });
        expect(onChange).toHaveBeenCalledTimes(0);
        fireEvent.keyUp(thumb, { key: 'ArrowRight' });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('should call onInput with step', () => {
        const onInput = jest.fn();
        const { getByTestId } = render(<Slider step={2.5} value={[5]} max={10} onInput={onInput} testId="slider" />);
        const thumb = getByTestId('slider-thumb');
        fireEvent.keyDown(thumb, { key: 'ArrowRight' });
        expect(onInput.mock.calls[0][1]).toEqual([7.5]);
        fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
        expect(onInput.mock.calls[1][1]).toEqual([2.5]);
    });

    test('should render range Slider', () => {
        const { getAllByTestId } = render(<Slider testId="slider" value={[5, 10]} onInput={() => null} />);
        const thumbs = getAllByTestId('slider-thumb');
        expect(thumbs).toHaveLength(2);
        expect(thumbs[0]).toHaveAttribute('aria-valuenow', '5');
        expect(thumbs[1]).toHaveAttribute('aria-valuenow', '10');
    });

    test('should render Thumb with disabled attrs', () => {
        const { getByTestId, rerender } = render(<Slider testId="slider" value={[5]} onInput={() => null} />);
        const thumb = getByTestId('slider-thumb');
        expect(thumb).toHaveAttribute('aria-disabled', 'false');
        expect(thumb).toHaveAttribute('tabindex', '0');
        rerender(<Slider disabled testId="slider" value={[5]} onInput={() => null} />);
        expect(thumb).toHaveAttribute('aria-disabled', 'true');
        expect(thumb).toHaveAttribute('tabindex', '-1');
    });

    test('should render Thumb with a11y attrs', () => {
        const { getByTestId } = render(<Slider testId="slider" value={[5]} min={0} max={10} onInput={() => null} />);
        const thumb = getByTestId('slider-thumb');
        expect(thumb).toHaveAttribute('role', 'slider');
        expect(thumb).toHaveAttribute('type', 'button');
        expect(thumb).toHaveAttribute('aria-valuemax', '10');
        expect(thumb).toHaveAttribute('aria-valuemin', '0');
        expect(thumb).toHaveAttribute('aria-valuenow', '5');
    });

    test('should render with Thumb overridden', () => {
        const { getAllByTestId } = render(
            <Slider
                testId="slider"
                value={[5, 10]}
                onInput={() => null}
                renderThumb={(props, Thumb) => <Thumb {...props}>{props.value}</Thumb>}
            />,
        );
        const thumbs = getAllByTestId('slider-thumb');
        expect(thumbs[0]).toHaveTextContent('5');
        expect(thumbs[1]).toHaveTextContent('10');
    });

    test('should render with TickLabel overridden', () => {
        const { getAllByText } = render(
            <Slider
                showTickValues
                value={[25]}
                step={25}
                max={100}
                onInput={() => null}
                renderTickLabel={(props, TickLabel) => <TickLabel {...props}>label</TickLabel>}
            />,
        );
        expect(getAllByText('label')).toHaveLength(5);
    });

    test('should normalize value in min/max range', () => {
        const { getAllByTestId } = render(
            <Slider testId="slider" value={[-10, 20]} min={0} max={10} onInput={() => null} />,
        );
        const thumbs = getAllByTestId('slider-thumb');
        expect(thumbs[0]).toHaveAttribute('aria-valuenow', '0');
        expect(thumbs[1]).toHaveAttribute('aria-valuenow', '10');
    });

    test('should throw error when value is not defined', () => {
        const fn = () => render(<Slider value={[]} onInput={() => null} />);
        expect(fn).toThrowError('Свойство "value" должно принимать одно или два значения.');
    });

    test('should throw error when min is equal or bigger max (dependency)', () => {
        const fn = () => render(<Slider value={[1]} onInput={() => null} min={10} max={10} />);
        expect(fn).toThrowError('min (10) is equal/bigger than max (10)');
    });
});
