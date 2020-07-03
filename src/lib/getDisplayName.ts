import { ComponentType } from 'react';

/**
 * Возвращает название react-компонента.
 */
export function getDisplayName<T>(component: ComponentType<T>): string {
    return component.displayName || component.name || 'Component';
}
