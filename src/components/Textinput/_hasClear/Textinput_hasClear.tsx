import React, { PureComponent, createRef, MouseEventHandler, MouseEvent } from 'react';
import { withBemMod } from '@bem-react/core';
import { ComponentRegistryConsumer } from '@bem-react/di';

import { ITextinputRegistry } from './Textinput_hasClear.registry';
import { ITextinputProps, cnTextinput } from '../Textinput';

export interface ITextinputHasClearProps {
    /**
     * Видимость крестика. Если указан, 
     * работает как stateless комопнент.
     */
    isVisible?: boolean;

    /**
     * Наличие крестика для очистки текстового поля.
     */
    hasClear?: boolean;

    /**
     * Обработчик клика по крестику.
     */
    onClearClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * @internal
     */
    theme?: string;

    /**
     * @internal
     */
    size?: string;

    /**
     * @internal
     */
    view?: string;
}

/**
 * Модификатор, отвечающий за наличие крестика для очистки текстового поля.
 * @param {ITextinputHasClearProps} props
 */
export const withHasClear = withBemMod<ITextinputHasClearProps, ITextinputProps>(
    cnTextinput(),
    { hasClear: true },
    (Textinput) =>
        class WithHasClear extends PureComponent<ITextinputHasClearProps & ITextinputProps> {
            private readonly controlRef = createRef<HTMLInputElement>();

            componentDidMount() {
                if (this.props.controlRef !== undefined) {
                    // @ts-ignore (Объект readonly только в рамках интерфейса)
                    this.props.controlRef.current = this.controlRef.current;
                }
            }

            render() {
                const {
                    addonBefore,
                    // Извлекаем свойства, т.к. они не нужны на DOM узле
                    // FIXME: https://github.com/bem/bem-react/issues/381
                    onClearClick: _onClearClick,
                    hasClear: _hasClear,
                    ...props
                } = this.props;

                return (
                    <ComponentRegistryConsumer id={cnTextinput()}>
                        {({ Clear }: ITextinputRegistry) => {
                            return (
                                <Textinput
                                    {...props}
                                    controlRef={this.controlRef}
                                    addonBefore={
                                        <>
                                            <Clear
                                                onClick={this.onClick}
                                                onMouseDown={this.onMouseDown}
                                                size={this.props.size}
                                                theme={this.props.theme}
                                                view={this.props.view}
                                                visible={this.props.isVisible ?? this.props.isVisible : Boolean(this.props.value)}
                                            />
                                            {addonBefore}
                                        </>
                                    }
                                />
                            );
                        }}
                    </ComponentRegistryConsumer>
                );
            }

            private onMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
                // Предотвращаем потерю фокуса у элемента Control.
                event.preventDefault();
            };

            private onClick = (event: MouseEvent<HTMLSpanElement>) => {
                if (this.controlRef.current !== null && !event.isDefaultPrevented()) {
                    this.controlRef.current.focus();

                    if (this.props.onChange !== undefined) {
                        const originalValue = this.controlRef.current.value;

                        // Создаем синтетическое событие для эмуляции очистки контрола.
                        const syntheticEvent = Object.create(event);
                        syntheticEvent.target = this.controlRef.current;
                        syntheticEvent.currentTarget = this.controlRef.current;

                        this.controlRef.current.value = '';

                        this.props.onChange(syntheticEvent);
                        // Восстанавливаем предыдущее значение на тот случай,
                        // если в обработчике onChange не было установлено пустое значение.
                        this.controlRef.current.value = originalValue;
                    }
                }

                if (this.props.onClearClick !== undefined) {
                    this.props.onClearClick(event);
                }
            };
        },
);
