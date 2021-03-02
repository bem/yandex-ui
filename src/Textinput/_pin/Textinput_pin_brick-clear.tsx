import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import './Textinput_pin_brick-clear.css';

export interface ITextinputPinBrickClearProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'brick-clear';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinBrickClearProps} props
 */
export const withPinBrickClear = withBemMod<ITextinputPinBrickClearProps, ITextinputProps>(cnTextinput(), {
    pin: 'brick-clear',
});
