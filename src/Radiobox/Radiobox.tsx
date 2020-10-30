import React, { FC, Ref, ReactNode, useState, useEffect, ChangeEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { IRadioboxRegistry } from './Radiobox.registry';
import { RadioGroupProvider } from './Radiobox.context';
import { RadioboxRadioProps } from './Radio/Radiobox-Radio';
import './Radiobox.css';

export const cnRadiobox = cn('Radiobox');

// Для options используем label вместо children, а так же удаляем
// checked и onChange, т.к. они предполагают использование `Radio` элемента.
type PartialRadioProps = Omit<RadioboxRadioProps, 'children' | 'checked' | 'onChange'>;

export type RadioOptionProps = PartialRadioProps & {
    /**
     * Текст подписи к переключателю
     */
    label: ReactNode;
};

export type RadioboxProps = {
    /**
     * Набор переключателей
     *
     * Может быть использовано вместо `children`
     *
     * @default []
     */
    options?: RadioOptionProps[];

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLSpanElement>;

    /**
     * Неактивное состояние всей группы переключателей
     */
    disabled?: boolean;

    /**
     * Набор переключателей c использованием `Radio` элемента
     *
     * Может быть использовано вместо `options`
     */
    children?: ReactNode;

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Текущее выбранное значение в группе
     */
    value?: string;

    /**
     * Имя для всех `Radio` элементов
     */
    name?: string;

    /**
     * Коллбек, который срабатывает при изменении значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

/**
 * Компонент для создания радиопереключателя.
 * @param {RadioboxProps} props Свойства компонента.
 */
export const Radiobox: FC<RadioboxProps> = ({
    children,
    className,
    disabled,
    innerRef,
    name,
    onChange,
    options = [],
    value,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    view: _view,
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
}) => {
    const { Radio } = useComponentRegistry<IRadioboxRegistry>(cnRadiobox());
    const [context, setContext] = useState({ onChange, value, disabled, name });

    useEffect(() => {
        setContext({ onChange, value, disabled, name });
    }, [onChange, value, disabled, name]);

    return (
        <span className={cnRadiobox(null, [className])} ref={innerRef} role="radiogroup">
            {/* prettier-ignore */}
            <RadioGroupProvider value={context}>
                {children || options.map(({ label, ...option }) => (
                    <Radio key={option.value} {...option}>
                        {label}
                    </Radio>
                ))}
            </RadioGroupProvider>
        </span>
    );
};

Radiobox.displayName = cnRadiobox();
