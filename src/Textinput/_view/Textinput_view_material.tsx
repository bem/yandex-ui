import { withBemMod } from '@bem-react/core';
import React, { useState } from 'react';

import { cnTextinput, ITextinputProps } from '../Textinput';
import { withControl } from '../../withControl/withControl';
import { Label } from '../Label/Textinput-Label';

import './Textinput_view_material.css';

export interface TextinputViewMaterial {
    /**
     * Текст метки, который отображается как плавающая метка или заполнитель.
     */
    label?: string;

    /**
     * Внешний вид текстового поля.
     */
    view?: 'default';

    /**
     * Вариант внешнего вида компонента
     */
    variant?: 'filled' | 'outlined';
}

export const withViewMaterial = withBemMod<TextinputViewMaterial, ITextinputProps>(
    cnTextinput(),
    { view: 'material' },
    (WrappedComponent) => {
        return withControl(({
            hint,
            onChange,
            className,
            label,
            variant,
            focused,
            addonBefore,
            ...props
        }) => {
            const {
                defaultValue,
                view,
                state,
            } = props;
            const [value, setValue] = useState(defaultValue);
            const floated = Boolean(value) || focused;
            const labeled = Boolean(label);

            return (
                <>
                    <WrappedComponent
                        className={cnTextinput({
                            variant,
                        }, [className])}
                        addonBefore={
                            <>
                                { addonBefore }
                                { labeled && (
                                <Label
                                    floated={floated}
                                >
                                    {label}
                                </Label>
                                )
                            }
                            </>
                        }
                        onChange={(event) => {
                            setValue(event.target.value);
                            if (typeof onChange === 'function') {
                                onChange(event);
                            }
                        }}
                        {...props}
                />
                    {hint && (
                        <div
                            className={cnTextinput('Hint', {
                                view,
                                state,
                                variant,
                            })}>{hint}
                        </div>
                    )}
                </>
            );
        });
    },
);
