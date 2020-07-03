import React, { PureComponent, MouseEventHandler, MouseEvent, createRef } from 'react';
import { withBemMod } from '@bem-react/core';
import { ComponentRegistryConsumer } from '@bem-react/di';

import { ITextareaProps, cnTextarea } from '../Textarea';
import { ITextareaRegistry } from './Textarea_hasClear.registry';
import './Textarea_hasClear.css';

export interface ITextareaHasClearProps {
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
    view?: string;
}

/**
 * Модификатор, отвечающий за наличие крестика для очистки текстового поля.
 * @param {ITextareaHasClearProps} props
 */
export const withHasClear = withBemMod<ITextareaHasClearProps, ITextareaProps>(
    cnTextarea(),
    { hasClear: true },
    (Textarea) =>
        class WithHasClear extends PureComponent<ITextareaHasClearProps & ITextareaProps> {
            private readonly controlRef = createRef<HTMLTextAreaElement>();

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
                    <ComponentRegistryConsumer id={cnTextarea()}>
                        {({ Clear }: ITextareaRegistry) => {
                            return (
                                <Textarea
                                    {...props}
                                    controlRef={this.controlRef}
                                    addonBefore={
                                        <>
                                            <Clear
                                                onClick={this.onClick}
                                                onMouseDown={this.onMouseDown}
                                                theme={this.props.theme}
                                                view={this.props.view}
                                                visible={Boolean(this.props.value)}
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
