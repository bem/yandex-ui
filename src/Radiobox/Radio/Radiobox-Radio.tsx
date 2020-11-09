import React, { ReactNode, Ref, ChangeEventHandler, MouseEventHandler } from 'react';

import { IWithControlProps, withControl } from '../../withControl/withControl';
import { IWithControlProps as IWithControlDesktopProps } from '../../withControl/withControl@desktop';
import { useUniqId } from '../../useUniqId';
import { IS_TESTING } from '../../lib/env';
import { RadioboxBox as Box } from '../Box/Radiobox-Box';
import { RadioboxControl as Control } from '../Control/Radiobox-Control';
import { cnRadiobox as cn } from '../Radiobox';
import { useRadioGroup } from '../Radiobox.context';
import './Radiobox-Radio.css';

export type RadioboxRadioProps = {
    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Текст подписи к переключателю
     */
    children: ReactNode;

    /**
     * Имя переключателя
     */
    name?: string;

    /**
     * Неактивное состояние переключателя
     */
    disabled?: boolean;

    /**
     * Значение переключателя
     */
    value: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLLabelElement>;

    /**
     * Ссылка на нативный DOM-элемент нативного инпута
     */
    controlRef?: Ref<HTMLInputElement>;

    /**
     * Состояние переключателя
     */
    checked?: boolean;

    /**
     * Колбэк, который срабатывает при изменении значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Колбэк, который срабатывает при клике на контейнер
     */
    onClick?: MouseEventHandler<HTMLLabelElement>;

    /**
     * Устанавливает фокус в переключатель при монтировании
     */
    autoFocus?: boolean;
};

type RadioboxRadioInternalProps = RadioboxRadioProps & IWithControlProps & IWithControlDesktopProps;

export const RadioboxRadio = withControl<RadioboxRadioProps>(
    ({
        autoFocus,
        checked: htmlChecked,
        children,
        className,
        controlRef,
        disabled: htmlDisabled,
        focused,
        innerRef,
        name,
        onBlur,
        onChange,
        onClick,
        onFocus,
        onMouseEnter,
        onMouseLeave,
        pressed,
        value,
    }: RadioboxRadioInternalProps) => {
        const radioGroup = useRadioGroup();

        const checked = radioGroup.value ? radioGroup.value === value : htmlChecked;
        const disabled = radioGroup.disabled || htmlDisabled;
        const radioId = IS_TESTING ? '0' : useUniqId('radio');
        const labelledById = `label-${radioId}`;

        return (
            <label
                className={cn('Radio', { checked, disabled, focused, pressed }, [className])}
                onBlur={onBlur}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={innerRef}
            >
                <Box>
                    <Control
                        autoFocus={autoFocus}
                        checked={checked}
                        controlRef={controlRef}
                        disabled={disabled}
                        labelledBy={labelledById}
                        name={radioGroup.name || name}
                        onChange={radioGroup.onChange || onChange}
                        value={value}
                    />
                </Box>
                {/* Скрываем подпись через aria-hidden, чтобы не читать сразу все подписи в группе,
                    для прочтения конкретной подписи используем aria-labelledby. */}
                <span aria-hidden="true" className={cn('Text')} id={labelledById}>
                    {children}
                </span>
            </label>
        );
    },
);
