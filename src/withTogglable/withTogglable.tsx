import React, { ComponentType, useEffect, memo, FC, useState, useCallback } from 'react';

export interface IWithTogglableProps {
    /**
     * Состояние открытия.
     */
    opened?: boolean;

    /**
     * Обработчик устанавливающий состояние открытия.
     */
    setOpened?: (nextOpened: boolean) => void;
}

/**
 * ХОК позволяющий управлять состоянием открытия и закрытия.
 */
export const withTogglable = <T extends IWithTogglableProps>(WrappedComponent: ComponentType<T>) => {
    const WithTogglable: FC<T> = memo((props) => {
        const { opened, setOpened } = props;
        const [localOpened, setLocalOpened] = useState(Boolean(opened));

        useEffect(() => {
            if (typeof opened === 'boolean' && localOpened !== opened) {
                setLocalOpened(opened);
            }
        }, [localOpened, opened]);

        const handleSetOpened = useCallback(
            (nextOpened: boolean) => {
                setLocalOpened(nextOpened);

                if (setOpened) {
                    setOpened(nextOpened);
                }
            },
            [setOpened],
        );

        return <WrappedComponent {...props} opened={localOpened} setOpened={handleSetOpened} />;
    });

    return WithTogglable;
};
