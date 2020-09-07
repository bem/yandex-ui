import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import '../_hasPin/Textinput_hasPin.css';
import './Textinput_pin_brick-round.css';

export interface ITextinputPinBrickRoundProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'brick-round';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinBrickRoundProps} props
 */
export const withPinBrickRound = withBemMod<ITextinputPinBrickRoundProps, ITextinputProps>(cnTextinput(), {
    pin: 'brick-round',
});
