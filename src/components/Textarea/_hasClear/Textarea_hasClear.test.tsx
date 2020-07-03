import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { serverEnvironmentSetup, delay } from '../../../internal/utils';
import { jestEnvironmentSetup, getRoot } from '../../../internal/utils/jestEnvironmentSetup';

import { Textarea as TextareaDesktop } from '../Textarea@desktop';
import { Textarea as TextareaTouchPad } from '../Textarea@touch-pad';
import { Textarea as TextareaTouchPhone } from '../Textarea@touch-phone';
import { withHasClear as withHasClearDesktop } from './Textarea_hasClear@desktop';
import { withHasClear as withHasClearTouchPad } from './Textarea_hasClear@touch-pad';
import { withHasClear as withHasClearTouchPhone } from './Textarea_hasClear@touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextareaDesktop)],
    ['touch-pad', withHasClearTouchPad(TextareaTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextareaTouchPhone)],
];

const TextareaForType = withHasClearDesktop(TextareaDesktop);
type TextareaProps = ExtractProps<typeof TextareaForType>;

describe.each<any>(platforms)('Textarea_hasClear@%s', (_platform, Textarea: ComponentType<TextareaProps>) => {
    jestEnvironmentSetup();

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textarea hasClear />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textarea hasClear />)).toMatchSnapshot();
        });

        test('должен вызывать событие onChange с пустым значением в event при клике в clear', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Textarea hasClear onChange={onChange} />);
            wrapper
                .find('.Textarea-Clear')
                .first()
                .simulate('click');
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('');
        });

        test('должен вызывать событие onClearClick при клике в clear', () => {
            const onClearClick = jest.fn();
            const wrapper = mount(<Textarea hasClear onClearClick={onClearClick} />);
            wrapper
                .find('.Textarea-Clear')
                .first()
                .simulate('click');
            expect(onClearClick).toHaveBeenCalledTimes(1);
        });

        test('должен проставлять фокус в textarea после клика в clear', async () => {
            const controlRef = createRef<HTMLTextAreaElement>();
            const wrapper = mount(<Textarea hasClear controlRef={controlRef} />, { attachTo: getRoot() });
            await delay(100);
            wrapper
                .find('.Textarea-Clear')
                .first()
                .simulate('click');
            expect(controlRef.current).toEqual(document.activeElement);
        });
    });
});
