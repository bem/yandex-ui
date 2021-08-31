import React, { createRef } from 'react';

import { createClientRender, fireEvent } from '../../internal/testing';
import { Textarea as TextareaDesktop, withHasClear as withHasClearDesktop } from '../desktop';
import { Textarea as TextareaTouchPad, withHasClear as withHasClearTouchPad } from '../touch-pad';
import { Textarea as TextareaTouchPhone, withHasClear as withHasClearTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextareaDesktop)],
    ['touch-pad', withHasClearTouchPad(TextareaTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextareaTouchPhone)],
] as const;

describe.each(platforms)('Textarea_hasClear@%s', (_platform, Textarea) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Textarea hasClear />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен вызывать событие onChange с пустым значением в event при клике в clear', () => {
        const onChange = jest.fn();
        const { container } = render(<Textarea hasClear onChange={onChange} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textarea-Clear')!);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('');
    });

    test('должен вызывать событие onClearClick при клике в clear', () => {
        const onClearClick = jest.fn();
        const { container } = render(<Textarea hasClear onClearClick={onClearClick} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textarea-Clear')!);

        expect(onClearClick).toHaveBeenCalledTimes(1);
    });

    test('должен проставлять фокус в textarea после клика в clear', () => {
        const controlRef = createRef<HTMLTextAreaElement>();
        const { container } = render(<Textarea hasClear controlRef={controlRef} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textarea-Clear')!);

        expect(controlRef.current).toEqual(document.activeElement);
    });
});
