import React, { ElementType, ReactNode, CSSProperties, PureComponent } from 'react';
import { cn } from '@bem-react/classname';
import { canUseDOM } from '../lib/canUseDOM';

import './Text.css';

export type TextAlignValue = 'start' | 'end' | 'center' | 'justify';

export type TextOverflowValue = 'fade' | 'ellipsis' | 'fade-horizontal';

export type TextColorValue =
    | 'brand'
    | 'inverse'
    | 'primary'
    | 'promo'
    | 'secondary'
    | 'ghost'
    | 'control-primary'
    | 'alert'
    | 'warning'
    | 'disable'
    | 'success'
    | 'control-secondary'
    | 'control-passive'
    | 'control-ghost'
    | 'control-faint'
    | 'control-disable'
    | 'control-link'
    | 'control-error'
    | 'link'
    | 'link-external'
    | 'link-minor'
    | 'link-hover';

export type TextTypographyValue =
    | 'display-xl'
    | 'display-l'
    | 'display-m'
    | 'display-s'
    | 'headline-xl'
    | 'headline-l'
    | 'headline-s'
    | 'headline-xs'
    | 'headline-m'
    | 'subheader-xl'
    | 'subheader-l'
    | 'subheader-m'
    | 'subheader-s'
    | 'body-short-xl'
    | 'body-short-l'
    | 'body-short-m'
    | 'body-short-s'
    | 'body-long-xl'
    | 'body-long-l'
    | 'body-long-m'
    | 'body-long-s'
    | 'caption-xl'
    | 'caption-l'
    | 'caption-m'
    | 'overline-l'
    | 'overline-m'
    | 'overline-s'
    | 'control-xxs'
    | 'control-xs'
    | 'control-s'
    | 'control-l'
    | 'control-xl'
    | 'control-m'
    | 'control-xxl';

export interface TextProps {
    /**
     * Тип элемента для отображения как (строка или компонент).
     */
    as?: ElementType;

    /**
     * Основной контент
     */
    children?: ReactNode;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Задает выравнивание текста в компоненте.
     */
    align?: TextAlignValue;

    /**
     * Задает отображение переполненного текста
     */
    overflow?: TextOverflowValue;

    /**
     * Максимальное количество строк текста (работает в связке с overflow)
     */
    maxLines?: number;

    /**
     * Дополнительные стили
     */
    style?: CSSProperties;

    /**
     * Цвет текста
     */
    color?: TextColorValue;

    /**
     * Задает типографику текста в компоненте.
     */
    typography?: TextTypographyValue;
}

export const cnText = cn('Text');

/**
 * Базовый примитив представления текстовых данных.
 * @param { TextProps }  props
 */
export class Text extends PureComponent<TextProps> {
    static displayName = cnText();

    private static getLineHeight(textElement: HTMLElement) {
        return parseFloat(getComputedStyle(textElement).lineHeight);
    }

    private static isFade(overflow: TextOverflowValue) {
        return overflow === 'fade' || overflow === 'fade-horizontal';
    }

    private static isEllipsis(overflow: TextOverflowValue) {
        return overflow === 'ellipsis';
    }

    private textElement: HTMLElement | null = null;

    componentDidMount() {
        this.updateText();
    }

    componentWillUnmount() {
        this.textElement = null;
    }

    componentDidUpdate(prevProps: Readonly<TextProps>) {
        if (prevProps.typography !== this.props.typography) {
            this.updateText();
        }
    }

    private updateText() {
        const { textElement } = this;
        const { overflow } = this.props;
        if (textElement && overflow && Text.isFade(overflow) && canUseDOM()) {
            this.forceUpdate();
        }
    }

    private getLineHeight(): number | void {
        if (this.textElement) {
            const lineHeightValue = Text.getLineHeight(this.textElement);
            if (!isNaN(lineHeightValue)) {
                return lineHeightValue;
            }
        }
    }

    private setTextElement(el: HTMLElement) {
        this.textElement = el;
    }

    render() {
        const {
            as: ElementType = 'span',
            className,
            align,
            overflow,
            maxLines = 1,
            style = {},
            color,
            typography,
            ...otherProps
        } = this.props;

        if (overflow) {
            if (Text.isEllipsis(overflow)) {
                style.WebkitLineClamp = maxLines;
            } else if (Text.isFade(overflow)) {
                style.whiteSpace = maxLines === 1 ? 'nowrap' : undefined;
                if (maxLines > 1) {
                    const lineHeight = this.getLineHeight();
                    if (typeof lineHeight === 'number') {
                        style.maxHeight = `${maxLines * lineHeight}px`;
                    }
                }
            }
        }

        return (
            <ElementType
                ref={this.setTextElement.bind(this)}
                style={style}
                className={cnText(
                    {
                        color,
                        align,
                        overflow,
                    },
                    [className],
                )}
                {...otherProps}
            />
        );
    }
}
