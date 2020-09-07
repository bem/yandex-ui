import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import '../_hasPin/Textinput_hasPin.css';

export interface ITextinputPinRoundRoundProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'round-round';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinRoundRoundProps} props
 */
export const withPinRoundRound = withBemMod<ITextinputPinRoundRoundProps, ITextinputProps>(cnTextinput(), {
    pin: 'round-round',
});
