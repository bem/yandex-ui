import React, { FC, ReactNode } from 'react';

import { useOverlay, UseOverlayOptions, OnClose } from '../useOverlay';

export type LayerManagerProps = UseOverlayOptions & {
    /**
     * Содержимое слоя
     */
    children: ReactNode;
};

export type LayerManagerExtendableProps = Pick<LayerManagerProps, 'onClose'>;

export { OnClose };

/**
 * Компонент реализующий закрытие всплывающих компонентов,
 * таких как `Popup`, `Modal`, `Tooltip` и `MessageBox` в нужном порядке,
 * по умолчанию используется внутри `Popup`.
 *
 * @param {LayerManagerProps}
 *
 * @deprecated `LayerManager` будут удален в следующем мажоре. Используйте хук `useOverlay` вместо него.
 */
export const LayerManager: FC<LayerManagerProps> = (props) => {
    const { children, ...options } = props;

    useOverlay(options);

    return <>{children}</>;
};

LayerManager.displayName = 'LayerManager';
