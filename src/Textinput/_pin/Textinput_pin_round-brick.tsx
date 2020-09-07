import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import '../_hasPin/Textinput_hasPin.css';
import './Textinput_pin_round-brick.css';

export interface ITextinputPinRoundBrickProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'round-brick';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinRoundBrickProps} props
 */
export const withPinRoundBrick = withBemMod<ITextinputPinRoundBrickProps, ITextinputProps>(cnTextinput(), {
    pin: 'round-brick',
});
