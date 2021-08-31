import React, { createRef } from 'react';

import { createClientRender, fireEvent, screen } from '../../internal/testing';
import { Keys } from '../../lib/keyboard';
import { RadioButton as RadioButtonCommon } from '../RadioButton';
import { RadioButton as RadioButtonDesktop } from '../desktop';
import { RadioButton as RadioButtonTouchPad } from '../touch-pad';
import { RadioButton as RadioButtonTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', RadioButtonDesktop],
    ['touch-pad', RadioButtonTouchPad],
    ['touch-phone', RadioButtonTouchPhone],
] as const;

const options = [
    { value: 'a', children: 'Option A' },
    { value: 'b', children: <>Option B</> },
];

describe.each(platforms)('RadioButton@%s', (_platform, RadioButton) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <RadioButton name="rb" value="b" options={options} className="mix" onChange={() => null} />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(RadioButtonCommon.displayName).toBe('RadioButton');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<RadioButton value="" options={[]} innerRef={innerRef} onChange={() => null} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен вызывать событие onChange с event при клике на контрол', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onChange = jest.fn((e) => e.persist());
        render(<RadioButton value="b" options={options} onChange={onChange} />);

        fireEvent.click(screen.getAllByRole('radio')[0]);

        expect(onChange).toHaveBeenCalledTimes(1);

        expect(onChange.mock.calls[0][0].target.value).toBe('a');
    });

    test('при длительном зажатии клавиши отменяется стандартное поведение', () => {
        const preventDefault = jest.spyOn(KeyboardEvent.prototype, 'preventDefault');
        render(<RadioButton value="b" options={options} onChange={() => null} />);

        fireEvent.keyDown(screen.getByRole('radiogroup'), { keyCode: Keys.UP });

        expect(preventDefault).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(screen.getByRole('radiogroup'), { keyCode: Keys.UP, repeat: true });

        expect(preventDefault).toHaveBeenCalledTimes(1);

        preventDefault.mockReset();
    });

    test('должен добавлять и удалять атрибут disabled при обновлении через props', () => {
        const { setProps } = render(<RadioButton value="b" options={options} onChange={() => null} />);

        expect(screen.getAllByRole('radio')[0]).not.toBeDisabled();
        expect(screen.getAllByRole('radio')[1]).not.toBeDisabled();

        setProps({ disabled: true });

        expect(screen.getAllByRole('radio')[0]).toBeDisabled();
        expect(screen.getAllByRole('radio')[1]).toBeDisabled();
    });

    test('должен позволять блокировать и разблокировать отдельные опции через props', () => {
        const { setProps } = render(<RadioButton value="b" options={options} onChange={() => null} />);

        expect(screen.getAllByRole('radio')[0]).not.toBeDisabled();
        expect(screen.getAllByRole('radio')[1]).not.toBeDisabled();

        const optionsWithBDisabled = [
            { value: 'a', label: 'Option A' },
            { value: 'b', label: 'Option B', disabled: true },
        ];

        setProps({ options: optionsWithBDisabled });

        expect(screen.getAllByRole('radio')[0]).not.toBeDisabled();
        expect(screen.getAllByRole('radio')[1]).toBeDisabled();
    });
});
