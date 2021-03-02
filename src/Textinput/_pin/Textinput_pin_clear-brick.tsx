import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import './Textinput_pin_clear-brick.css';

export interface ITextinputPinClearBrickProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'clear-brick';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinClearBrickProps} props
 */
export const withPinClearBrick = withBemMod<ITextinputPinClearBrickProps, ITextinputProps>(cnTextinput(), {
    pin: 'clear-brick',
});
