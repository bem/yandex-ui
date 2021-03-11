import { FC, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { canUseDOM } from '../lib/canUseDOM';

export type PortalProps = {
    /**
     * Содержимое портала
     */
    children: ReactElement;
    /**
     * Сохраняет содержимое в документе после закрытия
     *
     * @default true
     */
    keepMounted?: boolean;
    /**
     * Ссылка на контейнер куда будет размещен портал.
     *
     * Если в качестве значение будет указан `inplace`,
     * то содержимое будет показано без использования портала
     *
     * @default RefObject<HTMLBodyElement>
     */
    scope?: RefObject<HTMLElement> | 'inplace';
    /**
     * Флаг, отвечающий за показ содержимого в документе
     */
    visible?: boolean;
};

export type PortalExtendableProps = Omit<PortalProps, 'children'>;

const canUseDom = canUseDOM();
const defaultContainer = canUseDom ? document.body : null;

/**
 * Реакт-компонент, позволяющий рендерить содержимое в указанном контейнер,
 * обладает ленивым рендерингом и умеет очищать содержимое после скрытия.
 */
export const Portal: FC<PortalProps> = (props) => {
    const { visible, keepMounted = true, children, scope } = props;
    const [container, setContainer] = useState(defaultContainer);
    const isPortalDisabled = scope === 'inplace';
    const isWasVisibleRef = useRef(false);

    useEffect(() => {
        if (typeof scope === 'object') {
            setContainer(scope.current);
        }
    }, [scope]);

    if (visible) {
        isWasVisibleRef.current = true;
    }

    const shouldClientRender = canUseDom && (visible || (keepMounted && isWasVisibleRef.current));
    const shouldServerRender = !canUseDom && visible;

    if (!shouldClientRender && !shouldServerRender) {
        return null;
    }

    if (isPortalDisabled) {
        return children;
    }

    return container ? createPortal(children, container) : null;
};

if (process.env.NODE_ENV !== 'production') {
    Portal.displayName = 'Portal';
}
