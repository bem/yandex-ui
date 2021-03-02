import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import './Textinput_pin_round-clear.css';

export interface ITextinputPinRoundClearProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'round-clear';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinRoundClearProps} props
 */
export const withPinRoundClear = withBemMod<ITextinputPinRoundClearProps, ITextinputProps>(cnTextinput(), {
    pin: 'round-clear',
});
