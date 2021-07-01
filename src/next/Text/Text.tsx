import React, { CSSProperties, Ref, useState, useEffect, useRef, WeakValidationMap, ValidationMap } from 'react';
import { Composition } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { canUseDOM } from '../lib/canUseDOM';
import { mergeAllRefs } from '../lib/mergeRefs';
import type { TextOverflowValue } from './_overflow/Text_overflow';

type ComponentType = React.ComponentType<{
    ref?: Ref<HTMLElement>;
    style?: CSSProperties;
    className?: string;
}>;

export type TextElementType = keyof React.ReactHTML | ComponentType;

/**
 * Упрощенный ElementType для обхода
 * "Expression produces a union type that is too complex to represent. ts(2590)"
 */
type ShortElementType = 'a' | 'td' | 'span' | ComponentType;

type CommonProps = {
    /**
     * Задает отображение переполненного текста
     */
    overflow?: TextOverflowValue;

    /**
     * Максимальное количество строк текста (работает в связке с overflow)
     * @default 1
     */
    maxLines?: number;

    /**
     * Задает типографику текста в компоненте.
     */
    typography?: unknown;
}

type Props<T extends TextElementType> = CommonProps & {
    ref?: T extends keyof JSX.IntrinsicElements
        ? (JSX.IntrinsicElements[T] extends React.ClassAttributes<infer R> ? Ref<R> : never)
        : (T extends React.ComponentType<{ ref?: infer R }> ? R : never);

    /**
     * Тип элемента для отображения как (строка или компонент).
     * @default "span"
     */
    as?: T;
};

export type TextProps<T extends TextElementType> =
    Props<T> & Omit<React.ComponentProps<T>, keyof Props<T>>;

export const cnText = cn('Text');

const getLineHeight = (textElement: HTMLElement) => {
    return parseFloat(getComputedStyle(textElement).lineHeight);
};

const isFade = (overflow: TextOverflowValue) => {
    return overflow === 'fade' || overflow === 'fade-horizontal';
};

const isEllipsis = (overflow: TextOverflowValue) => {
    return overflow === 'ellipsis';
};

export type Text<U = {}> = {
    <T extends TextElementType = 'span'>(props: TextProps<T> & U): React.ReactElement | null;
    propTypes?: WeakValidationMap<CommonProps & U>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<CommonProps & U>;
    displayName?: string;
}

export type PropsOfText<C extends Text<any>, T extends TextElementType = 'span'> =
    C extends Text<infer U> ? TextProps<T> & U : never;

/**
 * Базовый примитив представления текстовых данных.
 * @param { TextProps } props
 */
export const Text = React.memo(<T extends ShortElementType = 'span'>(props: TextProps<T>) => {
    const {
        as: As = 'span',
        ref,
        className,
        overflow,
        maxLines = 1,
        style = {},
        typography,
        ...otherProps
    } = props;
    const [, forceUpdate] = useState({});
    const textElement = useRef<HTMLElement>(null);

    useEffect(() => {
        if (textElement && overflow && isFade(overflow) && canUseDOM()) {
            forceUpdate({});
        }
    }, [typography, overflow]);

    const newStyle = { ...style };
    if (overflow) {
        if (isEllipsis(overflow)) {
            newStyle.WebkitLineClamp = maxLines;
        } else if (isFade(overflow)) {
            newStyle.whiteSpace = maxLines === 1 ? 'nowrap' : undefined;
            if (maxLines > 1) {
                const lineHeight = textElement.current && getLineHeight(textElement.current);
                if (typeof lineHeight === 'number' && !isNaN(lineHeight)) {
                    newStyle.maxHeight = `${maxLines * lineHeight}px`;
                }
            }
        }
    }

    return (
        <As
            ref={mergeAllRefs(ref, textElement)}
            style={newStyle}
            className={cnText({}, [className])}
            {...otherProps}
        />
    );
}) as Text;
Text.displayName = cnText();

export function enhanceText<H extends Composition<any>, P = {}>(
    hoc: H, Comp?: Text<P>,
): Text<P & (H extends Composition<infer T> ? T : never)> {
    return hoc(Comp || Text) as any;
}
