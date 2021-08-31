import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Checkbox as CheckboxCommon } from '../Checkbox';
import { Checkbox as CheckboxDesktop } from '../desktop';
import { Checkbox as CheckboxTouchPad } from '../touch-pad';
import { Checkbox as CheckboxTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', CheckboxDesktop],
    ['touch-pad', CheckboxTouchPad],
    ['touch-phone', CheckboxTouchPhone],
] as const;

describe.each(platforms)('Checkbox@%s', (_platform, Checkbox) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Checkbox id="clientTemplateId" className="mix" view="default" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен проставить в label произвольный tsx (snapshot)', () => {
        const { container } = render(
            <Checkbox id="clientTemplateId" label={<div className="custom">content</div>} view="default" />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        //Так написано, потому что компонент сразу поставляется в обертке.
        expect(CheckboxCommon.displayName).toBe('WithControl(Checkbox)');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLElement>();
        render(<Checkbox innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM элемент', async () => {
        const controlRef = createRef<HTMLInputElement>();
        render(<Checkbox controlRef={controlRef} />);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен вызывать событие onChange', () => {
        const onChange = jest.fn();
        render(<Checkbox checked onChange={onChange} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('должен рендерить label для checkbox', () => {
        render(<Checkbox label="Label Text" />);

        expect(screen.getByLabelText('Label Text')).toBeInTheDocument();
    });

    test('должен устанавливать aria-checked/checked при обновлении свойства checked/indeterminate', () => {
        const { setProps } = render(<Checkbox checked={false} onChange={() => null} />);

        setProps({ checked: true });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
        expect(screen.getByRole('checkbox')).toHaveProperty('checked', true);

        setProps({ checked: false });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
        expect(screen.getByRole('checkbox')).toHaveProperty('checked', false);

        setProps({ indeterminate: true });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
        expect(screen.getByRole('checkbox')).toHaveProperty('checked', true);

        setProps({ indeterminate: false });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
        expect(screen.getByRole('checkbox')).toHaveProperty('checked', false);
    });

    test('должен устанавливать свойство indeterminate у control при обновлении свойства indeterminate', async () => {
        const controlRef = createRef<HTMLInputElement>();
        const { setProps } = render(<Checkbox checked={false} controlRef={controlRef} onChange={() => null} />);

        setProps({ indeterminate: true });
        expect(screen.getByRole('checkbox')).toHaveProperty('indeterminate', true);

        setProps({ indeterminate: false });
        expect(screen.getByRole('checkbox')).toHaveProperty('indeterminate', false);
    });

    test('должен возвращать aria-checked/checked после обновления indeterminate если свойство checked установлено', () => {
        const { setProps } = render(<Checkbox checked={false} onChange={() => null} />);

        setProps({ checked: true });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');

        setProps({ indeterminate: true, checked: true });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');

        setProps({ indeterminate: false, checked: true });
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });
});
