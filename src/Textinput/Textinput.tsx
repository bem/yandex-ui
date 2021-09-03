import React, { FC, ReactElement, ReactNode, Ref, CSSProperties, MouseEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { RenderOverride, useRenderOverride } from '../lib/render-override';
import { useUniqId } from '../useUniqId';
import { useTextFieldHint } from '../useTextFieldHint';
import { IWithControlProps, withControl } from '../withControl/withControl';
import { IIconProps } from '../Icon/Icon';
import { ITextinputControlProps } from './Control/Textinput-Control';
import { ITextinputRegistry } from './Textinput.registry';
import './Textinput.css';

export const cnTextinput = cn('Textinput');

export interface ITextinputProps extends ITextinputControlProps, IWithControlProps<HTMLInputElement> {
    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

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

    /**
     * Всплывающая подсказка
     */
    title?: string;

    /**
     * Переопределяет компонент `Control`
     */
    renderControl?: RenderOverride<ITextinputControlProps>;
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
    title,
    renderControl,
    ...props
}) => {
    const { Control: ControlOriginal, Box, Icon, Hint } = useComponentRegistry<ITextinputRegistry>(cnTextinput());
    const Control = useRenderOverride(ControlOriginal, renderControl);

    const hintId = useUniqId('hint');
    const { hint, hintProps } = useTextFieldHint({ hint: htmlHint });

    return (
        <span
            className={cnTextinput(
                {
                    disabled,
                    focused,
                    iconRight: iconRight !== undefined,
                    iconLeft: iconLeft !== undefined,
                    state,
                },
                [className],
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
            style={style}
            title={title}
        >
            {addonBefore}
            {iconLeft && <Icon side="left" component={iconLeft} />}
            {iconRight && <Icon side="right" component={iconRight} />}
            <Control
                {...props}
                aria-invalid={state === 'error'}
                disabled={disabled}
                aria-describedby={hint ? hintId : undefined}
            />
            <Box />
            {addonAfter}
            {hint && (
                <Hint {...hintProps} id={hintId}>
                    {hint}
                </Hint>
            )}
        </span>
    );
};

TextinputPresenter.displayName = cnTextinput();

export const Textinput = withControl(TextinputPresenter);
