import React, { createRef } from 'react';

import { createClientRender, fireEvent } from '../../internal/testing';
import { Textinput as TextinputDesktop, withHasClear as withHasClearDesktop } from '../desktop';
import { Textinput as TextinputTouchPad, withHasClear as withHasClearTouchPad } from '../touch-pad';
import { Textinput as TextinputTouchPhone, withHasClear as withHasClearTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextinputDesktop)],
    ['touch-pad', withHasClearTouchPad(TextinputTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextinputTouchPhone)],
] as const;

describe.each(platforms)('Textinput_hasClear@%s', (_platform, Textinput) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Textinput hasClear />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен вызывать событие onChange с пустым значением в event при клике в clear', () => {
        const onChange = jest.fn();
        const { container } = render(<Textinput hasClear onChange={onChange} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textinput-Clear')!);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('');
    });

    test('должен вызывать событие onClearClick при клике в clear', () => {
        const onClearClick = jest.fn();
        const { container } = render(<Textinput hasClear onClearClick={onClearClick} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textinput-Clear')!);

        expect(onClearClick).toHaveBeenCalledTimes(1);
    });

    test('должен проставлять фокус в input после клика в clear', async () => {
        const controlRef = createRef<HTMLInputElement>();
        const { container } = render(<Textinput hasClear controlRef={controlRef} />);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.click(container.querySelector('.Textinput-Clear')!);

        expect(controlRef.current).toHaveFocus();
    });
});
