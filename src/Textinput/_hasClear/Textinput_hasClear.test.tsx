import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';

import { serverEnvironmentSetup, delay } from '../../internal/utils';
import { jestEnvironmentSetup, getRoot } from '../../internal/utils/jestEnvironmentSetup';

import { Textinput as TextinputDesktop } from '../Textinput@desktop';
import { Textinput as TextinputTouchPad } from '../Textinput@touch-pad';
import { Textinput as TextinputTouchPhone } from '../Textinput@touch-phone';
import { withHasClear as withHasClearDesktop } from './Textinput_hasClear@desktop';
import { withHasClear as withHasClearTouchPad } from './Textinput_hasClear@touch-pad';
import { withHasClear as withHasClearTouchPhone } from './Textinput_hasClear@touch-phone';

const platforms = [
    ['desktop', withHasClearDesktop(TextinputDesktop)],
    ['touch-pad', withHasClearTouchPad(TextinputTouchPad)],
    ['touch-phone', withHasClearTouchPhone(TextinputTouchPhone)],
];

const TextinputForType = withHasClearDesktop(TextinputDesktop);
type TextinputProps = ExtractProps<typeof TextinputForType>;

describe.each<any>(platforms)('Textinput_hasClear@%s', (_platform, Textinput: ComponentType<TextinputProps>) => {
    jestEnvironmentSetup();

    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textinput hasClear />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Textinput hasClear />)).toMatchSnapshot();
        });

        test('должен вызывать событие onChange с пустым значением в event при клике в clear', () => {
            const onChange = jest.fn();
            const wrapper = mount(<Textinput hasClear onChange={onChange} />);
            wrapper
                .find('.Textinput-Clear')
                .first()
                .simulate('click');
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange.mock.calls[0][0].target.value).toBe('');
        });

        test('должен вызывать событие onClearClick при клике в clear', () => {
            const onClearClick = jest.fn();
            const wrapper = mount(<Textinput hasClear onClearClick={onClearClick} />);
            wrapper
                .find('.Textinput-Clear')
                .first()
                .simulate('click');
            expect(onClearClick).toHaveBeenCalledTimes(1);
        });

        test('должен проставлять фокус в input после клика в clear', async () => {
            const controlRef = createRef<HTMLInputElement>();
            const wrapper = mount(<Textinput hasClear controlRef={controlRef} />, { attachTo: getRoot() });
            await delay(100);
            wrapper
                .find('.Textinput-Clear')
                .first()
                .simulate('click');
            expect(controlRef.current).toEqual(document.activeElement);
        });
    });
});
