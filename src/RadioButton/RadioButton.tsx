import React, { ReactNode, RefObject, CSSProperties, useRef, useCallback, FC } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { useUniqId } from '../useUniqId';
import { Omit } from '../typings/utility-types';
import { IRadioButtonRegistry } from './RadioButton.registry';
import { IRadioButtonControlProps } from './Control/RadioButton-Control';
import './RadioButton.css';

export const cnRadioButton = cn('RadioButton');

export interface IRadioButtonOption extends Omit<IRadioButtonControlProps, 'name' | 'checked'> {
    /**
     * Содержимое кнопки.
     */
    children: ReactNode;
}

export interface IRadioButtonProps extends Omit<IRadioButtonControlProps, 'id' | 'checked' | 'controlRef'> {
    /**
     * Набор опций.
     */
    options: IRadioButtonOption[];

    /**
     * Ссылка на корневой DOM-элемент компонента.
     */
    innerRef?: RefObject<HTMLSpanElement>;

    /**
     * Пользовательские стили на корневом DOM-элементе.
     */
    style?: CSSProperties;

    /**
     * Метка для радиогруппы.
     */
    'aria-label'?: string;
}

/**
 * Компонент для создания радиогруппы.
 * @param {IRadioButtonProps} props
 */
export const RadioButton: FC<IRadioButtonProps> = ({
    className,
    style,
    innerRef,
    'aria-label': ariaLabel,
    options,
    value: rootValue,
    disabled: rootDisabled,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    name = useUniqId(),
    // @ts-ignore
    size: _size,
    // @ts-ignore
    view: _view,
    ...props
}) => {
    const { Plate, Radio, Control, Content } = useComponentRegistry<IRadioButtonRegistry>(cnRadioButton());

    const plateRef = useRef<HTMLDivElement>(null);
    const radioRef = useRef<HTMLLabelElement>();
    const radioCheckedRef = useCallback((radioCheckedNode) => {
        if (!radioCheckedNode) return;

        const plateNode = plateRef.current;

        if (!plateNode) return;

        const radioUncheckedNode = radioRef.current;

        // Показываем Plate только во время перехода между двумя Radio
        if (radioUncheckedNode && radioUncheckedNode !== radioCheckedNode) {
            const setPlateStyle = (node: HTMLElement) => {
                plateNode.style.left = `${node.offsetLeft}px`;
                plateNode.style.width = `${node.offsetWidth}px`;
            };

            setPlateStyle(radioUncheckedNode);

            plateNode.hidden = false;

            setPlateStyle(radioCheckedNode);
        }

        radioRef.current = radioCheckedNode;
    }, []);

    return (
        <span
            className={cnRadioButton(null, [className])}
            style={style}
            ref={innerRef}
            role="radiogroup"
            aria-label={ariaLabel}
            onFocus={(event) => event.currentTarget.setAttribute('data-focused', '')}
            onBlur={(event) => event.currentTarget.removeAttribute('data-focused')}
        >
            <Plate innerRef={plateRef} onTransitionEnd={(event) => (event.currentTarget.hidden = true)} />
            {options.map(({ children, ...controlProps }) => {
                const checked = rootValue === controlProps.value;

                controlProps.disabled = rootDisabled || controlProps.disabled;

                return (
                    <Radio
                        checked={checked}
                        disabled={controlProps.disabled}
                        key={controlProps.value}
                        innerRef={checked ? radioCheckedRef : undefined}
                    >
                        <Control {...props} {...controlProps} checked={checked} name={name} />
                        <Content>{children}</Content>
                    </Radio>
                );
            })}
        </span>
    );
};

RadioButton.displayName = cnRadioButton();
