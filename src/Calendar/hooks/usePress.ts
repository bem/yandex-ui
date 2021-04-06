import { MouseEvent, MouseEventHandler } from 'react';

type UsePressProps = {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
};

/**
 * @internal
 */
export function unstable_usePress(props: UsePressProps) {
    const { disabled, onClick: onCustomClick } = props;

    const onMouseDown = (event: MouseEvent<HTMLElement>) => {
        // Предотвращаем потерю фокуса с элемента.
        if (event.button === 0) {
            event.preventDefault();
        }
    };

    const onClick = (event: MouseEvent<HTMLElement>) => {
        if (event.button === 0) {
            event.stopPropagation();
            if (disabled) {
                event.preventDefault();
            } else {
                event.currentTarget.focus({ preventScroll: true });
                onCustomClick?.(event);
            }
        }
    };

    return {
        pressProps: {
            onClick,
            onMouseDown,
        },
    };
}
