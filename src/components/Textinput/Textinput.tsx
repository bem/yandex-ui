import React, {
    FC,
    ReactElement,
    ReactNode,
    Ref,
    CSSProperties,
    useState,
    useCallback,
    useRef,
    FocusEventHandler,
    MouseEventHandler,
    KeyboardEventHandler,
} from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { IWithControlProps, withControl } from '../../hocs/withControl/withControl';
import { IIconProps } from '../Icon/Icon';
import { ITextinputControlProps } from './Control/Textinput-Control';
import { ITextinputRegistry } from './Textinput.registry';
import './Textinput.css';

export const cnTextinput = cn('Textinput');

export interface ITextinputProps extends ITextinputControlProps, IWithControlProps<HTMLInputElement> {
    /**
     * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана
     */
    onBlur?: FocusEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии клавиш клавиатуры
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;

    /**
     * Событие, которое возникает при получении компонентом фокуса
     */
    onFocus?: FocusEventHandler<HTMLElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши.
     * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;

    /**
     * Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши.
     * Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;

    /**
     * Состояние фокуса на компоненте
     */
    focused?: boolean;

    /**
     * Состояние нажатия на компоненте
     */
    pressed?: boolean;

    /**
     * Дополнительный контент после контрола
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед контролом
     */
    addonBefore?: ReactNode;

    /**
     * Иконка слева от содержимого текстового поля
     */
    iconLeft?: ReactElement<IIconProps>;

    /**
     * Иконка справа от содержимого текстового поля
     */
    iconRight?: ReactElement<IIconProps>;

    /**
     * Ссылка на корневой DOM элемент компонента
     */
    innerRef?: Ref<HTMLSpanElement>;

    /**
     * Пользовательские стили на корневом DOM элементе.
     */
    style?: CSSProperties;

    /**
     * Текст-подсказка, появляющаяся после компонента.
     * Может иметь различное визуальное оформление в зависимости от свойства `state`.
     */
    hint?: string;

    /**
     * Визуальное состояние компонента.
     * Может использоваться при проверке формы на корректность.
     */
    state?: 'error';
}

/**
 * Однострочное текстовое поле.
 * @param {ITextinputProps} props
 */
const TextinputPresenter: FC<ITextinputProps> = ({
    addonAfter,
    addonBefore,
    className,
    disabled,
    focused,
    iconLeft,
    iconRight,
    innerRef,
    onMouseEnter,
    onMouseLeave,
    style,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    pressed: _pressed,
    // @ts-ignore
    view: _view,
    // @ts-ignore
    pin: _pin,
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    hint: htmlHint,
    state,
    ...props
}) => {
    const { Control, Box, Icon, Hint } = useComponentRegistry<ITextinputRegistry>(cnTextinput());
    const [hint, setHint] = useState(htmlHint);
    const [hintLeave, setHintLeave] = useState(false);
    const prevHint = useRef(htmlHint);

    useUpdateEffect(() => {
        if (htmlHint) {
            setHint(htmlHint);
        } else if (prevHint.current) {
            setHintLeave(true);
        }
        prevHint.current = htmlHint;
    }, [htmlHint]);

    const onAnimationEnd = useCallback(() => {
        if (!htmlHint) {
            setHint('');
            setHintLeave(false);
        }
    }, [htmlHint]);

    return (
        <span
            className={cnTextinput(
                {
                    disabled,
                    focused,
                    iconRight: iconRight !== undefined,
                    state,
                },
                [className],
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
            style={style}
        >
            {addonBefore}
            {iconLeft && <Icon side="left" component={iconLeft} />}
            {iconRight && <Icon side="right" component={iconRight} />}
            <Control {...props} aria-invalid={state === 'error'} disabled={disabled} />
            <Box />
            {addonAfter}
            {hint && (
                <Hint leave={hintLeave} onAnimationEnd={onAnimationEnd}>
                    {hint}
                </Hint>
            )}
        </span>
    );
};

TextinputPresenter.displayName = cnTextinput();

export const Textinput = withControl(TextinputPresenter);
