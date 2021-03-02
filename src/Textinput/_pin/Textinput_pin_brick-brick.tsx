import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import './Textinput_pin_brick-brick.css';

export interface ITextinputPinBrickBrickProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'brick-brick';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinBrickBrickProps} props
 */
export const withPinBrickBrick = withBemMod<ITextinputPinBrickBrickProps, ITextinputProps>(cnTextinput(), {
    pin: 'brick-brick',
});
