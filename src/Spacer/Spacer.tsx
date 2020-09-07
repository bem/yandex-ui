import React, { FC, RefObject, CSSProperties, ElementType } from 'react';
import { cn } from '@bem-react/classname';

type SpacerSharedProps = {
    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Пользовательские стили
     */
    style?: CSSProperties;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Компонент для отображения
     *
     * @default 'div'
     */
    as?: ElementType;
};

type SpacerKindProps =
    | {
          all?: string | number;
          vertical?: never;
          horizontal?: never;
          top?: never;
          bottom?: never;
          left?: never;
          right?: never;
      }
    | {
          vertical?: string | number;
          horizontal?: string | number;
          all?: never;
          top?: never;
          bottom?: never;
          left?: never;
          right?: never;
      }
    | {
          all?: never;
          vertical?: never;
          horizontal?: never;
          top?: string | number;
          bottom?: string | number;
          left?: string | number;
          right?: string | number;
      };

export type SpacerProps = SpacerSharedProps & SpacerKindProps;

export const cnSpacer = cn('Spacer');

const getSpace = ({ all, vertical, horizontal, top, left, bottom, right }: any): any => {
    if (all !== undefined) {
        return {
            padding: all,
        };
    }
    if (vertical !== undefined || horizontal !== undefined) {
        return {
            paddingTop: vertical,
            paddingBottom: vertical,
            paddingLeft: horizontal,
            paddingRight: horizontal,
        };
    }
    if (top !== undefined || left !== undefined || bottom !== undefined || right !== undefined) {
        return {
            paddingTop: top,
            paddingBottom: bottom,
            paddingLeft: left,
            paddingRight: right,
        };
    }
};

/**
 * Компонент который вставляет своих детей с заданным смещением.
 * @param {SpacerProps} props
 */
export const Spacer: FC<SpacerProps> = ({
    all,
    vertical,
    horizontal,
    top,
    bottom,
    left,
    right,
    innerRef,
    style,
    className,
    children,
    as: Component = 'div',
    ...props
}) => (
    <Component
        {...props}
        ref={innerRef}
        className={cnSpacer(null, [className])}
        style={{ ...getSpace({ all, vertical, horizontal, top, left, bottom, right }), ...style }}
    >
        {children}
    </Component>
);

Spacer.displayName = cnSpacer();
